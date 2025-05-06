
import { useState, useEffect } from "react";
import UserNode from "./UserNode";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Admin = ({adminToken}) =>{
    const [users, setUsers] = useState(null)

    
    
    useEffect(() => {
        const getUsers = async () => {
            try{
                const response = await axios.get(`${BACKEND_URL}/api/user/all`,{
                headers:{
                        'Content-Type': 'application/json',
                        'Authorization': adminToken
                    },
                }
            
                );
                setUsers(response.data)
                } catch (error) {
                console.error("Failed to authenticate user", error);
                return null;
            }    
        }
        getUsers()
    }, []);

    const suspendAccount = async (targetUser)=>{
        try {
            const response = await axios.post(`${BACKEND_URL}/api/user/suspend`, 
                { 
                  firebaseUID: targetUser.firebaseUID
                },{
                  headers:{
                     'Content-Type': 'application/json',
                     'Authorization': adminToken
                  },
                }
                
              );
    
            alert("account has been suspended")
            setUsers((prev) => prev.filter((user) => user !== targetUser));
    
            } catch (error) {
              console.error("Error:", error);
            }
        }
    

    
    return(
        <div>
        {users === null?
             
             <div></div>

             :

            <div className="flex justify-center bg-slate-50">
            <div className="flex flex-col justify-start items-center mt-24 shadow-md bg-white rounded-lg  space-y-4 p-4  w-2/4">  
                {users.map((targetUser, index) => (
                <div key={index} className="flex-row justify-center h-full w-full mb-5">
                    <UserNode user={targetUser} />
                    <button  className="m-2 border-2 border-black border-solid w-40 " onClick={()=>suspendAccount(targetUser)}>Suspend User</button>

                    
                    
                </div>
                ))}      
            </div>
            </div>  
        }
        </div>

 
    )
}
export default Admin;