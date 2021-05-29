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
    title: "Add a specialist",
    url: "/",
    iosIcon: personAddOutline,
    mdIcon: personAddSharp,
  },
  {
    title: "All specialists",
    url: "/all-specialists",
    iosIcon: peopleOutline,
    mdIcon: peopleSharp,
  },
  {
    title: "Favorites",
    url: "/page/Favorites",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Archived",
    url: "/page/Archived",
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },
  {
    title: "Trash",
    url: "/page/Trash",
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
          <h1>Application</h1>
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
