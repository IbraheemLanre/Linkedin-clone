import React from "react";
import { LoginApi,RegisterApi, GoogleSignInApi } from "../api/AuthApi";
import LinkedinLogo from '../assets/linkedinlogo2.png'
import '../sass/LoginComponent.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button'
import { toast } from "react-toastify";

export default function RegisterComponent(){
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({})
    const register = async ()=>{
    try{
        let res = await RegisterApi(credentials.email, credentials.password)
        toast.success("Account created")
        navigate('/home')
    } catch (error) {
        toast.error("Cannot create account")
    }     
}

const googleSignIn = async () =>{
    try {
        let res = await GoogleSignInApi()
        console.log(res) 
    } catch (error) {
        console.log(error)
    }
}

    return(
        <div className="login-wrapper">
        <img src={LinkedinLogo} className="linkedinlogo"/>
        <div className="login-wrapper-inner">
        <h1 className="heading">Make the most of your professional life</h1>
        <p className="sub-heading"> Stay updated on your professional world</p>
        <div className="auth-inputs">
        <input onChange={(e)=>setCredentials({...credentials, email: e.target.value})} className="common-input" placeholder="Enter or Phone number" type="email"/>
        <input onChange={(e)=>setCredentials({...credentials, password: e.target.value})} className="common-input" placeholder="Password" type="password (6 or more characters)"/>
        <button onClick={register} className="login-btn">Agree & Join</button>
        
        </div>     
        <hr className="hr-text" data-content="or"/>   
        <div className="google-button-container">
         <GoogleButton className="google-button"
             onClick={googleSignIn}/>
            <p className="goto-signup">Already on LinkedIn? <span className="join-now" onClick={()=>navigate('/')}>Sign in</span> </p>
        </div>
        </div>
    </div>
    )
}