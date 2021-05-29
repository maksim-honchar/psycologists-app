import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { FC } from "react";

// import "./AddSpecialist.css";

const AddSpecialist: FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Add a specialist</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Content of page Add Specialist</p>
      </IonContent>
    </IonPage>
  );
};

export default AddSpecialist;
