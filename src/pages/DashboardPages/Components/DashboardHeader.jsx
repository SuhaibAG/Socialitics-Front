import { useEffect, useState } from "react";
import { useUser } from "../../../userhandlers/UserProvider";

const DashboardHeader = () =>{
    const { user } = useUser(false);
    console.log(user)

    

    return(
        
           <div>
            <div>
                <h1>username</h1>
                <h1><img src={user.image}></img></h1>
            </div>
           </div>
    )
}
export default DashboardHeader;