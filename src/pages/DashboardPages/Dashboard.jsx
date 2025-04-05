import { useEffect, useState } from "react";
import { useUser } from '../../userhandlers/UserProvider';
import DashboardHeader from "./Components/DashboardHeader";
import DashboardSideBar from "./Components/DashboardSideBar";
import Publish from "./Components/Publish";
import '../../index.css'

const Dashboard = () =>{
    
    const [filteredAccount, setFilteredAccount] = useState()
    const { user } = useUser(false);
    return(
        
           <div>
                {user? 
                <div>
                    <DashboardHeader />
                    <DashboardSideBar 
                    filteredAccount={filteredAccount}
                    setFilteredAccount={setFilteredAccount}/>
                    <div className="ml-64">
                        <Publish />
                    </div>


                </div>
                    
                :
                    <div>

                    </div>
                }



           </div>
    )
}
export default Dashboard;