import React from "react";
import { LoginApi,RegisterApi, GoogleSignInApi } from "../api/AuthApi";
import LinkedinLogo from '../assets/linkedinlogo2.png'
import '../sass/LoginComponent.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button'
import { toast } from "react-toastify";

export default function LoginComponents(){
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({})
    const login = async ()=>{
    try{
        let res = await LoginApi(credentials.email, credentials.password)
        toast.success("Signed in to LinkedIn")
        navigate('/home')
    } catch (error) {
        toast.error("Please check your credentials")
    }     
}

const googleSignIn = async () =>{
    try {
        let res = await GoogleSignInApi()
        console.log(res)
        navigate('/home')
    } catch (error) {
        console.log(error)
    }
}

    return (
    <div className="login-wrapper">
        <img src={LinkedinLogo} className="linkedinlogo"/>
        <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading"> Stay updated on your professional world</p>
        <div className="auth-inputs">
        <input onChange={(e)=>setCredentials({...credentials, email: e.target.value})} className="common-input" placeholder="Enter or Phone" type="email"/>
        <input onChange={(e)=>setCredentials({...credentials, password: e.target.value})} className="common-input" placeholder="Password" type="password"/>
        <button onClick={login} className="login-btn">Sign in</button>
        
        </div>     
        <hr className="hr-text" data-content="or"/>   
        <div className="google-button-container">
         <GoogleButton className="google-button"
             onClick={googleSignIn}/>
            <p className="goto-signup">New to LinkedIn? <span className="join-now" onClick={()=>navigate('/register')}>Join now</span> </p>
        </div>
        
        
        </div>
    </div>
    )
        

}