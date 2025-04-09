import { useEffect, useState } from "react";
import { useUser } from '../../userhandlers/UserProvider';
import DashboardHeader from "./Components/DashboardHeader";
import DashboardSideBar from "./Components/DashboardSideBar";
import Publish from "./Components/Publish";
import Analysis from "./Components/Analysis";
import '../../index.css'
import Settings from "./Components/Settings";

const Dashboard = () =>{
    
    const [filteredAccount, setFilteredAccount] = useState()
    const [view, setView] = useState("Analysis")
    const { user } = useUser(false);
    return(
        
           <div>
                {user? 
                <div className="bg-slate-50 h-screen">
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
                        view ==="Publish"?
                             <Publish 
                             filteredAccount={filteredAccount}/>
                        :
                            <Settings />
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