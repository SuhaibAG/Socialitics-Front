import axios from "axios";


const CLIENT_ID = process.env.REACT_APP_INSTAGRAM_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_INSTAGRAM_REDIRECT_URI
const API_URL = process.env.REACT_APP_INSTAGRAM_API_URL
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export const loginWithInstagram = () => {
    const authUrl = `${API_URL}?enable_fb_login=0&force_authentication=1&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights`;
    
    window.location.href = authUrl;

    
  };

  

export const sendAuthCodeToBackend = async (authCode, accessToken) => {
    console.log("auth code:  " +authCode)
    console.log("access token: " + accessToken)
    try {
      const response = await axios.post(`${BACKEND_URL}/api/connections/instagram`, 
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

  export const getInstagramAnalysis = async (firebaseUID, accessToken) => {
    try{
      const response = await axios.get(`${BACKEND_URL}/Instagram/scheduler/analysis`,{
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
  
  export const getInstagramTopPosts = async (firebaseUID, accessToken) => {
    try{
      const response = await axios.get(`${BACKEND_URL}/Instagram/scheduler/topPosts`,{
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

  export const sendInstagramPost = async ( accessToken, postData ) => {
    
    try {
      const response = await axios.post(`${BACKEND_URL}/posts/scheduler/instagram`, 
        { 
          firebaseUID: postData.firebaseUID,
          content: postData.content,
          scheduleDate: postData.scheduleDate,
          mediaUrl: postData.mediaUrl
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

  export const getInstagramTips = async (firebaseUID, accessToken) => {
    try{
      const response = await axios.get(`${BACKEND_URL}/deepseekTips/instagram/tips`,{
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

  export const DeleteInstagram = async ( accessToken ,firebaseUID) => {
    
    try {
      const response = await axios.delete(`${BACKEND_URL}/api/connections/instagram`, 
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
      alert("Instagram Connection has been deleted")
      return(true)
      
      
    } catch (error) {
      console.error("Failed to authenticate user", error);
      return null;
    }
  };