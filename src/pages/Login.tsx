import React, { useState } from 'react';
import { 
  IonButton,
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonInput,
  IonItem,
  IonLabel,
  useIonRouter,
  IonAlert
} from '@ionic/react';
 

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const doLogin = () => {
    if (username === '' || password === '') {
      setShowAlert(true);
    } else {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding background-image'>
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput 
            value={username} 
            onIonChange={e => setUsername(e.detail.value!)} 
            required 
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput 
            type="password" 
            value={password} 
            onIonChange={e => setPassword(e.detail.value!)} 
            required 
          />
        </IonItem>
        <IonButton onClick={doLogin} expand="full" className="ion-margin-top">
          Login
        </IonButton>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Error'}
          message={'Please enter both username and password.'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;