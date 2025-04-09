const XTotalGrowth = ({sample, week}) =>{


    return(
        <div>
        <div 
            className=" h-2/5 p-4 border-2 border-black border-solid rounded-lg ml-20 mt-20 mb-5 flex  gap-4 flex-wrap w-[80%] bg-white">
                <div className="flex flex-row h-1/12 text-2xl pl-12">Total Growth : </div>


                <div className="flex flex-row w-[100%]  h-2/6">
                    {/*followers*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Followers</div>
                        <div><p className="inline text-xl">{ sample.data[week].totalFollowers }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data[week].diffTotalFollowers}</p></div>
                    </div>

                    {/*Likes*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Likes</div>
                        <div><p className="inline text-xl">{ sample.data[week].totalLikes }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data[week].diffTotalLikes}</p></div>
                    </div>

                    {/*Number of Posts*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Number of Posts</div>
                        <div><p className="inline text-xl">{ sample.data[week].totalLikes }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data[week].diffTotalLikes}</p></div>
                    </div>

                    {/*Total Retweets*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Retweets</div>
                        <div><p className="inline text-xl">{ sample.data[week].totalRetweets }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data[week].diffTotalRetweets}</p></div>
                    </div>
                </div>

                <div className="flex flex-row w-[100%] h-2/6 ">
                    {/*totalReplies*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Replies</div>
                        <div><p className="inline text-xl">{ sample.data[week].totalReplies }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data[week].diffTotalReplies}</p></div>
                    </div>

                    {/*totalEngagements*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Engagements</div>
                        <div><p className="inline text-xl">{ sample.data[week].totalEngagements }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data[week].diffTotalEngagements}</p></div>
                    </div>

                    {/*Impressions*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Number of Impressions</div>
                        <div><p className="inline text-xl">{ sample.data[week].totalImpressions }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data[week].diffTotalImpressions}</p></div>
                    </div>
                </div>
            </div>    
        </div>

    )
}
export default XTotalGrowth;