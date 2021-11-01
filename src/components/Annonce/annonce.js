import React from 'react';
import '../../constants/fonts/material-icon/css/material-design-iconic-font.min.css';
import '../../constants/css/style.css';

export default function Annonce() {
    return (
        <div class="main">

        <div class="container">
            <form>
                <h2>education appointment form</h2>
                <div class="form-group-1">
                    <input type="text" name="Nom" id="Nom" placeholder="Titre de l'annonce" required />
                    <input type="text" name="description" id="description" placeholder="Description" required />
                    <input type="number" name="prix" id="prix" placeholder="Prix Initial" required />
                    <input type="number" name="phone_number" id="phone_number" placeholder="Phone number" required />
                    <div class="select-list">
                        <select name="Categorie" id="Categorie">
                            <option slected value="">Categorie</option>
                            <option value="society">Informatique & Multemedia</option>
                            <option value="language">Image & son</option>
                            <option value="language">Voiture</option>
                        </select>
                    </div>
                </div>
                <div class="form-group-2">
                    <h3>How would you like to bo located ?</h3>
                    <div class="select-list">
                        <select name="confirm_type" id="confirm_type">
                            <option seleected value="">By phone</option>
                            <option value="by_email">By email</option>
                        </select>
                    </div>
                    <div class="select-list">
                        <select name="hour_appointment" id="hour_appointment">
                            <option seleected value="">Hours : 8am 10pm</option>
                            <option value="9h-11h">Hours : 9am 11pm</option>
                        </select>
                    </div>
                </div>
                <div class="form-check">
                    <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                    <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree to the  <a href="#" class="term-service">Terms and Conditions</a></label>
                </div>
                <div class="form-submit">
                    <input type="submit" name="submit" id="submit" class="submit" value="Request an appointment" />
                </div>
            </form>
        </div>

    </div>
    )
}