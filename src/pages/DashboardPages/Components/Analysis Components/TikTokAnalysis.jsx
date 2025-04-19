import TikTokPost from "../Posts/TiktokPost";
import { useState } from "react";
import WeekChooser from "./WeekChooser";
import Graph from "./Graph";
import TiktokTotalGrowth from "./TiktokTotalGrowth";
const TikTokAnalysis = () =>{
    const sample={
      "firebaseUID": "VpJOUX05QSh86FNf44Gb4jGYEF02",
      "tiktokID": "-0009jFDhljex-k7MXGeQK6uDs3ssoHsXOvo",
      "userName": "socialitics0",
      "data": [
          {
              "weekNumber": 1,
              "startDate": "7 Apr 2025",
              "endDate": "14 Apr 2025",
              "totalFollowers": 2,
              "diffTotalFollowers": "+0",
              "numOfPosts": 2,
              "diffNumOfPosts": "+0",
              "totalLikes": 21,
              "diffTotalLikes": "+0",
              "totalShares": 1,
              "diffTotalShares": "+0",
              "totalComments": 1,
              "diffTotalComments": "+0",
              "totalViews": 159,
              "diffTotalViews": "+0",
              "engagementRate": 7.232704402515723,
              "diffEngagementRate": "+0"
          },
          {
            "weekNumber": 2,
            "startDate": "7 Apr 2025",
            "endDate": "14 Apr 2025",
            "totalFollowers": 5,
            "diffTotalFollowers": "+0",
            "numOfPosts": 6,
            "diffNumOfPosts": "+0",
            "totalLikes": 110,
            "diffTotalLikes": "+0",
            "totalShares": 1,
            "diffTotalShares": "+0",
            "totalComments": 1,
            "diffTotalComments": "+0",
            "totalViews": 159,
            "diffTotalViews": "+0",
            "engagementRate": 7.232704402515723,
            "diffEngagementRate": "+0"
        },
        {
          "weekNumber": 3,
          "startDate": "7 Apr 2025",
          "endDate": "14 Apr 2025",
          "totalFollowers": 20,
          "diffTotalFollowers": "+0",
          "numOfPosts": 2,
          "diffNumOfPosts": "+0",
          "totalLikes": 130,
          "diffTotalLikes": "+0",
          "totalShares": 1,
          "diffTotalShares": "+0",
          "totalComments": 1,
          "diffTotalComments": "+0",
          "totalViews": 159,
          "diffTotalViews": "+0",
          "engagementRate": 7.232704402515723,
          "diffEngagementRate": "+0"
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
              <div className="flex-row mr-20 ml-20 h-screen ">

                  <div className=" mt-10  flex h-5/12 overflow-auto max-w-full">
                        <Graph data={sample.data} collumns={["totalLikes", "totalFollowers"]}/>
                  </div>

                  <div className="mt-12  flex justify-start w-auto  rounded-lg h-1/12 items-center">
                      <WeekChooser setWeek={setWeek} sample={sample} week={week}/>
                  </div>

                    <div className="flex mt-8 w-auto h-2/6 ">
                    <TiktokTotalGrowth sample={sample} week={week - 1}/>
                    
                    <div className="w-4/6 h-96 pt-4 pb-10 border-2 shadow-md rounded-lg ml-20  flex  gap-4 flex-wrap justify-center bg-white">
                      <div className="flex-col  text-2xl pl-12 w-[100%] ">Top Post : </div>
                      <div className="h-screen w-[80%]"><TikTokPost post={tweet.data} userName={tweet.userName}/></div>

                    </div>
                    
                  </div>

              </div>
            </div>
    )
}
export default TikTokAnalysis;