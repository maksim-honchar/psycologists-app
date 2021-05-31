import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSetHooks } from "../hooks/hooks";
import { fetchSpecialists } from "../redux/specialistsSlice";
import AnalyticsContnet from "../components/AnalyticsContent/AnalyticsContent";
import Spiner from "../components/Spiner";

const Analytics: FC = () => {
  const dispatch = useDispatch();
  const { personsStatus, persons } = useSetHooks();
  const personsLength = persons.length > 0;

  // Amount all persons
  const totalAmount = persons.length;

  // Amount persons with type - psychologist
  const amountPsychologist = persons.filter(
    ({ personData: { type } }) => type === "Психолог"
  ).length;

  // Amount persons with type - psychotherapist
  const amountPsychotherapist = persons.filter(
    ({ personData: { type } }) => type === "Психотерапевт"
  ).length;

  // Amount persons with type - psychiatrist
  const amountPsychiatrist = persons.filter(
    ({ personData: { type } }) => type === "Психиатр"
  ).length;

  // Amount favourites persons
  const amountFavourites = persons.filter(
    ({ personData: { isFavourite } }) => isFavourite
  ).length;

  // Amount favourites persons with type - psychologist
  const favourPsychologist = persons
    .filter(({ personData: { type } }) => type === "Психолог")
    .filter(({ personData: { isFavourite } }) => isFavourite).length;

  // Amount favourites persons with type - psychotherapist
  const favourPsychotherapist = persons
    .filter(({ personData: { type } }) => type === "Психотерапевт")
    .filter(({ personData: { isFavourite } }) => isFavourite).length;

  // Amount favourites persons with type -  psychiatrist
  const favourPsychiatrist = persons
    .filter(({ personData: { type } }) => type === "Психиатр")
    .filter(({ personData: { isFavourite } }) => isFavourite).length;

  // Amount disfavourites persons
  const disFavourites = persons.filter(
    ({ personData: { isDisfavourite } }) => isDisfavourite
  ).length;

  // Amount disfavourites persons with type - psychologist
  const disFavourPsychologist = persons
    .filter(({ personData: { type } }) => type === "Психолог")
    .filter(({ personData: { isDisfavourite } }) => isDisfavourite).length;

  // Amount disfavourites persons with type - psychotherapist
  const disFavourPsychotherapist = persons
    .filter(({ personData: { type } }) => type === "Психотерапевт")
    .filter(({ personData: { isDisfavourite } }) => isDisfavourite).length;

  // Amount disfavourites persons with type -  psychiatrist
  const disFavourPsychiatrist = persons
    .filter(({ personData: { type } }) => type === "Психиатр")
    .filter(({ personData: { isDisfavourite } }) => isDisfavourite).length;

  // dispatching thunk function for fetching persons from firestore
  useEffect(() => {
    if (personsStatus === "idle") {
      dispatch(fetchSpecialists());
    }
  }, [dispatch, personsStatus]);

  const Content = (
    <AnalyticsContnet
      totalAmount={totalAmount}
      amountPsychologist={amountPsychologist}
      amountPsychotherapist={amountPsychotherapist}
      amountPsychiatrist={amountPsychiatrist}
      amountFavourites={amountFavourites}
      favourPsychologist={favourPsychologist}
      favourPsychotherapist={favourPsychotherapist}
      favourPsychiatrist={favourPsychiatrist}
      disFavourites={disFavourites}
      disFavourPsychologist={disFavourPsychologist}
      disFavourPsychotherapist={disFavourPsychotherapist}
      disFavourPsychiatrist={disFavourPsychiatrist}
    />
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Аналитика</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{personsLength ? Content : <Spiner />}</IonContent>
    </IonPage>
  );
};

export default Analytics;
