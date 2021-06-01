import React, { FC } from 'react';
import {
  IonAvatar, IonItem, IonLabel, IonNote, IonIcon,
} from '@ionic/react';
import { heartCircleOutline, heartDislikeCircleOutline } from 'ionicons/icons';
import { PersonItem } from '../../utils/types';
import avatar from '../pictures/avatar.svg';
import './PersonCard.css';

interface PersonCardProps {
  person: PersonItem;
  toFavourite: (id: string) => void;
  toDisfavourite: (id: string) => void;
}

const PersonCard: FC<PersonCardProps> = (props) => {
  const { person, toFavourite, toDisfavourite } = props;
  const { isFavourite } = person.personData;
  const { isDisfavourite } = person.personData;

  return (
    <>
      <IonItem>
        <IonAvatar slot="start">
          <img src={avatar} alt={person.personId} />
        </IonAvatar>
        <IonLabel>
          <h2>{person.personId}</h2>
          <IonNote>
            <h3>{person.personData.type}</h3>
            <h4>
              <a href={`mailto:${person.personData.email}`}>
                {person.personData.email}
              </a>
            </h4>
          </IonNote>
          <div className="icon-wrapper">
            <div>
              <IonIcon
                class={isFavourite ? 'icon-active' : 'icon'}
                icon={heartCircleOutline}
                onClick={() => toFavourite(person.personId)}
              />
            </div>
            <div>
              <IonIcon
                class={isDisfavourite ? 'icon-active' : 'icon'}
                icon={heartDislikeCircleOutline}
                onClick={() => toDisfavourite(person.personId)}
              />
            </div>
          </div>
        </IonLabel>
      </IonItem>
    </>
  );
};

export default PersonCard;
