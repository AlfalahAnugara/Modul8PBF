import React from 'react';
import './FormLoginComponent.css';

const FormLoginComponent = () => {
    return(
       <div className="content">
           <h1>Form Login</h1>
           <FormContent/>
       </div>
    )
}
const FormContent = () => {
    return(
        <div className="box">
        <h1>Tugas Pertemuan<br/>Ketiga</h1>
        <label htmlFor="username">Username</label>
        <input type="text" name="" id="username" placeholder="masukkan username"/>
        <br/>
        <label htmlFor="pass">Password</label>
        <input type="text" name="" id="pass" placeholder="Masukkan Password Anda"/>
        <input type="submit" className="loginbtn" value="Login"/>
        <label class="container">Remember Me
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        <input type="submit" className="btncancel" value="Cancel"/>
        </div>
    )
}
export default FormLoginComponent;