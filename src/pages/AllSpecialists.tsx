import {
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { FC, useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { useSetHooks } from "../hooks/hooks";
import {
  addToDisfavourite,
  addToFavourite,
  fetchSpecialists,
} from "../redux/specialistsSlice";
import TypeList from "../components/TypeList";
import PersonCard from "../components/PersonCard/PersonCard";

import "./AllSpecialists.css";

const AllSpecialists: FC = () => {
  const dispatch = useDispatch();
  const { personsStatus, persons } = useSetHooks();
  const [showType, setShowType] = useState<boolean | string>(true);
  const showTypeString = typeof showType === "string";

  // Set display mode by specialist type
  const setType = (type: string | boolean) => setShowType(type);

  // Dispatching thunks  favourite/unfavourite
  const toFavourite = (id: string) => dispatch(addToFavourite(id));
  const toDisfavourite = (id: string) => dispatch(addToDisfavourite(id));

  // maping persons with filtration option
  const listPersons = persons
    .filter(({ personData: { type } }) =>
      showTypeString ? type === showType : true
    )
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
    if (personsStatus === "idle") {
      dispatch(fetchSpecialists());
    }
  }, [dispatch, personsStatus]);

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
      <IonContent>
        <div className="popover">
          <TypeList
            setType={setType}
            showTypeString={showTypeString}
            showType={showType}
          />
        </div>
        <IonList>{listPersons}</IonList>
      </IonContent>
    </IonPage>
  );
};

export default AllSpecialists;
