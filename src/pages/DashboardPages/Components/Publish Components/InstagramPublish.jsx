import { useEffect, useState } from "react";
import TikTokPost from "../Posts/TiktokPost";
import TiktokPopUp from "./TiktokPopUp";
import InstagramPost from "../Posts/InstagramPost";
const TiktokPublish = ({postType}) =>{


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


    const sendToDraft = (index) =>{
      setDraft([...draft, queue[index]])
      setQueue(queue.filter(item => item != queue[index]))
    }

    const addToQueue = (index) =>{
      setQueue([...queue, draft[index]])
      setDraft(draft.filter(item => item != draft[index]))
    }
    
    useEffect(()=>{
      if(postType == "Queue"){
        setMapper(queue)
      }
      else if(postType == "Draft"){
        setMapper(draft)
      }
      else if(postType == "Posted"){
        setMapper(poseted)
      }

    },[postType, queue, draft, poseted])
    {console.log(postType)}
    return(
      
          
      <div className="flex-col w-1/2">
        {posting?
            <div>
                <TiktokPopUp 
                queue={queue}
                draft={draft}
                setPostData ={setPostData}
                setQueue={setQueue}
                setDraft={setDraft}
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
                    {postType == "Queue"?
                     <button className="bg-gray-600 text-white rounded-xl mt-3 p-3 flex justify-center items-center w-40 hover:bg-gray-500 transition-colors"
                      onClick={() =>sendToDraft(index)}> Send to Draft</button>
                    :
                     <button className="bg-gray-600 text-white rounded-xl mt-3 p-3 flex justify-center items-center w-40 hover:bg-gray-500 transition-colors"
                     onClick={() =>addToQueue(index)}>
                      Add to Queue</button>
                    }

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

export default TiktokPublish;