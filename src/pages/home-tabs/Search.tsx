import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonSearchbar
} from '@ionic/react';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar placeholder="Search for a dress..." />
        <IonList>
          <IonItem>
            <IonLabel>Casual Dress</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Evening Gown</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Cocktail Dress</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Maxi Dress</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Bodycon Dress</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;
