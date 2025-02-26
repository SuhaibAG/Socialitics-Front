import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBhVQSTJY8KBw9mRWkunUsKb7y6C3d_J8A",

  authDomain: "socialitics-68026.firebaseapp.com",

  projectId: "socialitics-68026",

  storageBucket: "socialitics-68026.firebasestorage.app",

  messagingSenderId: "956529682713",

  appId: "1:956529682713:web:de277a2a1268ebfbf47d88",

  measurementId: "G-Q2YTTSR3ZR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth}