import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';
import db from './firestore';

export const annonce = async({titre, description, prix, telephone, categorie, paiement, livraison, photos})=>{
  //db.ref('/images/${photos.name}').put(photos);
  const url='';
  var downloadurl='';
  var ref = db.child('images/' + photos.name);
  const uploadTask = ref.put(photos);

  uploadTask.on("state_changed", console.log, console.error, () => {
    ref
      .getDownloadURL()
      .then((url) => {
        downloadurl=url;
      });
    });
      const annoncedb = db.collection("annonces").add({
        titre: titre, 
        description: description, 
        prix: prix, 
        telephone: telephone, 
        categorie: categorie, 
        paiement: paiement, 
        livraison: livraison, 
        photos: downloadurl
      });  
      


}
