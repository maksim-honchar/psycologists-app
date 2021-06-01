import React, { FC } from 'react';
import { IonLoading } from '@ionic/react';

const Spiner: FC = () => (
  <IonLoading
    cssClass="my-custom-class"
    isOpen
    message="Пожалуйста подождите..."
  />
);

export default Spiner;
