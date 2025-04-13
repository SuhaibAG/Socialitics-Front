import axios from "axios";


const CLIENT_ID = process.env.REACT_APP_Tiktok_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_Tiktok_REDIRECT_URI
const API_URL = process.env.REACT_APP_Tiktok_API_URL
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;





export const loginWithTiktok = () => {
    const authUrl = `${API_URL}/?client_key=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=user.info.basic,video.upload,video.publish,user.info.profile,user.info.stats,video.list`;
    
    window.location.href = authUrl;

    
  };

  

export const sendAuthCodeToBackend = async (authCode, accessToken) => {
    console.log("auth code:  " +authCode)
    console.log("access token: " + accessToken)
    try {
      const response = await axios.post(`${BACKEND_URL}/api/connections/tiktok`, 
        { 
        auth_code: authCode,
        redirect_uri:REDIRECT_URI 
        },{
          headers:{
             'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`, 
          },
        }
      );
      return response
    } catch (error) {
      console.error("Failed to authenticate user", error);
      return null;
    }
  };
