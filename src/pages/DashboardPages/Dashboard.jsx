import { useEffect, useState } from "react";
import { useUser } from '../../userhandlers/UserProvider';
import DashboardHeader from "./Components/DashboardHeader";
import DashboardSideBar from "./Components/DashboardSideBar";

const Dashboard = () =>{
    const { login, user } = useUser(false);
    
    

    return(
        
           <div>
                {user? 
                <div>
                    <DashboardHeader />
                    <DashboardSideBar />


                </div>
                    
                :
                    <div>

                    </div>
                }



           </div>
    )
}
export default Dashboard;