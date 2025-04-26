const FacebookTotalGrowth = ({sample, week}) =>{


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
                        <div><p className="inline text-lg">{ sample[week].totalFollowers }</p> 
                        <p className={`inline text-sm ${sample[week].diffTotalFollwers < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                            {sample[week].diffTotalFollwers}</p></div>
                    </div>

                    {/*Likes*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Total Likes</div>
                        <div><p className="inline text-lg">{ sample[week].totalLikes }</p> 
                        <p className={`inline text-sm ${sample[week].diffTotalLikes < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                            {sample[week].diffTotalShares}</p></div>
                    </div>

                    {/*Number of Posts*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Number of Posts</div>
                        <div><p className="inline text-lg">{ sample[week].totalPosts }</p> 
                        <p className={`inline text-sm ${sample[week].diffTotalPosts < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                            {sample[week].diffTotalLikes}</p></div>
                    </div>

                    {/*Total Shares*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Total Shares</div>
                        <div><p className="inline text-lg">{ sample[week].totalShares }</p> 
                        <p className={`inline text-sm ${sample[week].diffTotalShares < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                            {sample[week].diffTotalShares}</p></div>
                    </div>
                </div>

                <div className="flex flex-row w-[100%] h-2/6 ">
                    {/*totalComments*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Total Comments</div>
                        <div><p className="inline text-lg">{ sample[week].totalComments }</p>
                        <p className={`inline text-sm ${sample[week].diffTotalComments < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                        {sample[week].diffTotalComments}</p></div>
                    </div>

                    {/*totalEngagementRate*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Engagement Rate</div>
                        <div><p className="inline text-lg">{  Math.round(sample[week].totalEngagementRate * 100) /100 }</p> 
                        <p className={`inline text-sm ${sample[week].diffTotalEngagementRate < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                        {sample[week].diffEngagementRate  < 0? "-":"+"}{ Math.round(sample[week].diffTotalEngagementRate * 100) /100}</p></div>
                    </div>

                    {/*totalHahas*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Total Hahas</div>
                        <div><p className="inline text-lg">{ sample[week].totalHahas }</p> 
                        <p className={`inline text-sm ${sample[week].diffTotalHahas < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                            {sample[week].diffTotalHahas}</p></div>

                    </div>

                    {/*totalhearts*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-lg">Total Hearts</div>
                        <div><p className="inline text-lg">{ sample[week].totalHearts }</p>
                        <p className={`inline text-sm ${sample[week].diffTotalHearts < 0? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                            {sample[week].diffTotalHahas}</p></div>
                    </div>
                </div>
            </div>    
        </div>

    )
}
export default FacebookTotalGrowth;