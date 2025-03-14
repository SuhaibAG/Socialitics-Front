import { useEffect, useState } from "react";
import { useUser } from '../../userhandlers/UserProvider';
import DashboardHeader from "./Components/DashboardHeader";
const Dashboard = () =>{
    const { user } = useUser(false);
    console.log(user)

    

    return(
        
           <div>
                <DashboardHeader/>
           </div>
    )
}
export default Dashboard;