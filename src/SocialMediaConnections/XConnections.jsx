import axios from "axios";


const CLIENT_ID = "OTQ5aEVTSmdUd3RtTW9EUnlJNU46MTpjaQ";
const REDIRECT_URI = "http://localhost:3000/auth/callback";
const API_URL = "https://X.com/i/oauth2/authorize";
const BACKEND_URL = "http://localhost:3001";




export const loginWithX = () => {
    const authUrl = `${API_URL}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=tweet.read tweet.write users.read offline.access&state=xyz&code_challenge=challenge&code_challenge_method=plain`;
    
    window.location.href = authUrl;

    
  };

  

export const sendAuthCodeToBackend = async (authCode, accessToken) => {
    console.log("auth code:  " +authCode)
    console.log("access token: " + accessToken)
    try {
      const response = await axios.post('http://localhost:3001/api/connections/twitter', 
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

  export const getXUSer = async(uid, accessToken) => {
    try{
      const response = await axios.get("http://localhost:3001/api/connections/twitter", {
        params: { firebaseUID: uid },
        headers:{
        'Content-Type': 'application/json',
         Authorization: `Bearer ${accessToken}`, 
        }});



        return(response)
      } catch (error){
      console.error("Error:", error)
    }

  }
