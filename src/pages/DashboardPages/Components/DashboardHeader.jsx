import { useEffect, useState } from "react";
import { useUser } from "../../../userhandlers/UserProvider";
import '../../../index.css'
import logo from '../../../pages/Components/Images/socialitics png-modified.png'
const DashboardHeader = () =>{
    const { user } = useUser(false);

    
    

    return(
           <div>
            <div>
            <header className="flex items-center justify-between px-6 py-4 bg-black text-white">

            <div className="text-xl font-bold">
                <img 
                src={logo}
                ></img>


            </div>


            <nav className="flex space-x-40 bg-black">
                <button className=" bg-black hover:bg-gray-500 transition text-white">
                Dashboard
                </button>
                <button className="h-12 bg-black hover:bg-gray-500 transition text-white">
                <p>Social Media </p>
                <p>Connections</p>
                </button>
                <button className=" bg-black hover:bg-gray-500 transition text-white">
                Create
                </button>
                <button className=" bg-black hover:bg-gray-500 transition text-white">
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