import React, { useState } from 'react'
//import { login } from '../../services/login'
import './annonce.css';
const annonce = () => {
    /*const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(form);
    }
*/
    return (

        <div class="form-style-3">
            <form>
                <fieldset><legend></legend>
                    <label for="field4"><span>Categorie</span><select name="Categorie" class="select-field">
                        <option value="Informatique & Smartphone">Appointment</option>
                        <option value="Jeux & consoles">Interview</option>
                        <option value="Tv & Multimedia">Regarding a post</option>
                    </select></label>
                    <label for="field2"><span>Libellé <span class="required">*</span></span><input type="email" class="input-field" name="field2" value="" /></label>
                    <label for="field6"><span>Description <span class="required">*</span></span><textarea name="field6" class="textarea-field"></textarea></label>
                </fieldset>

                <fieldset><legend>détails</legend>
                    <div>
                        <input type="radio" id="TypeVente"
                            name="typevente" value="encheres" />
                        <label for="TypeVente">aux Enchères</label>

                        <input type="radio" id="Normale"
                            name="typevente" value="normale" />
                        <label for="Normale">Normale</label>
                    </div>
                    <label for="field1"><span>Prix initiale <span class="required">*</span></span><input type="text" class="input-field" name="field1" value="" /></label>
                    <input type="checkbox" id="scales" name="paiement"></input>
                    <label for="scales">Avec Paiement</label>
                    <input type="checkbox" id="scales" name="livraison"></input>
                    <label for="scales">Avec Livraison</label>
                    <label><span> </span><input type="submit" value="Submit" /></label>
                </fieldset>
            </form>
        </div>

    )
}

export default annonce;