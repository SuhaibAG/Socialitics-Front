import { useEffect, useState } from "react";
import TikTokPost from "../Posts/TiktokPost";
import TiktokPopUp from "./TiktokPopUp";
import FakeTiktokPost from "../Posts/FakeTiktokPost";
import FakeTikTokPost from "../Posts/FakeTiktokPost";
import { DeletePost, UpdatePost } from "../../../../SocialMediaConnections/PostHandler";
import { UserProvider, useUser } from "../../../../userhandlers/UserProvider";
const TiktokPublish = ({postType, posts}) =>{

    const [queue, setQueue] = useState([])
    const [poseted, setPosted] = useState([])
    const [mapper, setMapper] = useState(queue)    
    const [posting, setPosting] = useState(false)
    const { user } = useUser()

    useEffect(() =>{
      for (const post of posts) {
        if (post.status === "published") {
          setPosted(prev => {
            if (!prev.some(p => p.postID === post.postID)) {
              return [...prev, post];
            }
            return prev;
          });
          
        } else if (post.status === "scheduled") {
          setQueue(prev => {
            if (!prev.some(p => p.postID === post.postID)) {
              return [...prev, post];
            }
            return prev;
          });
        }
      }
    }, [posts])

    useEffect(()=>{
      if(postType == "Queue"){
        setMapper(queue)
      }
      else if(postType == "Posted"){
        setMapper(poseted)
      }

    },[postType, queue])
    console.log(poseted)
    return(

      <div className="flex-col w-1/2">
          {posting?
              <div>
                  <TiktokPopUp 
                  setPosting ={setPosting}/>
              </div>
              :
              <div>
                   <div className='bg-slate-50 ml-24'>
                      {<button  
                          onClick={() => setPosting(true)}
                          className='bg-blue-500 w-20 h-10 justify-center items-center text-white text-2xl hover:bg-blue-200 transition m-4 '>
                              +
                      </button>}
                  </div>
                          
              </div>
          }

  
        <div className="flex flex-col justify-start items-center mt-24 shadow-md bg-white rounded-lg  space-y-4 p-4 ">  
        {mapper.map((post, index) => (
          <div key={index} className="flex-row justify-center h-full w-full mb-5">
  
              
             <FakeTikTokPost post={post}/>

              {postType != "Posted"?
                  <div className="flex justify-center ">
                      <button className="bg-red-600 text-white rounded-xl mt-3 p-3 flex justify-center items-center hover:bg-blue-400" onClick={()=> DeletePost(user.accessToken,post.postID)}>Delete</button>                    
                      <button className="bg-blue-500 text-white rounded-xl mt-3 p-3 flex justify-center items-center hover:bg-blue-400" onClick={()=> UpdatePost(user.accessToken,post.postID)}> Post Now</button>
                  </div>
              :
                  <div></div>
              }
              
            </div>
        ))}
  
      </div>
  
      </div>
    )

}

export default TiktokPublish;