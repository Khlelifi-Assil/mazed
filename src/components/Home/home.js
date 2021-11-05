import React, { useState } from 'react'
//import Frame from 'react-frame-component';

import firebase from 'firebase';
import 'firebase/firestore';
import db from '../../services/firestore';
import './home.css';
const Home = () => {
  
        const [info , setInfo] = useState([]);
      
        // Start the fetch operation as soon as
        // the page loads
        window.addEventListener('load', () => {
            Fetchdata();
          });
      
        // Fetch the required data using the get() method
        const Fetchdata = ()=>{
            db.collection("annonces").get().then((querySnapshot) => {
                 
                // Loop through the data and store
                // it in array to display
                querySnapshot.forEach(element => {
                    var data = element.data();
                    setInfo(arr => [...arr , data]);
                      
                });
            })
        }
          
        
    return (
        <div>
        {
            info.map((data) => (
            <Frame titre={data.titre} 
                   description={data.description} 
                   prix={data.prix}
                   date={data.date}
                   livraison={data.livraison}
                   paiement={data.paiement}
                   telephone={data.telephone}/>
            ))
        }
        </div>
  
    )
}


const Frame = ({ titre,description,prix,date,livraison,paiement,telephone}) => {
    return (
        <center>
            
       
        <div id="container">
            <div class="product-details">
                <center>
                <h1> {titre}</h1>
                 </center>
                 <br/>
                 <div class="div-info">
                Paiement : {livraison} <br/>
                livraison : {paiement} <br/>
                Tel : {telephone}
                </div>
                <span class="hint-star star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                </span>
                
                <div class="control">
                    <button class="btn">
                        <span class="price">{prix} TND</span>
                        <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                        <span class="buy">Enchérir</span>
                    </button>
                </div>
            </div>
            <div class="product-image">
                <img src="https://sc01.alicdn.com/kf/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3/200006212/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3.jpg" alt="Omar Dsoky" />
                <div class="info">
                    <h2>The Description</h2>
                    <center>
                    {description}
                    </center>
                    
                </div>
            </div>
        </div>



        </center>
    );
}

export default Home
