import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDHtiMUig_QNC7qJhl3x9PboWAjl8xeSnE',
  authDomain: 'linkedin-clone-6bf7a.firebaseapp.com',
  projectId: 'linkedin-clone-6bf7a',
  storageBucket: 'linkedin-clone-6bf7a.appspot.com',
  messagingSenderId: '744184513441',
  appId: '1:744184513441:web:594f6576859eb523e941e0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
