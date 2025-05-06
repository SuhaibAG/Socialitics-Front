import Header from '../Components/Header';
import { useState } from 'react';
import axios from "axios";
import Admin from './Admin';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


const AdminLogin = () =>{
    const [tempUser, setTempUser] = useState()
    const [exist, setExist] = useState(false)
    const [userName, setUserName] = useState()
    const [pass, setPass] = useState()
    const [token, setToken] = useState()



  const handleSubmit = () =>{
    checkIfAdmin(userName, pass)
    
  }


  //makes api request to backend and checks if the user exists or not 
  const checkIfAdmin = async (userName, pass) => {
      try {
        //change path to check admin  
        const response = await axios.post(`${BACKEND_URL}/api/user/admin/login`,  
          { "username": userName,
            "password": pass
          },
        );

        if(response.data.isExist === true){

            setToken(response.data.adminToken)
        }

        } catch (error) {
          console.error("Error:", error);
        }
      };


    
    return(
        
        <div >
            <Header/>

            {token == null?
              <div className="flex flex-col h-full items-center justify-center mt-28">
              <div className="w-2/6 bg-slate-50 rounded-lg p-4 border border-black m-1">
                <p className='m-1'>Admin Username</p>
                <input className="w-full rounded-lg border border-black m-1 pl-1" onChange={(e) =>setUserName(e.target.value)}/>
                <p className='m-1'>Admin Password</p>
                <input className="w-full rounded-lg border border-black m-1 pl-1" type='password' onChange={(e) =>setPass(e.target.value)}/>
                <button className='border-solid border-2 border-black m-3' onClick={()=> handleSubmit()}>Submit</button>
              </div>
            </div> 
      
            :
              <div>
                <Admin adminToken={token}/>
              </div>
            }
            
                   
        </div>
    )
}
export default AdminLogin;