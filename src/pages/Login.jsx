
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./Components/Login.css"
import Header from './Components/Header';
import { app } from '../firebase/firebase';
import { useUser } from '../userhandlers/UserProvider';
import { useEffect, useState } from 'react';
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


    useEffect(() => {
        //make a request to backend to check if uid is in the db
        if(exist && tempUser != null){
            console.log(tempUser.uid)
            navigate("/dashboard")
        }
        
        else if(!exist && tempUser != null){
            navigate("/register")
        }


    }, [tempUser]);
     

    
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