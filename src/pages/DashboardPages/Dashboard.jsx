import { useEffect, useState } from "react";
import { useUser } from '../../userhandlers/UserProvider';
import DashboardHeader from "./Components/DashboardHeader";
import DashboardSideBar from "./Components/DashboardSideBar";
import Publish from "./Components/Publish";
import Analysis from "./Components/Analysis";
import '../../index.css'

const Dashboard = () =>{
    
    const [filteredAccount, setFilteredAccount] = useState()
    const [view, setView] = useState("Analysis")
    const { user } = useUser(false);
    return(
        
           <div>
                {user? 
                <div>
                    <DashboardHeader
                    setView ={setView} />
                    <DashboardSideBar 
                    filteredAccount={filteredAccount}
                    setFilteredAccount={setFilteredAccount}
                    view={view}/>
                    <div className="ml-64">
                        {view === "Analysis"?
                            
                            <Analysis
                            filteredAccount={filteredAccount} />
                        :
                             <Publish />
                        }

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