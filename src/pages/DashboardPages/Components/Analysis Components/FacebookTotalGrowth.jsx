const FacebookTotalGrowth = ({sample, week}) =>{


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

                    {/*Total Shares*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Shares</div>
                        <div><p className="inline text-xl">{ sample.data[week].totalShares }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data[week].diffTotalShares}</p></div>
                    </div>
                </div>

                <div className="flex flex-row w-[100%] h-2/6 ">
                    {/*totalComments*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Comments</div>
                        <div><p className="inline text-xl">{ sample.data[week].totalComments }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data[week].diffTotalComments}</p></div>
                    </div>

                    {/*totalEngagementRate*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Engagements</div>
                        <div><p className="inline text-xl">{ sample.data[week].totalEngagementRate }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data[week].diffTotalEngagementRate}</p></div>
                    </div>

                    {/*totalHahas*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Hahas</div>
                        <div><p className="inline text-xl">{ sample.data[week].totalHahas }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data[week].diffTotalHahas}</p></div>
                    </div>
                    {/*totalHahas*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Hearts</div>
                        <div><p className="inline text-xl">{ sample.data[week].totalHearts }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data[week].diffTotalHearts}</p></div>
                    </div>
                </div>
            </div>    
        </div>

    )
}
export default FacebookTotalGrowth;