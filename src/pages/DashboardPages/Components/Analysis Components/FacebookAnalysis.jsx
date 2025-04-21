import { useUser } from "../../../../userhandlers/UserProvider";
import XTotalGrowth from "./XTotalGrowth";

import { useState } from "react";
import XGraph from "./Graph";
import WeekChooser from "./WeekChooser";
import XPost from "../Posts/XPost";
import Graph from "./Graph";
import FacebookTotalGrowth from "./FacebookTotalGrowth";
import FacebookPost from "../Posts/FacebookPost";
const FacebookAnalysis = () =>{
    const sample= {
        "firebaseUID": "qK6JRZhA6Zg3PnnDI14ORW7LSxk1",
        "pageID": "644636182057774",
        "userName": "Suhaib Alghamdi",
        "data": [
            {
                "weekNumber": 1,
                "startDate": "10 Apr 2025",
                "endDate": "17 Apr 2025",
                "totalFollowers": 1,
                "diffTotalFollowers": "+0",
                "totalPosts": 2,
                "diffTotalPosts": "+0",
                "totalLikes": 4,
                "diffTotalLikes": "+0",
                "totalComments": 3,
                "diffTotalComments": "+0",
                "totalHahas": 2,
                "diffTotalHahas": "+0",
                "totalShares": 1,
                "diffTotalShares": "+0",
                "totalHearts": 0,
                "diffTotalHearts": "+0",
                "totalEngagementRate": 400,
                "diffTotalEngagementRate": "+0"
            },
            {
                "weekNumber": 2,
                "startDate": "10 Apr 2025",
                "endDate": "17 Apr 2025",
                "totalFollowers": 1,
                "diffTotalFollowers": "+0",
                "totalPosts": 2,
                "diffTotalPosts": "+0",
                "totalLikes": 4,
                "diffTotalLikes": "+0",
                "totalComments": 3,
                "diffTotalComments": "+0",
                "totalHahas": 2,
                "diffTotalHahas": "+0",
                "totalShares": 1,
                "diffTotalShares": "+0",
                "totalHearts": 0,
                "diffTotalHearts": "+0",
                "totalEngagementRate": 400,
                "diffTotalEngagementRate": "+0"
            }
        ]
    }


    const post =[
        {
            "weekNumber": 1,
            "postId": "644636182057774_122103590978819223",
            "userName": "Suhaib Alghamdi",
            "content": "test 2",
            "likes": 2,
            "comments": 1,
            "haha": 1,
            "shares": 1,
            "loves": 0,
            "permalinkUrl": "https://www.facebook.com/122103591686819223/posts/122103590978819223"
        },
        {
            "weekNumber": 2,
            "postId": "644636182057774_122103590978819223",
            "userName": "Suhaib Alghamdi",
            "content": "test 2",
            "likes": 2,
            "comments": 1,
            "haha": 1,
            "shares": 1,
            "loves": 0,
            "permalinkUrl": "https://www.facebook.com/122103591686819223/posts/122103590978819223"
        }
    ]
      const [week, setWeek] = useState(1)
      


      


    return(
        <div>
              <div className="flex-row mr-20 ml-20 h-screen ">

                  <div className=" mt-10  flex h-5/12 overflow-auto max-w-full">
                        <Graph data={sample.data} collumns={["totalLikes", "totalFollowers"]}/>
                  </div>

                  <div className="mt-12  flex justify-start w-auto  rounded-lg h-1/12 items-center">
                      <WeekChooser setWeek={setWeek} sample={sample.data} week={week} max={post.length}/>
                      <div></div>
                  </div>

                    <div className="flex mt-8 w-auto h-2/6 ">
                    <FacebookTotalGrowth sample={sample} week={week - 1} />
                    
                    <div className="w-4/6 h-96 pt-4 pb-10 border-2 shadow-md rounded-lg ml-20  flex  gap-4 flex-wrap justify-center bg-white">
                      <div className="flex-col  text-2xl pl-12 w-[100%] ">Top Post : </div>
                      <div className="h-screen w-[80%]"><FacebookPost embedLink={post[week-1].permalinkUrl}/></div>

                    </div>
                    
                  </div>

              </div>
            </div>
    )
}
export default FacebookAnalysis;