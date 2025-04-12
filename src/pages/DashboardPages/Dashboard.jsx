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
  {user ? (
    <div className="bg-slate-50 h-screen flex flex-col">
      {/* Header at the top */}
      <DashboardHeader setView={setView} />

      {/* Below the header: sidebar + content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar on the left */}
        <DashboardSideBar 
          filteredAccount={filteredAccount}
          setFilteredAccount={setFilteredAccount}
          view={view}
        />

        <div className="flex-1 overflow-y-auto">
          {view === "Analysis" ? (
            <Analysis filteredAccount={filteredAccount} />
            )
           :
            view === "Publish" ? (
            <Publish filteredAccount={filteredAccount} />
            ) 
            : 
            (
                <Settings />
            )}

          
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  )}
</div>
    )
}
export default Dashboard;