import { useEffect, useState } from "react";
import TikTokPost from "../Posts/TiktokPost";
import TiktokPopUp from "./TiktokPopUp";
import InstagramPost from "../Posts/InstagramPost";
import InstagramPopUp from "./InstagramPopUp";
import FacebookPopUp from "./FacebookPopUp";
const FacebookPublish = ({postType, posts}) =>{


    const sample = {
        "firebaseUID": "dedwfwefww",
        "twitterId": "000000",
        "userName": "Queue",
        "data": [{
            "embedLink": "https://www.instagram.com/p/DHedKn_tRw1/embed/",
            "date":"20/5/2025"
          },
          {
            "embedLink": "https://www.instagram.com/p/DHedKn_tRw1/embed/",
            "date":"20/5/2025"
          }
         ] 
      }

      const sample2 = {
        "firebaseUID": "dedwfwefww",
        "twitterId": "000000",
        "userName": "Draft",
        "data": [{
            "embedLink": "https://www.instagram.com/p/DHedKn_tRw1/embed/",
            "date":"20/5/2025"
          },
          {
            "embedLink": "https://www.instagram.com/p/DHedKn_tRw1/embed/",
            "date":"20/5/2025"
          }, 
          {
            "embedLink": "https://www.instagram.com/p/DHedKn_tRw1/embed/",
            "date":"20/5/2025"
          } 
         ] 
      }

      const sample3 = {
        "firebaseUID": "dedwfwefww",
        "twitterId": "000000",
        "userName": "Posted",
        "data": [{
            "embedLink": "https://www.instagram.com/p/DHedKn_tRw1/embed/",
            "date":"20/5/2025"
          },
          {
            "embedLink": "https://www.instagram.com/p/DHedKn_tRw1/embed/",
            "date":"20/5/2025"
          }, 
          {
            "embedLink": "https://www.instagram.com/p/DHedKn_tRw1/embed/",
            "date":"20/5/2025"
          } 
         ] 
      }

    const [queue, setQueue] = useState(sample.data)
    const [draft, setDraft] = useState(sample2.data)
    const [poseted, setPosted] = useState(sample3.data)

    const [mapper, setMapper] = useState(queue)
    
  
    const [posting, setPosting] = useState(false)
    const [postData, setPostData] = useState()
    
    useEffect(()=>{
      if(postType == "Queue"){
        setMapper(queue)
      }

      else if(postType == "Posted"){
        setMapper(poseted)
      }

    },[postType, queue, draft, poseted])
 
    return(
      
          
      <div className="flex-col w-1/2">
        {posting?
            <div>
                <FacebookPopUp 
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
            {index}
            <div className="mb-4 text-sm ">{post.date}</div>
            <InstagramPost embedLink={post.embedLink}/>

            {postType != "Posted"?
                <div className="flex justify-center">
                    <button className="bg-red-600 text-white rounded-xl mt-3 p-3 flex justify-center items-center hover:bg-blue-400">Delete</button>                    
                    <button className="bg-blue-500 text-white rounded-xl mt-3 p-3 flex justify-center items-center hover:bg-blue-400"> Post Now</button>
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

export default FacebookPublish;