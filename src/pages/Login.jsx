
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./Components/Login.css"
import Header from './Components/Header';
import { app } from '../firebase/firebase';
import { useUser } from '../userhandlers/UserProvider';
import { useEffect, useState } from 'react';
import axios from "axios";

const Login = () =>{
    
    const navigate =  useNavigate()
    const { login, user } = useUser(false);
    const [tempUser, setTempUser] = useState()
    const [exist, setExist] = useState(false)

    //connecting to firebase logic
    function googlelogin(){
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
         
        signInWithPopup(auth, provider)
        .then((result) => {
            setTempUser(result.user)
            
        }).catch((eror) => {
            console.log("error")
        });
    }

    //on change checks if the user is null 
    useEffect(() => {
        if(tempUser != null){
            checkUserExists(tempUser.uid)
        }
    }, [tempUser]);
     

    //makes api request to backend and checks if the user exists or not 
    const checkUserExists = async (uid) => {
        try {
          const response = await axios.get(`http://localhost:3001/api/user`, {
            params: { firebaseUID: uid },
          });
          console.log(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };


    
    return(
        
        <div>
            <Header/>
            <div className='login-box'>


                <button className="google-btn" onClick={googlelogin}>
                    <img className= "google-icon" src="https://www.svgrepo.com/show/475656/google-color.svg"></img>
                    <span className='google-span'>Sign in with google</span>
                </button>
            </div>
            
        </div>
    )
}
export default Login;