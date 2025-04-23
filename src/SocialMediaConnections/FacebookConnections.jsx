import axios from "axios";


const CLIENT_ID = process.env.REACT_APP_FB_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_FB_REDIRECT_URI
const API_URL = process.env.REACT_APP_FB_API_URL
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;





export const loginWithFacebook = () => {
    const authUrl = `${API_URL}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=publish_video,pages_read_user_content,public_profile,email,instagram_basic,pages_show_list,pages_read_engagement,pages_manage_engagement,pages_manage_posts&response_type=code`;
    
    window.location.href = authUrl;

    
  };

  

export const sendAuthCodeToBackend = async (authCode, accessToken) => {
    console.log("auth code:  " +authCode)
    console.log("access token: " + accessToken)
    try {
      const response = await axios.post(`${BACKEND_URL}/api/connections/facebook`, 
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

  export const getFacebookAnalysis = async (firebaseUID, accessToken) => {


    try{
      const response = await axios.get(`${BACKEND_URL}/facebook/scheduler/analysis`,
        {
          params: { firebaseUID },
          headers:{
           Authorization: `Bearer ${accessToken}`,
        },
      }
      );
    } catch (error) {
      console.error("Failed to authenticate user", error);
      return null;
    }
  }
  export const getFacebookTopPost = async (firebaseUID, accessToken) => {


    try{
      const response = await axios.get(`${BACKEND_URL}/facebook/scheduler/topPosts`,
        {
          params: { firebaseUID },
          headers:{
           Authorization: `Bearer ${accessToken}`,
        },
      }
      );
    } catch (error) {
      console.error("Failed to authenticate user", error);
      return null;
    }
  }

  export const sendFacebookPost = async ( accessToken, postData ) => {
    
    try {
      const response = await axios.post(`${BACKEND_URL}/posts/scheduler/facebook`, 
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