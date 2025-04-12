import { useState } from "react";
import XPost from "../XPost";
import PostPopUP from "./PostPopUp";
const InstagramPublishj = ({postType}) =>{


    const sample = {
        "firebaseUID": "dedwfwefww",
        "twitterId": "000000",
        "userName": "xxxxx",
        "data": [{
            "tweetId": "000000",
            "tweetContent": "Hello everyone",
            "totalLikes": 100,
            "totalRetweets": 10,
            "totalEngagements": 115,
            "totalImpressions": 300,
            "date":null
          },
          {
            "tweetId": "000000",
            "tweetContent": "Hello everyone",
            "totalLikes": 100,
            "totalRetweets": 10,
            "totalEngagements": 115,
            "totalImpressions": 300,
            "date":null
          }, 
          {
            "tweetId": "000000",
            "tweetContent": "Hello everyone",
            "totalLikes": 100,
            "totalRetweets": 10,
            "totalEngagements": 115,
            "totalImpressions": 300,
            "date":null
          } 
         ] 
      }
    const [queue, setQueue] = useState(sample)
    const [posting, setPosting] = useState(false)
    const [postData, setPostData] = useState()

    return(
      
          
      <div className="flex-col">
        {posting?
            <div>
                <PostPopUP 
                setPostData ={setPostData}
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
      <div className="flex flex-col justify-start items-center mt-24 shadow-md bg-white  h-[90vh] rounded-lg overflow-y-auto space-y-4 p-4 ">
      
      {queue.data.map((tweet, index) => (
        <div key={index} className="flex justify-center h-72 w-full">
          <div className="w-full max-w-3xl">
            <XPost tweet={tweet} userName={queue.userName} />
          <button className="bg-blue-500 text-white rounded-xl mt-3 p-3 flex justify-center items-center hover:bg-blue-400"> Post Now</button>
          <button className="bg-gray-600 text-white rounded-xl mt-3 p-3 flex justify-center items-center w-40 hover:bg-gray-500 transition-colors"> Send to Draft</button>

          </div>
        </div>
      ))}

    </div>

    </div>
    )
}
export default InstagrmaPublish;