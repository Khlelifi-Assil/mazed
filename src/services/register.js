 /* eslint-disable */
import firebase from 'firebase';
import "firebase/auth";
import {auth} from './firebase';
import 'firebase/firestore';
import db from './firestore';

export const register = async({email, nom, prenom, password, tel, adresse})=>{
    const resp = await firebase.auth()
      .createUserWithEmailAndPassword(email, password);

      const userRef = db.collection("users").add({
        email: email,
        nom: nom,
        prenom: prenom,
        password: password,
        tel: tel,
        adresse: adresse
      });  
      

      return resp.user;

}
