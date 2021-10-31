import React, {useState} from 'react'
import {login} from '../../services/login'
import './login.css';
const Login = () => {
    const [form,setForm] = useState({
        email:'',
        password:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await login(form);
    }
    
    return (
        <div class="login-box">
            <h2 class="title">Login</h2>
            <form onSubmit={handleSubmit}>
                <div class="user-box">
                    <input type="text" name="" required="" id="Email"
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })} />

                </div>

                <div class="user-box">
                    <input type="password" name="" required="" id=""
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })} />

                    <br />
                    <button type="submit" class="button">
                        Submit
                    </button>

                </div>
            </form>
        </div>
    )
}

export default Login
