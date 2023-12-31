import {signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../firebaseConfig'

export const LoginApi =(email, password)=>{
    try{
       let response = signInWithEmailAndPassword(auth, email, password)
       return response
    }catch(err){
        alert(err)
    }
}

export const RegisterApi =(email, password)=>{
    try{
       let response = createUserWithEmailAndPassword(auth, email, password)
       return response
    }catch(err){
        res(err)
    }
}

export const GoogleSignInApi =()=>{
    try{
       let googleProvider = new GoogleAuthProvider()
       let res = signInWithPopup(auth, googleProvider)
       return res
    }catch(err){
        res(err)
    }
}

