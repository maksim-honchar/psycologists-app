import {
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { FC, useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useSetHooks } from '../hooks/hooks';
import {
  addToDisfavourite,
  addToFavourite,
  fetchSpecialists,
} from '../redux/specialistsSlice';
import SelectSpecialization from '../components/SelectSpecialization';
import Spiner from '../components/Spiner';
import PersonCard from '../components/PersonCard/PersonCard';
import './pages.css';

const AllSpecialists: FC = () => {
  const dispatch = useDispatch();
  const { personsStatus, persons } = useSetHooks();
  const [specialization, setSpecialization] = useState<string>('Все');
  const isAll = specialization === 'Все';
  const personsLength = persons.length > 0;

  // Dispatching thunks  favourite/unfavourite
  const toFavourite = (id: string) => dispatch(addToFavourite(id));
  const toDisfavourite = (id: string) => dispatch(addToDisfavourite(id));

  // maping persons with filtration option
  const listPersons = persons
    .filter(({ personData: { type } }) => (isAll ? true : type === specialization))
    .map((person) => (
      <PersonCard
        person={person}
        key={nanoid()}
        toFavourite={toFavourite}
        toDisfavourite={toDisfavourite}
      />
    ));

  // dispatching thunk function for fetching persons from firestore
  useEffect(() => {
    if (personsStatus === 'idle') {
      dispatch(fetchSpecialists());
    }
  }, [dispatch, personsStatus]);

  const content = (
    <>
      <div className="select-wrapper">
        <SelectSpecialization
          specialization={specialization}
          setSpecialization={setSpecialization}
        />
      </div>
      <IonList>{listPersons}</IonList>
    </>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Все специалисты</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{personsLength ? content : <Spiner />}</IonContent>
    </IonPage>
  );
};

export default AllSpecialists;
