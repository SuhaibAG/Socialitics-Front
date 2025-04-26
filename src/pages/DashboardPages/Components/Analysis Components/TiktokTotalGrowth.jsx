const TiktokTotalGrowth = ({sample, week}) =>{


    return(
        <div>
        <div 
            className=" h-96 border-2 shadow-md rounded-lg mb-5 flex  gap-4 flex-wrap  bg-white w-6/6 p-4 ">
                <div className="flex-row h-1/12 text-xl pl-12 w-[100%]">Total Growth : </div>


                <div className="flex flex-row w-[100%]  h-2/6">
                    {/*followers*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Followers</div>
                        <div><p className="inline text-lg">{ sample[week].totalFollowers }</p> 
                        <p className={`inline text-sm ${sample[week].diffTotalFollowers  < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                            {sample[week].diffTotalFollowers }</p></div>
                    </div>

                    {/*Likes*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Total Likes</div>
                        <div><p className="inline text-lg">{ sample[week].totalLikes }</p> 
                        <p className={`inline text-sm ${sample[week].diffTotalLikes  < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                            {sample[week].diffTotalLikes }</p></div>
                    </div>

                    {/*Number of Posts*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Number of Posts</div>
                        <div><p className="inline text-lg">{ sample[week].numOfPosts}</p> 
                        <p className={`inline text-sm ${sample[week].diffNumOfPosts < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                            {sample[week].diffNumOfPosts }</p></div>
                    </div>

                    {/*Total Shares*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Total Shares</div>
                        <div><p className="inline text-lg">{ sample[week].totalShares }</p> 
                        <p className={`inline text-sm ${sample[week].diffTotalShares < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                            {sample[week].diffTotalShares }</p></div>
                    </div>
                </div>

                <div className="flex flex-row w-[100%] h-2/6 ">
                    {/*Empty cell*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg ">Total Views</div>
                        <div><p className="inline text-lg">{ sample[week].totalViews }</p> 
                        <p className={`inline text-sm ${sample[week].diffTotalViews  < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                            {sample[week].diffTotalViews }</p></div>
                    </div>

                    {/*totalComments*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg ">Total Comments</div>
                        <div><p className="inline text-lg">{ sample[week].totalComments }</p> 
                        <p className={`inline text-sm ${sample[week].difftotalComments  < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                            {sample[week].diffTotalComments }</p></div>
                    </div>

                    {/*totalEngagements*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Engagement Rate</div>
                        
                        <div><p className="inline text-lg">{ Math.round(sample[week].engagementRate * 100) /100 }</p> 
                        <p className={`inline text-sm ${sample[week].diffEngagementRate  < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                        {sample[week].diffEngagementRate  < 0? "-":"+"}{Math.round(sample[week].diffEngagementRate * 100) /100}</p></div>
                   
                    </div>

                    
                </div>
            </div>    
        </div>

    )
}
export default TiktokTotalGrowth;