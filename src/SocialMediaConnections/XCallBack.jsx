import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { sendAuthCodeToBackend } from "./XConnections";
import { useUser } from "../userhandlers/UserProvider";
const CallbackX = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUser()


  useEffect(() => {
    
    
    if(user){
      const params = new URLSearchParams(location.search);
      const authCode = params.get("code");
      

      if (authCode) {
        sendAuthCodeToBackend(authCode, user.accessToken).then((user) => {
          if (user) navigate("/dashboard");
        });
      }
    }
    
  }, [location, navigate, user]);

  return <h2>Processing authentication...</h2>;
};

export default CallbackX;