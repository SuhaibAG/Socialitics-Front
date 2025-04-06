import { useEffect, useState } from "react";
import { useUser } from "../../../userhandlers/UserProvider";
import '../../../index.css'
import logo from '../../../pages/Components/Images/socialitics png-modified.png'
const DashboardHeader = ({setView}) =>{
    const { user } = useUser(false);

    
    

    return(
           <div>
            <div>
            <header className="flex items-center justify-between px-6 py-4 bg-black text-white">

            <div className="text-xl font-bold">
                <img  className="w-30 h-30 rounded-full object-cover "
                src={logo}
                ></img>


            </div>


            <nav className="flex space-x-40 bg-black">
                <button className=" bg-black hover:bg-gray-500 transition text-white"
                onClick={() => setView("Analysis")}>
                Analysis
                </button>
                <button className=" bg-black hover:bg-gray-500 transition text-white"
                onClick={() => setView("Publish")}>
                Publish
                </button>
            </nav>


            <div>
                <img
                src={user.image}
                className="w-10 h-10 rounded-full object-cover"
                alt="User Profile"
                />
            </div>
            </header>
                
            </div>
           </div>
    )
}
export default DashboardHeader;