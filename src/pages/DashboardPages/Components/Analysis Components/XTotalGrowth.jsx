const XTotalGrowth = ({sample, week}) =>{


    return(
        <div>
        <div 
            className=" h-96 border-2 shadow-md rounded-lg mb-5 flex  gap-4 flex-wrap  bg-white w-6/6 p-4">
                <div className="flex-row h-1/12 text-xl pl-12 w-[100%]">Total Growth : </div>


                <div className="flex flex-row w-[100%]  h-2/6">
                    {/*followers*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Followers</div>
                        <div><p className="inline text-lg">{ sample[week].totalFollowers }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample[week].diffTotalFollowers}</p></div>
                    </div>

                    {/*Likes*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Total Likes</div>
                        <div><p className="inline text-lg">{ sample[week].totalLikes }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample[week].diffTotalLikes}</p></div>
                    </div>

                    {/*Number of Posts*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Number of Posts</div>
                        <div><p className="inline text-lg">{ sample[week].totalLikes }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample[week].diffTotalLikes}</p></div>
                    </div>

                    {/*Total Retweets*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Total Retweets</div>
                        <div><p className="inline text-lg">{ sample[week].totalRetweets }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample[week].diffTotalRetweets}</p></div>
                    </div>
                </div>

                <div className="flex flex-row w-[100%] h-2/6 ">
                    {/*totalReplies*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Total Replies</div>
                        <div><p className="inline text-lg">{ sample[week].totalReplies }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample[week].diffTotalReplies}</p></div>
                    </div>

                    {/*totalEngagements*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Total Engagements</div>
                        <div><p className="inline text-lg">{ sample[week].totalEngagements }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample[week].diffTotalEngagements}</p></div>
                    </div>

                    {/*Impressions*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Total Impressions</div>
                        <div><p className="inline text-lg">{ sample[week].totalImpressions }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample[week].diffTotalImpressions}</p></div>
                    </div>
                </div>
            </div>    
        </div>

    )
}
export default XTotalGrowth;