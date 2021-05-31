/* Using with IonPopover Component */

import { FC, useState } from "react";
import {
  IonPopover,
  IonButton,
  IonList,
  IonListHeader,
  IonItem,
} from "@ionic/react";

interface TypeListProps {
  setType: (type: boolean | string) => void;
  showTypeString: boolean;
  showType: string | boolean;
}

const TypeList: FC<TypeListProps> = ({ setType, showTypeString, showType }) => {
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  });

  const chooseType = (type: string | boolean) => {
    setType(type);
    closePopower();
  };

  const closePopower = () => {
    setShowPopover({ ...popoverState, showPopover: false });
  };

  return (
    <>
      <IonPopover
        cssClass="my-custom-class"
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() =>
          setShowPopover({ showPopover: false, event: undefined })
        }
      >
        <IonList>
          <IonListHeader>выберите тип специалиста</IonListHeader>
          <IonItem button onClick={() => chooseType(true)}>
            Все
          </IonItem>
          <IonItem button onClick={() => chooseType("Психолог")}>
            Психолог
          </IonItem>
          <IonItem button onClick={() => chooseType("Психотерапевт")}>
            Психотерапевт
          </IonItem>
          <IonItem button onClick={() => chooseType("Психиатр")}>
            Психиатр
          </IonItem>
          <IonItem lines="none" detail={false} button onClick={closePopower}>
            Закрыть
          </IonItem>
        </IonList>
      </IonPopover>
      <IonButton
        style={{ width: 200 }}
        onClick={(e: any) => {
          e.persist();
          setShowPopover({ showPopover: true, event: e });
        }}
      >
        {showTypeString ? showType : "выбрать тип"}
      </IonButton>
    </>
  );
};

export default TypeList;
