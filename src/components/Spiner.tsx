import { FC } from "react";
import { IonLoading } from "@ionic/react";

const Spiner: FC = () => {
  return (
    <IonLoading
      cssClass="my-custom-class"
      isOpen
      message={"Пожалуйста подождите..."}
    />
  );
};

export default Spiner;
