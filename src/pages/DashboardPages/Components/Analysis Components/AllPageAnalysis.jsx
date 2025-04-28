import { useUser } from "../../../../userhandlers/UserProvider";
import { getFacebookAnalysis, getFacebookTips, getFacebookTopPost } from "../../../../SocialMediaConnections/FacebookConnections";
import { useState, useEffect} from "react";
import WeekChooser from "./WeekChooser";
import Graph from "./Graph";
import FacebookTotalGrowth from "./FacebookTotalGrowth";
import FacebookPost from "../Posts/FacebookPost";
import Tips from "./Tips";
import XAnalysis from "./XAnalysis";
import TikTokAnalysis from "./TikTokAnalysis";
import InstagramAnalysis from "./InstagramAnalysis";
import FacebookAnalysis from "./FacebookAnalysis";
const AllPageAnalysis = () =>{
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
            <div>
              <div className="m-12 overflow-scroll "> 
                  <img
                        className='w-10 h-10' 
                              src='https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg'
                              alt='X logo'
                              >
                  </img>
                  <XAnalysis />
                </div>

              <div className="ml-12 border-t-2 border-black pt-5 overflow-scroll"> 
                  <img
                        className='w-10 h-10' 
                              src='https://www.svgrepo.com/show/327400/logo-tiktok.svg'
                              alt='X logo'
                              >
                  </img>
                  <TikTokAnalysis />
              </div>

              <div className="ml-12 border-t-2 border-black pt-5 overflow-scroll"> 
                  <img
                        className='w-10 h-10' 
                              src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png '
                              alt='X logo'
                              >
                  </img>
                  <InstagramAnalysis />
                </div>

              <div className="ml-12 border-t-2 border-black pt-5 overflow-scroll"> 
                  <img
                        className='w-10 h-10' 
                              src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032'
                              alt='X logo'
                              >
                  </img>
                  <FacebookAnalysis />
                </div>

            </div>
        )
}
export default AllPageAnalysis;