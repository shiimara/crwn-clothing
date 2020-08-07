import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyABH3QbQR-26SXRUAkUqRL882xI1RlQ6bs",
    authDomain: "crwn-clothing-5befe.firebaseapp.com",
    databaseURL: "https://crwn-clothing-5befe.firebaseio.com",
    projectId: "crwn-clothing-5befe",
    storageBucket: "crwn-clothing-5befe.appspot.com",
    messagingSenderId: "1062605842675",
    appId: "1:1062605842675:web:cf901c2601f8bd5102ef86",
    measurementId: "G-VW27XZ7JW1"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth ();
  export const firestore = firebase.firestore();
   const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({prompt: 'select_account'});
   export const signInWithGoogle = () => auth.signInWithPopup(provider);
   export default firebase;

