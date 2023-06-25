// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLv5EzDBoyyPewCSi7iU6lEw3QAcJsY48",
  authDomain: "linkedin-clone-5e1ba.firebaseapp.com",
  projectId: "linkedin-clone-5e1ba",
  storageBucket: "linkedin-clone-5e1ba.appspot.com",
  messagingSenderId: "678757547343",
  appId: "1:678757547343:web:b9f4960c93d8ead7ca593a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)

export {auth, app, firestore}