import { useEffect, useState } from "react";
import { useUser } from '../userhandlers/UserProvider';
const Dashboard = () =>{
    const { login, user } = useUser(false);
    console.log(user)

    return(
           <div>
            <div>
                <h1>dashboard</h1>
            </div>
           </div>
    )
}
export default Dashboard;