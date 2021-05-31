import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItemDivider,
  IonItem,
  IonInput,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/react";
import { unwrapResult } from "@reduxjs/toolkit";
import { FC, useState, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addNewSpecialist } from "../redux/specialistsSlice";
import { AppDispatch } from "../redux/store";

import "./AddSpecialist.css";

const AddSpecialist: FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [specialization, setSpecialization] = useState<string>("");
  const name = `${lastName} ${firstName}`;

  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const formSubmit = {
      email: mail,
      type: specialization,
      photo: "null",
      isFavourite: false,
      isDisfavourite: false,
    };
    // Control that the fields are not empty
    if (canSave) {
      try {
        const resultAction = await dispatch(
          addNewSpecialist({ idName: name, formSubmit })
        );

        /* In case of an error, it will work catch  */
        unwrapResult(resultAction);
        history.push("/all-specialists");
        setFirstName("");
        setLastName("");
        setMail("");
        setSpecialization("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const canSave =
    Boolean(firstName) &&
    Boolean(lastName) &&
    Boolean(mail) &&
    Boolean(specialization);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Добавить специалиста</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Форма добавления специалиста</IonItemDivider>
          <form onSubmit={handleSubmit}>
            <IonItem>
              <IonLabel position="floating">Фамилия*</IonLabel>
              <IonInput
                type="text"
                value={lastName}
                onIonChange={(e) => setLastName(e.detail.value!)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Имя*</IonLabel>
              <IonInput
                type="text"
                value={firstName}
                onIonChange={(e) => setFirstName(e.detail.value!)}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Email*</IonLabel>
              <IonInput
                type="email"
                value={mail}
                onIonChange={(e) => setMail(e.detail.value!)}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Специализация*</IonLabel>
              <IonSelect
                value={specialization}
                placeholder="Выбрать"
                onIonChange={(e) => setSpecialization(e.detail.value)}
              >
                <IonSelectOption value="Психолог">Психолог</IonSelectOption>
                <IonSelectOption value="Психотерапевт">
                  Психотерапевт
                </IonSelectOption>
                <IonSelectOption value="Психиатр">Психиатр</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonButton
              className="btn-submit"
              type="submit"
              expand="block"
              color="primary"
              onClick={handleSubmit}
              disabled={!canSave}
            >
              Отправить
            </IonButton>
          </form>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AddSpecialist;
