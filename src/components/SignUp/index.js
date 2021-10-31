import React, { useState } from 'react'
import { register } from '../../services/register'
import './login.css';


const Register = () => {
    const [form, setForm] = useState({
        email: '',
        nom: '',
        prenom:'',
        password: '',
        tel: '',
        adresse: ''
    })
    const handleSubmit = async (e) => {
    
            e.preventDefault();
            await register(form);

    }


    return (
        <div class="login-box">
            <h2 class="title">Register</h2>
            <form onSubmit={handleSubmit}>
                <div class="user-box">
                    <input type="text" name="" required="" id="Email"
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })} />

                </div>
                <div class="user-box">
                    <input type="text" name="" required="" id="Nom" 
                    onChange={(e) =>
                        setForm({ ...form, nom: e.target.value })} />

                </div>
                <div class="user-box">
                    <input type="text" name="" required="" id="Prenom" 
                    onChange={(e) =>
                        setForm({ ...form, prenom: e.target.value })} />

                </div>
                <div class="user-box">
                    <input type="password" name="" required="" id=""
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })} />

                     <div class="user-box">
                     <input type="text" name="" required="" id="Tel"
                     onChange={(e) =>
                        setForm({ ...form, tel: e.target.value })} /> 

                       </div>
                       <div class="user-box">
                     <input type="text" name="" required="" id="Adresse"
                     onChange={(e) =>
                        setForm({ ...form, adresse: e.target.value })} />

                       </div>

                    <br />
                    <button type="submit" class="button">
                        Submit
                    </button>
                </div>

            </form>



        </div>

    )
}

export default Register

