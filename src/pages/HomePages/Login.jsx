
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../Components/Login.css"
import Header from '../Components/Header';
import { app } from '../../firebase/firebase';
import { useUser } from '../../userhandlers/UserProvider';
import { useEffect, useState } from 'react';
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Login = () =>{
    
    const navigate =  useNavigate()
    const { login, user } = useUser(false);
    const [tempUser, setTempUser] = useState()
    const [exist, setExist] = useState(false)
    const [userName, setUsername] = useState(false)
    const [bio, setBio] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState(false)
    

    //connecting to firebase logic
    function googlelogin(){
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
         
        signInWithPopup(auth, provider)
        .then((result) => {
            setTempUser(result.user)
            
        }).catch((eror) => {

        });
    }

    //on change checks if the user is null 
    useEffect(() => {
        if(tempUser != null){
            checkUserExists(tempUser.uid)
        }
    }, [tempUser]);
     



    //creates new user
    function createUser(tempUser){

      const newUser ={
      firebaseUID: tempUser.uid,
      email: tempUser.email,
      bio: bio,
      name: name,
      image: tempUser.photoURL,
      }

      registerUser(newUser)
    }

    //makes api request to backend and checks if the user exists or not 
    const checkUserExists = async (uid) => {
        try {
          const response = await axios.get(`${BACKEND_URL}/api/user`, {
            params: { firebaseUID: uid },
          });
          

          if(response.data.isExist === true){
            getUser(uid)

          }

          else{
            //should be changed later
            setExist(true)
          }

        } catch (error) {
          console.error("Error:", error);
        }
      };


    const getUser = async(firebaseUID) =>{
      try{
        const response = await axios.get(`${BACKEND_URL}/api/user/details`, {
          params: { firebaseUID: firebaseUID },
        });
        response.data.accessToken = tempUser.accessToken

        login(response.data)
        navigate('/dashboard')
      } catch (error){
        console.error("Error:", error)
      }

    }


    const registerUser = async (newUser) =>{
      
      try {
        const response = await axios.post(`${BACKEND_URL}/api/user`, newUser);
        response.data.accessToken = tempUser.accessToken

        login(response.data)
        navigate('/dashboard')
        
      } catch (error) {
        console.error("Error:", error);
      }
    };




    
    return(
        
        <div>
            <Header/>
            {!exist? 
              <div className='login-box'>
                <button className="google-btn" onClick={googlelogin}>
                    <img className= "google-icon" src="https://www.svgrepo.com/show/475656/google-color.svg"></img>
                    <span className='google-span'>Sign in with google</span>
                </button>
                </div>
            :
              <div className="register-box">

                <div className="input-area">
                <label>Profile Name</label>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}                     
                ></input>
                </div>

                <div className="input-area">
                <label>Bio</label>
                <input
                  type='text'
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                
                ></input>
                </div>

                <button 
                onClick={() => createUser(tempUser)}>
                  Register
                </button>

            </div>
            } 

            
        </div>
    )
}
export default Login;