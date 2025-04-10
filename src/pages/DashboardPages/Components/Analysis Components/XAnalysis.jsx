import { useUser } from "../../../../userhandlers/UserProvider";
import XTotalGrowth from "./XTotalGrowth";
import XTopPost from "./XTopPost";
import { useState } from "react";
import XGraph from "./XGraph";
import WeekChooser from "./WeekChooser";
const XAnalysis = () =>{
    const sample= {
        "firebaseUID": "dedwfwefww",
        "twitterId": "000000",
        "userName": "xxxxx",
        
        "data": 
            [
                {
                    "weekNumber": 1,
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
                    "weekNumber": 2,
                    "startDate": "13 Apr 2025",
                    "endDate": "19 Apr 2025",
                    "totalFollowers": 120,
                    "diffTotalFollowers": "+10",
                    "numOfPosts": 130,
                    "diffNumOfPosts": "+2",
                    "totalLikes": 102,
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
                    "startDate": "20 Apr 2025",
                    "endDate": "26 Apr 2025",
                    "totalFollowers": 130,
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
                    "weekNumber": 4,
                    "startDate": "27 Apr 2025",
                    "endDate": "2 May 2025",
                    "totalFollowers": 200,
                    "diffTotalFollowers": "+10",
                    "numOfPosts": 130,
                    "diffNumOfPosts": "+2",
                    "totalLikes": 130,
                    "diffTotalLikes": "+20",
                    "totalRetweets": 10,
                    "diffTotalRetweets": "+10",
                    "totalReplies": 5,
                    "diffTotalReplies": "+5",
                    "totalEngagements": 115,
                    "diffTotalEngagements": "+20",
                    "totalImpressions": 300,
                    "diffTotalImpressions": "+50",
                  }  ,

                  {
                    "weekNumber": 5,
                    "startDate": "27 Apr 2025",
                    "endDate": "2 May 2025",
                    "totalFollowers": 230,
                    "diffTotalFollowers": "+10",
                    "numOfPosts": 130,
                    "diffNumOfPosts": "+2",
                    "totalLikes": 200,
                    "diffTotalLikes": "+20",
                    "totalRetweets": 10,
                    "diffTotalRetweets": "+10",
                    "totalReplies": 5,
                    "diffTotalReplies": "+5",
                    "totalEngagements": 115,
                    "diffTotalEngagements": "+20",
                    "totalImpressions": 300,
                    "diffTotalImpressions": "+50",
                  }  ,

                  {
                    "weekNumber": 6,
                    "startDate": "27 Apr 2025",
                    "endDate": "2 May 2025",
                    "totalFollowers": 250,
                    "diffTotalFollowers": "+10",
                    "numOfPosts": 130,
                    "diffNumOfPosts": "+2",
                    "totalLikes": 500,
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
      


      


    return(
        <div>
              
              


              <div className="flex-row mr-20 ml-20 h-screen">

                  <div className=" mt-10  flex h-2/6">
                        <XGraph data={sample.data}/>
                  </div>

                  <div className="mt-12  flex justify-start w-auto border-black border-solid rounded-lg h-1/12 items-center">
                      <WeekChooser setWeek={setWeek} sample={sample} week={week}/>
                  </div>

                    <div className="flex mt-8 w-auto h-2/6">
                    <XTotalGrowth sample={sample} week={week - 1}/>
                    <XTopPost tweet={tweet} />
                  </div>

              </div>


                

            



            </div>
           


           
    )
}
export default XAnalysis;