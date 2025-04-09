import { useUser } from "../../../../userhandlers/UserProvider";
import XTotalGrowth from "./XTotalGrowth";
import XTopPost from "./XTopPost";
import { useState } from "react";
const XAnalysis = () =>{
    const sample= {
        "firebaseUID": "dedwfwefww",
        "twitterId": "000000",
        "userName": "xxxxx",
        
        "data": 
            [
                {
                    "weekNumber": 2,
                    "startDate": "6 Apr 2025",
                    "endDate": "12 Apr 2025",
                    "totalFollowers": 100,
                    "diffTotalFollowers": "+10",
                    "numOfPosts": 10,
                    "diffNumOfPosts": "+2",
                    "totalLikes": 100,
                    "diffTotalLikes": "+20",
                    "totalRetweets": 10,
                    "diffTotalRetweets": "+10",
                    "totalReplies": 5,
                    "diffTotalReplies": "+5",
                    "totalEngagements": 115,
                    "diffTotalEngagements": "+20",
                    "totalImpressions": 300,
                    "diffTotalImpressions": "+50",
                  },

                  {
                    "weekNumber": 3,
                    "startDate": "6 Apr 2025",
                    "endDate": "12 Apr 2025",
                    "totalFollowers": 120,
                    "diffTotalFollowers": "+10",
                    "numOfPosts": 130,
                    "diffNumOfPosts": "+2",
                    "totalLikes": 100,
                    "diffTotalLikes": "+20",
                    "totalRetweets": 10,
                    "diffTotalRetweets": "+10",
                    "totalReplies": 5,
                    "diffTotalReplies": "+5",
                    "totalEngagements": 115,
                    "diffTotalEngagements": "+20",
                    "totalImpressions": 300,
                    "diffTotalImpressions": "+50",
                  },

                  {
                    "weekNumber": 4,
                    "startDate": "6 Apr 2025",
                    "endDate": "12 Apr 2025",
                    "totalFollowers": 120,
                    "diffTotalFollowers": "+10",
                    "numOfPosts": 130,
                    "diffNumOfPosts": "+2",
                    "totalLikes": 100,
                    "diffTotalLikes": "+20",
                    "totalRetweets": 10,
                    "diffTotalRetweets": "+10",
                    "totalReplies": 5,
                    "diffTotalReplies": "+5",
                    "totalEngagements": 115,
                    "diffTotalEngagements": "+20",
                    "totalImpressions": 300,
                    "diffTotalImpressions": "+50",
                  } ,

                  {
                    "weekNumber": 5,
                    "startDate": "6 Apr 2025",
                    "endDate": "12 Apr 2025",
                    "totalFollowers": 120,
                    "diffTotalFollowers": "+10",
                    "numOfPosts": 130,
                    "diffNumOfPosts": "+2",
                    "totalLikes": 100,
                    "diffTotalLikes": "+20",
                    "totalRetweets": 10,
                    "diffTotalRetweets": "+10",
                    "totalReplies": 5,
                    "diffTotalReplies": "+5",
                    "totalEngagements": 115,
                    "diffTotalEngagements": "+20",
                    "totalImpressions": 300,
                    "diffTotalImpressions": "+50",
                  }     
            ]
      }


    const tweet = {
        "firebaseUID": "dedwfwefww",
        "twitterId": "000000",
        "userName": "xxxxx",
        "data": {
          "tweetId": "000000",
          "tweetContent": "Hello everyone",
          "totalLikes": 100,
          "totalRetweets": 10,
          "totalEngagements": 115,
          "totalImpressions": 300,
        }
      }
      const [week, setWeek] = useState(1)
      const [lowest, setLowest] = useState(1)

      const lower = ()=>{
        if(lowest != 1){
          if(week > lowest+2){
            setWeek(lowest+2)
          }
          setLowest(lowest-1)
        }
      }
      const increase = ()=>{
        const array = sample.data
        if(array.length > lowest + 2){
          setLowest(lowest+1)
        }
      
      }
      console.log(week)
      console.log(lowest)

      


    return(
        <div className="flex-row justify-center">


              <div className="mt-12 ml-14 flex justify-start w-auto border-black border-solid rounded-lg ">
                  <button 
                    onClick={()=>lower()}
                    className="border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center">{"<"}</button>


                  <button 
                    onClick={()=>setWeek(lowest)} 

                    className={lowest === week? 
                      `border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center bg-black text-white`
                    :
                      `border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center`
                    }
                    >{lowest}
                  </button>

                    <button 
                    onClick={()=>setWeek(lowest + 1)} 

                    className={lowest + 1 === week? 
                      `border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center bg-black text-white`
                    :
                      `border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center`
                    }
                    >{lowest + 1}
                  </button>

                  <button 
                    onClick={()=>setWeek(lowest + 2)} 

                    className={lowest + 2=== week? 
                      `border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center bg-black text-white`
                    :
                      `border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center`
                    }
                    >{lowest + 2}
                  </button>

                  <button 
                    onClick={() =>increase()}
                    className="border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center">{">"}</button>
                    
                  
              </div>
              <p className="ml-24">{sample.data[week].startDate} - {sample.data[week].endDate}</p>


              <div>
                <XTotalGrowth sample={sample} week={week - 1}/>
                <XTopPost tweet={tweet} />
              </div>


                

            



            </div>
           


           
    )
}
export default XAnalysis;