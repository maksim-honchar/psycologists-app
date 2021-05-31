import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  archiveOutline,
  archiveSharp,
  heartDislikeOutline,
  heartDislikeSharp,
  heartOutline,
  heartSharp,
  peopleOutline,
  peopleSharp,
  personAddOutline,
  personAddSharp,
  trashOutline,
  trashSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Добавить специалиста",
    url: "/",
    iosIcon: personAddOutline,
    mdIcon: personAddSharp,
  },
  {
    title: "Все специалисты",
    url: "/all-specialists",
    iosIcon: peopleOutline,
    mdIcon: peopleSharp,
  },
  {
    title: "Избранные",
    url: "/favourites",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Черный список",
    url: "/black-list",
    iosIcon: heartDislikeOutline,
    mdIcon: heartDislikeSharp,
  },
  {
    title: "Аналитика",
    url: "/analytics",
    iosIcon: trashOutline,
    mdIcon: trashSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonListHeader>
          <h1>Приложение</h1>
        </IonListHeader>
        <IonNote>maksim.honchar@gmail.com</IonNote>
        {appPages.map((appPage, index) => {
          return (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                className={location.pathname === appPage.url ? "selected" : ""}
                routerLink={appPage.url}
                routerDirection="none"
                lines="none"
                detail={false}
              >
                <IonIcon
                  slot="start"
                  ios={appPage.iosIcon}
                  md={appPage.mdIcon}
                />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
