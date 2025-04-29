import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const UpdatePost = async ( accessToken, postID ,firebaseUID) => {
    try {
      const response = await axios.put(`${BACKEND_URL}/posts/scheduler/updatePost`, 
        { 
          postID, firebaseUID
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

  export const DeletePost = async ( accessToken, postID ,firebaseUID) => {
    
    try {
      const response = await axios.delete(`${BACKEND_URL}/posts/scheduler/deletePost`, 
        {
          headers:{
             'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`, 
          },
          data:{
            postID, firebaseUID 
          },
        }
        
      );
      
    } catch (error) {
      console.error("Failed to authenticate user", error);
      return null;
    }
  };