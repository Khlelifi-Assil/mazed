 /* eslint-disable */
import React, {useState} from 'react';
import '../../constants/fonts/material-icon/css/material-design-iconic-font.min.css';
import '../../constants/css/style.css';
import 'firebase/firestore';
import 'firebase/storage';
import firebase from '../../services/firebase';
import db from '../../services/firestore';
//import {annonce} from '../../services/annonce';

const Annonce = () => {
    const [form,setForm] = useState({
        titre: '', 
        description: '', 
        prix: '', 
        telephone: '', 
        categorie: '', 
        paiement: '', 
        livraison: '', 
        photos: ''
    })
   /* const handleSubmit = async(e)=>{
        e.preventDefault();
        await annonce(form);
    }*/
    const [img,setimg] = useState({
        image: null,
        progress:0,
        downloadURL: null
      })
    
    const handleUpload = () =>{
        // console.log(this.state.image);
        let file = img.image;
        var storage = firebase.storage();
        var storageRef = storage.ref();
        var uploadTask = storageRef.child('images/').put(file);
      
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) =>{
            var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
            setimg({...img,progress: progress.value})
          },(error) =>{
            throw error
          },() =>{
            // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
      
            uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
              setimg({
                ...img, downloadURL: url
              })
            })
                  
         }
       ) 
      }
      const handleSubmit  = () =>{
db.collection("annonces").add({
        titre: form.titre, 
                description: form.description, 
                prix: form.prix, 
                telephone: form.telephone, 
                categorie: form.categorie, 
                paiement: form.paiement, 
                livraison: form.livraison, 
                photos: img.downloadURL
      })};  

    return (
        <div class="main">

        <div class="container">
            <form onSubmit={handleSubmit}>
                <h2>Nouvelle Annonce</h2>
                <div class="form-group-1">
                    <input type="text" name="Nom" id="Nom" placeholder="Titre de l'annonce" required 
                    onChange={(e) =>
                        setForm({ ...form, titre: e.target.value })}/>
                    <input type="text" name="description" id="description" placeholder="Description" required
                    onChange={(e) =>
                        setForm({ ...form, description: e.target.value })} />
                    <input type="number" name="prix" id="prix" placeholder="Prix Initial" required 
                    onChange={(e) =>
                        setForm({ ...form, prix: e.target.value })}/>
                    <input type="number" name="phone_number" id="phone_number" placeholder="Numero du Tel" required
                    onChange={(e) =>
                        setForm({ ...form, telephone: e.target.value })} />
                    <div class="select-list">
                        <select name="Categorie" id="Categorie" 
                        onChange={(e) =>
                            setForm({ ...form, categorie: e.target.value })}>
                            <option slected value="">Categorie</option>
                            <option value="Informatique & Multemedia">Informatique & Multemedia</option>
                            <option value="Image & son">Image & son</option>
                            <option value="Voiture">Voiture</option>
                        </select>
                    </div>
                    <div class="select-list">
                        <select name="paiement" id="paiement"
                        onChange={(e) =>
                            setForm({ ...form, paiement: e.target.value })}>
                             <option slected value=""> Paiement</option>
                            <option  value="Avec Paiement">Avec Paiement</option>
                            <option value="Sans Paiement">Sans Paiement</option>
                        </select>
                    </div>
                    <div class="select-list">
                        <select name="livraison" id="livraison"
                         onChange={(e) =>
                            setForm({ ...form, livraison: e.target.value })}>
                            <option slected value="">Avec Livraison</option>
                            <option value="Avec Livraison">Avec Livraison</option>
                            <option value="Sans Livraison">Sans Livraison</option>
                        </select>
                    </div>
                </div>
                <div>
         <label for="file">Photos</label>
         <input type="file" id="file" name="file" multiple accept=".png, .jpg, .jpeg" 
         onChange={(e) =>
            setimg({ ...img, image: e.target.files[0] })}/>
       </div>
                <div class="form-check">
                    <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                    <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree to the  <a href="#" class="term-service">Terms and Conditions</a></label>
                </div>
                <div class="form-submit">
                    <input type="submit" name="submit" id="submit" class="submit" value="Request an appointment" onClick={handleUpload}/>
                </div>
            </form>
        </div>

    </div>
    )
}
export default Annonce