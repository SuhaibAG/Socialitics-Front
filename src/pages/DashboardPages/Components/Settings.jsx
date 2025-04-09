import { useUser } from "../../../userhandlers/UserProvider";
import Dashboard from "../Dashboard";
import DashboardHeader from "./DashboardHeader";
import DashboardSideBar from "./DashboardSideBar";

const Settings = () =>{
    const {user} = useUser

    
    

    return(
           <div>
                settings page
           </div>
    )
}
export default Settings;