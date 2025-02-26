
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Login = () =>{
    
    const navigate =  useNavigate()

    function googlelogin(){
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
         
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user)
            navigate('/dashboard')
        }).catch((eror) => {
            console.log("error")
        });

    }
    
    return(
        <div>
           <div onClick={googlelogin}>sign in</div>
        </div>
    )
}
export default Login;