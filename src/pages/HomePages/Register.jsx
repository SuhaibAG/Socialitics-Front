import Header from "../Components/Header";
import '../Components/Register.css';
import { useUser } from '../../userhandlers/UserProvider'
const Register = () =>{
    //check if user is not registered go to settings
    //
    const { user } = useUser()
    console.log("username")
    console.log(user)
    //if user is already there go to dashboard
    
    

    return(
        
        <div>
            <Header/>

            <div className="register-box">
                <div className="input-area">
                <label>Profile Name</label>
                <input></input>
                </div>
                <div className="input-area">
                <label>Profile Name</label>
                <input></input>
                </div>
                <div className="input-area">
                <label>Profile Name</label>
                <input></input>
                </div>
                

            </div>
            
        </div>
    )
}
export default Register;