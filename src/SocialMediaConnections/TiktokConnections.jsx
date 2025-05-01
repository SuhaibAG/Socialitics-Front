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
      
    } catch (error) {
      console.error("Failed to authenticate user", error);
      return null;
    }
  };

export const getTiktokAnalysis = async (firebaseUID, accessToken) => {
  try{
    const response = await axios.get(`${BACKEND_URL}/tiktok/scheduler/analysis`,{
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

export const getTiktokTopPost = async (firebaseUID, accessToken) => {
  try{
    const response = await axios.get(`${BACKEND_URL}/tiktok/scheduler/topPosts`,{
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

export const sendTiktokPost = async ( accessToken, postData ) => {
  
  try {
    const response = await axios.post(`${BACKEND_URL}/posts/scheduler/tiktok`, 
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

export const getTiktokTips = async (firebaseUID, accessToken) => {
  try{
    const response = await axios.get(`${BACKEND_URL}/deepseekTips/tiktok/tips`,{
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

export const DeleteTiktok = async ( accessToken ,firebaseUID) => {
    
  try {
    const response = await axios.delete(`${BACKEND_URL}/api/connections/tiktok`, 
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
    alert("Tiktok Connection has been deleted")
    return(true)
    
  } catch (error) {
    console.error("Failed to authenticate user", error);
    return null;
  }
};