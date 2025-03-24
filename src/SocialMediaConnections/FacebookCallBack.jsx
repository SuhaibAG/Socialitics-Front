import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { sendAuthCodeToBackend } from "./XConnections";
import { useUser } from "../userhandlers/UserProvider";
const FacebookCallBack = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, user } = useUser()


  useEffect(() => {
    const processAuth = async () => {
      if (user) {
        const params = new URLSearchParams(location.search);
        const authCode = params.get("code");
        console.log(authCode)
        
        /*
        if (authCode) {
          try {
            //const authenticatedUser = await sendAuthCodeToBackend(authCode, user.accessToken);
            if (authenticatedUser) {
            
              user.FacebookUsername = authenticatedUser.data.userName 
              login(user)
              localStorage.setItem("user", JSON.stringify(user));
              navigate("/dashboard")
            
            }
          } catch (error) {
            console.error("Error during authentication:", error);
          }
        }
        */
       
      }
    };


    processAuth();
      

  }, [location, navigate, user]);

  return <h2>Processing authentication...</h2>;
};

export default FacebookCallBack;