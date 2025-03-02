import Header from "./Components/Header";
import { useUser } from '../userhandlers/UserProvider'
const Register = () =>{
    //check if user is not registered go to settings
    const { user } = useUser()
    console.log("username")
    console.log(user)
    //if user is already there go to dashboard
    
    return(
        
        <div>
            <Header/>

            <div>
                <></>
                <button>Confirm</button>
            </div>
            
        </div>
    )
}
export default Register;