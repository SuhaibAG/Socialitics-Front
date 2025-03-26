import { useEffect, useState } from "react";
import { useUser } from '../../userhandlers/UserProvider';
import DashboardHeader from "./Components/DashboardHeader";
import DashboardSideBar from "./Components/DashboardSideBar";
import Analysis from "./Components/Analysis";
const Dashboard = () =>{
    
    const { user } = useUser(false);
    return(
        
           <div>
                {user? 
                <div>
                    <DashboardHeader />
                    <DashboardSideBar />
                    <Analysis />

                </div>
                    
                :
                    <div>

                    </div>
                }



           </div>
    )
}
export default Dashboard;