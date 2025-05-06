import { useUser } from "../../../../userhandlers/UserProvider";
import { getFacebookAnalysis, getFacebookTips, getFacebookTopPost } from "../../../../SocialMediaConnections/FacebookConnections";
import { useState, useEffect} from "react";
import WeekChooser from "./WeekChooser";
import Graph from "./Graph";
import FacebookTotalGrowth from "./FacebookTotalGrowth";
import FacebookPost from "../Posts/FacebookPost";
import Tips from "./Tips";
const FacebookAnalysis = () =>{
          const { user } = useUser(false);
          const [week, setWeek] = useState(1)
          const [analysis, setAnalysis] = useState(null);
          const [topPost, setTopPost] =useState(null)
          const [tips, setTips] =useState(null)
          useEffect(() => {
            const getAnalysis = async () => {
              try {
                if (analysis === null) {
                  const result = await getFacebookAnalysis(user.firebaseUID, user.accessToken);
                  setAnalysis(result.data)
                 
                }
              } catch (error) {

              }
            };
            
            const getTopPost = async () => {
              try {
                if (topPost === null) {
                  const result = await getFacebookTopPost(user.firebaseUID, user.accessToken);
                  setTopPost(result.data);
                }
              } catch (error) {

              }
            };

            const getTips = async () => {
              try {
                if (topPost === null) {
                  const result = await getFacebookTips(user.firebaseUID, user.accessToken);
                  setTips(result.data.data);
                }
              } catch (error) {

              }
            };            
            getTips();
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
          
                        <div className="flex mt-8 ">
                            <FacebookTotalGrowth sample={analysis} week={week - 1}/>
                              {topPost != null?
                                <div className="w-4/6 h-96 pt-4 pb-10 border-2 shadow-md rounded-lg ml-20  flex  gap-4 flex-wrap justify-center bg-white">
                                <div className="flex-col  text-2xl pl-12 w-[100%] ">Top Post : </div>
                                <div className="w-[80%] overflow-y-scroll"><FacebookPost link={topPost[week -1].permalinkUrl} week={week-1}/></div>
                              </div>
                              :
                              <div>loading....</div>
                              }
                        </div>
                        <div className="flex mt-8 ">  
                          {tips !== null?
                            <Tips data={tips} week={week - 1}/>
                          :
                            <div>Loading</div>
                          }                
                          
                        </div>
          
                    </div>
                </div>
        ) : <div>Connect to Facebook!</div>
        )
}
export default FacebookAnalysis;