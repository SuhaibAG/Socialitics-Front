import axios from "axios";


const CLIENT_ID = process.env.REACT_APP_X_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_X_REDIRECT_URI;
const API_URL = process.env.REACT_APP_X_API_URL;
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;



export const loginWithX = () => {
    const authUrl = `${API_URL}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=tweet.read tweet.write users.read media.write offline.access&state=xyz&code_challenge=challenge&code_challenge_method=plain`;
    
    window.location.href = authUrl;

    
  };

  

export const sendAuthCodeToBackend = async (authCode, accessToken) => {
    console.log("auth code:  " +authCode)
    console.log("access token: " + accessToken)
    try {
      const response = await axios.post(`${BACKEND_URL}/api/connections/twitter`, 
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


  export const getXAnalysis = async (firebaseUID, accessToken) => {
    try{
      const response = await axios.get(`${BACKEND_URL}/twitter/scheduler/analysis`,{
            params:{ firebaseUID,},
            headers:{
               'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`, 
            },
          }
        );
      return(response.data)
    } catch (error) {
      console.error("Failed to authenticate user", error);
      return null;
    }
  }
  
  export const getXTopPost = async (firebaseUID, accessToken) => {
    try{
      const response = await axios.get(`${BACKEND_URL}/twitter/scheduler/topTweets`,{
          params:{ firebaseUID,},
            headers:{
               'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`, 
            },
          }
        );
      return(response)
    } catch (error) {
      console.error("Failed to authenticate user", error);
      return null;
    }
  }

  export const sendXPost = async ( accessToken, postData ) => {
    
    try {
      const response = await axios.post(`${BACKEND_URL}/posts/scheduler/twitter`, 
        { 
          firebaseUID: postData.firebaseUID,
          content: postData.content,
          scheduleDate: postData.scheduleDate,
        },{
          headers:{
             'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`, 
          },
        }
        
      );
      
    } catch (error) {
      console.error("Failed to authenticate user", error);
      return null;
    }
  };

  export const getXTips = async (firebaseUID, accessToken) => {
    try{
      const response = await axios.get(`${BACKEND_URL}/deepseekTips/twitter/tips`,{
          params:{ firebaseUID,},
            headers:{
               'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`, 
            },
          }
        );
      return(response)
    } catch (error) {
      console.error("Failed to authenticate user", error);
      return null;
    }
  }

  export const DeleteX = async ( accessToken ,firebaseUID) => {
    
    try {
      const response = await axios.delete(`${BACKEND_URL}/api/connections/twitter`, 
        {
          headers:{
             'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`, 
          },
          data:{
             firebaseUID 
          },
        }
       
      );
      alert("X Connection has been deleted")
      return(true)
      
    } catch (error) {
      console.error("Failed to authenticate user", error);
      return null;
    }
  };