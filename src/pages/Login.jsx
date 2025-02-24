import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var firebase = require('firebase');
var firebaseui = require('firebaseui');

const firebaseConfig = {
    apiKey: "AIzaSyBhVQSTJY8KBw9mRWkunUsKb7y6C3d_J8A",
    authDomain: "socialitics-68026.firebaseapp.com",
    projectId: "socialitics-68026",
    storageBucket: "socialitics-68026.firebasestorage.app",
    messagingSenderId: "956529682713",
    appId: "1:956529682713:web:de277a2a1268ebfbf47d88",
    measurementId: "G-Q2YTTSR3ZR"
  };
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}  


const Login = () =>{
    const [uid, setUid] = useState("");

    return(
           <div>
            <button onClick={}></button>
           </div>
    )
}
export default Login;