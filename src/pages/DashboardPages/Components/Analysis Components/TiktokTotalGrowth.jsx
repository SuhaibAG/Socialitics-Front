import GrowthNode from "./GrowthNode";
const TiktokTotalGrowth = ({sample, week}) =>{
    const engagementRate = Math.round(sample[week].totalEngagementRate * 100) / 100
    const diffEngagementRate = Math.round(sample[week].diffTotalEngagementRate * 100) / 100

    return(
        <div>
        <div className=" h-96 border-2 shadow-md rounded-lg mb-5 flex gap-4 flex-wrap bg-white w-full p-4 ">
                <div className="flex-row h-1/12 text-xl pl-12 w-[100%] ">Total Growth : </div>

                <div className="flex flex-row w-full h-2/6">
                    <GrowthNode paramName="Followers" param={sample[week].totalFollowers} paramDiff={sample[week].diffTotalFollowers} />
                    <GrowthNode paramName="Total Likes" param={sample[week].totalLikes} paramDiff={sample[week].diffTotalLikes} />
                    <GrowthNode paramName="Number of Posts" param={sample[week].numOfPosts} paramDiff={sample[week].diffNumOfPosts} />
                    <GrowthNode paramName="Total Shares" param={sample[week].totalShares} paramDiff={sample[week].diffTotalShares} />
                </div>

                <div className="flex flex-row w-full h-2/6">
                    <GrowthNode paramName="Total Views" param={sample[week].totalViews} paramDiff={sample[week].diffTotalViews} />
                    <GrowthNode paramName="Total Comments" param={sample[week].totalComments} paramDiff={sample[week].diffTotalComments} />

                    <div
                    className="flex flex-col justify-center items-center w-3/12 overflow-x-scroll p-4">
                        <div className="text-lg whitespace-nowrap">Engagement Rate</div>  
                        <div><p className="inline text-lg">{ Math.round(sample[week].engagementRate * 100) /100 }</p> 
                        <p className={`inline text-sm ${sample[week].diffEngagementRate  < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                            {sample[week].diffEngagementRate  < 0? "":"+"}{Math.round(sample[week].diffEngagementRate * 100) /100}</p></div>

                    </div>

                </div>  
        </div>
    </div>
    )
}
export default TiktokTotalGrowth;