import axios from "axios";


const CLIENT_ID = "c3093985fcdceca23924f18a29df7b26";
const REDIRECT_URI = "http://localhost:3000/auth/callback/facebook";
const API_URL = "https://www.facebook.com/v22.0/dialog/oauth";




export const loginWithFacebook = () => {
    const authUrl = `${API_URL}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}/auth&scope=pages_read_user_content,public_profile,email,instagram_basic,pages_show_list,pages_read_engagement,pages_manage_posts&response_type=code`;
    
    window.location.href = authUrl;

    
  };

  

export const sendAuthCodeToBackend = async (authCode, accessToken) => {
    console.log("auth code:  " +authCode)
    console.log("access token: " + accessToken)
    try {
      const response = await axios.post('http://localhost:3001/api/connections/facebook', 
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
