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
  IonAccordionGroup,
  IonAlert, IonButton,
  IonActionSheet,
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
          <IonTitle>Feed</IonTitle>
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
          <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
      ></IonAlert>
      <>
      <IonButton id="open-action-sheet">Open</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    </>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Feed;