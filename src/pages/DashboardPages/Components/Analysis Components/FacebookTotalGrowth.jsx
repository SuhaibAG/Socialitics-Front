import GrowthNode from "./GrowthNode";
const FacebookTotalGrowth = ({sample, week}) =>{

    console.log(sample)
    return(
        <div>
            <div className="h-96 border-2 shadow-md rounded-lg mb-5 flex gap-4 flex-wrap bg-white w-full p-4">
                <div className="flex-row h-1/12 text-xl pl-12 w-full">Total Growth:</div>

                <div className="flex flex-row w-full h-2/6">
                <GrowthNode paramName="Followers" param={sample[week].totalFollowers} paramDiff={sample[week].diffTotalFollowers} />
                <GrowthNode paramName="Total Likes" param={sample[week].totalLikes} paramDiff={sample[week].diffTotalLikes} />
                <GrowthNode paramName="Number of Posts" param={sample[week].totalPosts} paramDiff={sample[week].diffTotalPosts} />
                <GrowthNode paramName="Total Shares" param={sample[week].totalShares} paramDiff={sample[week].diffTotalShares} />
                </div>

                <div className="flex flex-row w-full h-2/6">
                <GrowthNode paramName="Total Comments" param={sample[week].totalComments} paramDiff={sample[week].diffTotalComments} />
                <GrowthNode paramName="Total Hahas" param={sample[week].totalHahas} paramDiff={sample[week].diffTotalHahas} />
                <GrowthNode paramName="Total Hearts" param={sample[week].totalHearts} paramDiff={sample[week].diffTotalHearts} />

                <div
                    className="flex flex-col justify-center items-center w-3/12 overflow-x-scroll p-4">
                        <div className="text-lg whitespace-nowrap">Engagement Rate</div>  
                        <div>
                            <p className="inline text-lg">{ Math.round(sample[week].totalEngagementRate * 100) /100 }</p> 
                            <p className={`inline text-sm ${String(sample[week].diffTotalEngagementRate).includes('-') ? 'text-red-600' : 'text-green-600'} -mt-2 align-super relative`}>
                            {String(sample[week].diffTotalEngagementRate).includes('-') ? '' : '+'}
                            {Math.round(sample[week].diffTotalEngagementRate * 100) / 100}

                            </p>
                        </div>
                                    
                    </div>
                </div>

            </div>
        </div>
    )
}
export default FacebookTotalGrowth;