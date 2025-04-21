import TikTokPost from "../Posts/TiktokPost";
import { useEffect, useState } from "react";
import WeekChooser from "./WeekChooser";
import Graph from "./Graph";
import TiktokTotalGrowth from "./TiktokTotalGrowth";
import { getTiktokAnalysis, getTiktokTopPost } from "../../../../SocialMediaConnections/TiktokConnections";
import {  useUser } from "../../../../userhandlers/UserProvider";

const TikTokAnalysis = () =>{
  const { user } = useUser(false);
      const [week, setWeek] = useState(1)
      const [analysis, setAnalysis] = useState(null);
      const [topPost, setTopPost] =useState(null)
      useEffect(() => {
        const getAnalysis = async () => {
          try {
            if (analysis === null) {
              const result = await getTiktokAnalysis(user.firebaseUID, user.accessToken);
              setAnalysis(result.data);
            }
          } catch (error) {
            getAnalysis();
          }
        };
        
        const getTopPost = async () => {
          try {
            if (topPost === null) {
              const result = await getTiktokTopPost(user.firebaseUID, user.accessToken);
              setTopPost(result.data);
            }
          } catch (error) {
            getTopPost();
          }
        };
        getAnalysis();
        getTopPost();
      }, []);

    return(
      analysis != null? (
        <div>

             <div className="flex-row mr-20 ml-20 h-screen ">

                  <div className=" mt-10  flex h-5/12 overflow-auto max-w-full">                  
                    <Graph data={analysis} collumns={["totalLikes", "totalFollowers"]}/>
                  </div>

                  <div className="mt-12  flex justify-start w-auto  rounded-lg h-1/12 items-center">
                      <WeekChooser setWeek={setWeek} sample={analysis} week={week}/>
                  </div>

                  <div className="flex mt-8 w-auto h-2/6 ">
                    <TiktokTotalGrowth sample={analysis} week={week - 1}/>
                    
                    {topPost != null?
                      <div className="w-4/6 h-96 pt-4 pb-10 border-2 shadow-md rounded-lg ml-20  flex  gap-4 flex-wrap justify-center bg-white">
                      <div className="flex-col  text-2xl pl-12 w-[100%] ">Top Post : </div>
                      <div className="h-screen w-[80%]"><TikTokPost embedLink={topPost[week -1].embedUrl}/></div>
                    </div>
                    :
                    <div>loading....</div>
                    }
                  </div>

              </div>
            </div>
    ) : <div>Loading...</div>
    )
}
export default TikTokAnalysis;