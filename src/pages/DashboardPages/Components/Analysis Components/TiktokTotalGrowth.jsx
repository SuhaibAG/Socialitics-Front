const TiktokTotalGrowth = ({sample, week}) =>{


    return(
        <div>
        <div 
            className=" h-96 border-2 shadow-md rounded-lg mb-5 flex  gap-4 flex-wrap  bg-white w-6/6 p-4">
                <div className="flex-row h-1/12 text-2xl pl-12 w-[100%]">Total Growth : </div>


                <div className="flex flex-row w-[100%]  h-2/6">
                    {/*followers*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Followers</div>
                        <div><p className="inline text-xl">{ sample[week].totalFollowers }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample[week].diffTotalFollowers}</p></div>
                    </div>

                    {/*Likes*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Likes</div>
                        <div><p className="inline text-xl">{ sample[week].totalLikes }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample[week].diffTotalLikes}</p></div>
                    </div>

                    {/*Number of Posts*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Number of Posts</div>
                        <div><p className="inline text-xl">{ sample[week].totalLikes }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample[week].diffTotalLikes}</p></div>
                    </div>

                    {/*Total Shares*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Shares</div>
                        <div><p className="inline text-xl">{ sample[week].totalShares }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample[week].diffTotalShares}</p></div>
                    </div>
                </div>

                <div className="flex flex-row w-[100%] h-2/6 ">
                    {/*Empty cell*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        
                    </div>
                    {/*totalComments*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Comments</div>
                        <div><p className="inline text-xl">{ sample[week].totalComments }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample[week].diffTotalComments}</p></div>
                    </div>

                    {/*totalEngagements*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Engagements</div>
                        <div><p className="inline text-xl">{ Math.round(sample[week].engagementRate * 100) /100 }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{Math.round(sample[week].diffEngagementRate * 100) /100}</p></div>
                    </div>

                    
                </div>
            </div>    
        </div>

    )
}
export default TiktokTotalGrowth;