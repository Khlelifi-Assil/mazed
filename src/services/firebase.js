import firebase from "firebase/app";
import 'firebase/auth';

firebase.initializeApp( {
    apiKey: "AIzaSyBfm6WUMsnu-nVanKwmYVhfo9PrsS3aL0Q",
    authDomain: "mazed-af86f.firebaseapp.com",
    projectId: "mazed-af86f",
    storageBucket: "mazed-af86f.appspot.com",
    messagingSenderId: "575729686364",
    appId: "1:575729686364:web:7308ac1a8b71b3379a1399",
    measurementId: "G-LWQWJDMKRV"
  });
 

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
//export const db = firebase.firestore();

export default firebase;

