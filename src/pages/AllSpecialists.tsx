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

// import "./AllSpecialist.css";

const AllSpecialists: FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>All specialists</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Content of page All Specialists</p>
      </IonContent>
    </IonPage>
  );
};

export default AllSpecialists;
