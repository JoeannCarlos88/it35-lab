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
  IonIcon,
  IonAccordion,
  IonAccordionGroup
} from '@ionic/react';
import { star } from 'ionicons/icons';

const dresses = [
  { name: 'Cocktail Dress', sizes: 'S, M, L, XL' },
  { name: 'Evening Gown', sizes: 'M, L, XL' },
  { name: 'Maxi Dress', sizes: 'S, M, L' },
  { name: 'Bodycon Dress', sizes: 'XS, S, M, L' },
  { name: 'A-line Dress', sizes: 'S, M, L, XL' }
];

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonAccordionGroup>
            {dresses.map((dress, index) => (
              <IonAccordion key={index} value={dress.name}>
                <IonItem slot="header">
                  <IonLabel>{dress.name}</IonLabel>
                  <IonIcon icon={star} color="warning" slot="end" />
                </IonItem>
                <div slot="content" style={{ padding: '10px' }}>
                  Available Sizes: {dress.sizes}
                </div>
              </IonAccordion>
            ))}
          </IonAccordionGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Feed;