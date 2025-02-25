import { useEffect } from "react"
import { getAuth } from "firebase/auth"
import firebase from "firebase/compat/app"
import * as firebaseui from "firebaseui"
import "firebaseui/dist/firebaseui.css"

import {app} from "../firebase/firebase"


const Login = () =>{

    useEffect(() =>{
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(getAuth(app))

        ui.start("#firebaseui-auth-container", {
            //links to the redirict page
            signInSuccessUrl: "/home",
            signInOptions:[
                //add all the sign in options only google for now 
                {
                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                clientId: "956529682713-967bjkq3uuplrts287ji4a8se7qp15f7.apps.googleusercontent.com"
                },
            ],
            credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
        })

    }, []);


    return(
        <div>
           <div id="firebaseui-auth-container"></div>
        </div>
    )
}
export default Login;