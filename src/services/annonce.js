import firebase from 'firebase';
import "firebase/auth";
import {auth} from './firebase';
import 'firebase/firestore';
import db from './firestore';

export const annonce = async({titre, description, prix, telephone, categorie, paiement, livraison, photos})=>{
    
      const annoncedb = db.collection("annonces").add({
        titre: titre, 
        description: description, 
        prix: prix, 
        telephone: telephone, 
        categorie: categorie, 
        paiement: paiement, 
        livraison: livraison, 
        photos: photos
      });  
      


}
