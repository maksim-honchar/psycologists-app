import { FC } from "react";
import { IonBadge, IonItem, IonLabel, IonNote } from "@ionic/react";

interface AnalyticsProps {
  totalAmount: number;
  amountPsychologist: number;
  amountPsychotherapist: number;
  amountPsychiatrist: number;
  amountFavourites: number;
  favourPsychologist: number;
  favourPsychotherapist: number;
  favourPsychiatrist: number;
  disFavourites: number;
  disFavourPsychologist: number;
  disFavourPsychotherapist: number;
  disFavourPsychiatrist: number;
}

const AnalyticsContnet: FC<AnalyticsProps> = (props) => {
  const {
    totalAmount,
    amountPsychologist,
    amountPsychotherapist,
    amountPsychiatrist,
    amountFavourites,
    favourPsychologist,
    favourPsychotherapist,
    favourPsychiatrist,
    disFavourites,
    disFavourPsychologist,
    disFavourPsychotherapist,
    disFavourPsychiatrist,
  } = props;

  return (
    <>
      <IonItem>
        <IonLabel>
          <h1>Общее количество специалистов</h1>
        </IonLabel>
        <IonBadge slot="start">{totalAmount}</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h1>Психологи</h1>
        </IonLabel>
        <IonBadge slot="start">{amountPsychologist}</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h1>Психотерапевты</h1>
        </IonLabel>
        <IonBadge slot="start">{amountPsychotherapist}</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h1>Психиаторы</h1>
        </IonLabel>
        <IonBadge slot="start">{amountPsychiatrist}</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h1>Избранные</h1>
          <IonNote>
            психологи: {favourPsychologist}, психотерапевты:{" "}
            {favourPsychotherapist}, психиаторы: {favourPsychiatrist}
          </IonNote>
        </IonLabel>
        <IonBadge slot="start">{amountFavourites}</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h1>Черный список</h1>
          <IonNote>
            психологи: {disFavourPsychologist}, психотерапевты:{" "}
            {disFavourPsychotherapist} , психиаторы: {disFavourPsychiatrist}
          </IonNote>
        </IonLabel>
        <IonBadge slot="start">{disFavourites}</IonBadge>
      </IonItem>
    </>
  );
};

export default AnalyticsContnet;
