import { doSignInWithGoogle } from "../firebase/auth";
import { useAuth } from "../contexts/authContext";
import { useState } from "react";

const Login = () =>{

    const {userLoggedIn} = useAuth()
    const [isSigningIn, setIsSigningIn] = useState(false)

    const onGoogleSignIn = async (e)=>{
        e.preventDefault()
        if(!isSigningIn){
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err =>{
                setIsSigningIn(false)
            })
        }
    }

    return(
           <div>
                <button onClick={(e) => {onGoogleSignIn(e)}}>Sign in with Gooogle</button>
           </div>
    )
}
export default Login;