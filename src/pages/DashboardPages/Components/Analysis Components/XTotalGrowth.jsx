import GrowthNode from "./GrowthNode";

const XTotalGrowth = ({sample, week}) =>{


    return(
        <div>
        <div 
            className=" h-96 border-2 shadow-md rounded-lg mb-5 flex  gap-4 flex-wrap  bg-white w-6/6 p-4">
                <div className="flex-row h-1/12 text-xl pl-12 w-[100%]">Total Growth : </div>
                {/*Firs Rows*/}
                <div className="flex flex-row w-[100%]  h-2/6">
                    <GrowthNode paramName={"Total Followers"} param={ sample[week].totalFollowers } paramDiff={sample[week].diffTotalFollowers}/>
                    <GrowthNode paramName={"Total Likes"} param={ sample[week].totalLikes } paramDiff={sample[week].diffTotalLikes}/>
                    <GrowthNode paramName={"Number of Posts"} param={ sample[week].numOfPosts } paramDiff={sample[week].diffNumOfPosts}/>
                    <GrowthNode paramName={"Total Retweets"} param={ sample[week].totalRetweets } paramDiff={sample[week].diffTotalRetweets}/>
                </div>

                {/*Second Rows*/}
                <div className="flex flex-row w-[100%] h-2/6 ">
                    <GrowthNode paramName={"Total Replies"} param={sample[week].totalReplies } paramDiff={sample[week].diffTotalReplies}/>
                    <GrowthNode paramName={"Total Engagements"} param={sample[week].totalEngagements } paramDiff={sample[week].diffTotalEngagements}/>
                    <GrowthNode paramName={"Total Impressions"} param={sample[week].totalImpressions } paramDiff={sample[week].diffTotalImpressions}/>
                </div>
            </div>    
        </div>

    )
}
export default XTotalGrowth;