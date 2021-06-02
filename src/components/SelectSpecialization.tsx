import {
  IonItem, IonLabel, IonSelect, IonSelectOption,
} from '@ionic/react';
import React, { FC } from 'react';

interface SpecializationProps {
    specialization: string;
    setSpecialization: (spec: string) => void,
    isAddSpecialist?: boolean
}

const SelectSpecialization: FC<SpecializationProps> = (props) => {
  const { specialization, setSpecialization, isAddSpecialist } = props;

  const optionAll = (
    <IonSelectOption value="Все">
      Все
    </IonSelectOption>
  );

  return (
    <IonItem>
      <IonLabel>Специализация*</IonLabel>
      <IonSelect
        value={specialization}
        placeholder="Выбрать"
        onIonChange={(e) => setSpecialization(e.detail.value)}
      >
        {!isAddSpecialist && optionAll}
        <IonSelectOption value="Психолог">
          Психолог
        </IonSelectOption>
        <IonSelectOption value="Психотерапевт">
          Психотерапевт
        </IonSelectOption>
        <IonSelectOption value="Психиатр">
          Психиатр
        </IonSelectOption>
      </IonSelect>
    </IonItem>
  );
};

export default SelectSpecialization;
