import { useUser } from "../../../../userhandlers/UserProvider";
const XAnalysis = () =>{
     const { user } = useUser(false);
    const sample= {
        "firebaseUID": "dedwfwefww",
        "twitterId": "000000",
        "userName": "xxxxx",
        
        "data": 
            [
                {
                    "weekNumber": 2,
                    "startDate": "6 Apr 2025",
                    "endDate": "12 Apr 2025",
                    "totalFollowers": 100,
                    "diffTotalFollowers": "+10",
                    "numOfPosts": 10,
                    "diffNumOfPosts": "+2",
                    "totalLikes": 100,
                    "diffTotalLikes": "+20",
                    "totalRetweets": 10,
                    "diffTotalRetweets": "+10",
                    "totalReplies": 5,
                    "diffTotalReplies": "+5",
                    "totalEngagements": 115,
                    "diffTotalEngagements": "+20",
                    "totalImpressions": 300,
                    "diffTotalImpressions": "+50",
                  },

                  {
                    "weekNumber": 3,
                    "startDate": "6 Apr 2025",
                    "endDate": "12 Apr 2025",
                    "totalFollowers": 120,
                    "diffTotalFollowers": "+10",
                    "numOfPosts": 130,
                    "diffNumOfPosts": "+2",
                    "totalLikes": 100,
                    "diffTotalLikes": "+20",
                    "totalRetweets": 10,
                    "diffTotalRetweets": "+10",
                    "totalReplies": 5,
                    "diffTotalReplies": "+5",
                    "totalEngagements": 115,
                    "diffTotalEngagements": "+20",
                    "totalImpressions": 300,
                    "diffTotalImpressions": "+50",
                  }

                
            ]
      }


    const tweet = {
        "firebaseUID": "dedwfwefww",
        "twitterId": "000000",
        "userName": "xxxxx",
        "data": {
          "tweetId": "000000",
          "tweetContent": "Hello everyone",
          "totalLikes": 100,
          "totalRetweets": 10,
          "totalEngagements": 115,
          "totalImpressions": 300,
        }
      }
    return(
        <div className="flex-col w-screen">
           <div
           className="flex h-screen w-[80%] ">
                <div>
                <div 
                className="w-4/6 h-2/5 p-4 border-2 border-black border-solid rounded-lg ml-20 mt-20 mb-5 flex  gap-4 flex-wrap">
                <div className="lex flex-row h-1/12 text-xl pl-12">Total Growth</div>

                <div className="flex flex-row w-[100%]  h-2/6">
                    {/*followers*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12 ">
                        <div className="text-xl">Followers</div>
                        <div><p className="inline text-xl">{ sample.data.totalFollowers }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data.diffTotalFollowers}</p></div>
                    </div>

                    {/*Likes*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Likes</div>
                        <div><p className="inline text-xl">{ sample.data.totalLikes }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data.diffTotalLikes}</p></div>
                    </div>

                    {/*Number of Posts*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Number of Posts</div>
                        <div><p className="inline text-xl">{ sample.data.totalLikes }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data.diffTotalLikes}</p></div>
                    </div>

                    {/*Total Retweets*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Retweets</div>
                        <div><p className="inline text-xl">{ sample.data.totalRetweets }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data.diffTotalRetweets}</p></div>
                    </div>
                </div>

                <div className="flex flex-row w-[100%] h-2/6">
                    {/*followers*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Followers</div>
                        <div><p className="inline text-xl">{ sample.data.totalFollowers }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data.diffTotalFollowers}</p></div>
                    </div>

                    {/*Likes*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Likes</div>
                        <div><p className="inline text-xl">{ sample.data.totalLikes }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data.diffTotalLikes}</p></div>
                    </div>

                    {/*Number of Posts*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Number of Posts</div>
                        <div><p className="inline text-xl">{ sample.data.totalLikes }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data.diffTotalLikes}</p></div>
                    </div>

                    {/*Total Retweets*/}
                    <div
                    className="flex flex-col justify-center items-center w-3/12">
                        <div className="text-xl">Total Retweets</div>
                        <div><p className="inline text-xl">{ sample.data.totalRetweets }</p> <p className="inline text-sm text-green-600  -mt-2 align-super relative  ">{sample.data.diffTotalRetweets}</p></div>
                    </div>
                </div>
            </div>


                

            <div 
                className="w-4/6 h-2/5 p-4 border-2 border-black border-solid rounded-lg ml-20 mt-1 flex  gap-4 flex-wrap justify-center">
                <div className="flex-row h-1/12 text-xl pl-12 w-[100%] ">Top Post</div>
                <div className="w-[80%] border-2 solid border-black h-5/6 items-center">
                    {/*followers*/}
                    <div
                    className="flex flex-wrap h-[100%] items-end">
                        <div className="ml-5 text-xl w-[100%]">@{user.TwitterUserName}</div>
                        <div className="ml-16 mt-[5%] mb-[15%] text-xl">{tweet.data.tweetContent}</div>
                        <div className="flex border-2 border-t-black w-[100%] h-1/6 items-center justify-center ">
                            <p>{tweet.data.totalLikes}</p>
                            <p>{tweet.data.totalLikes}</p>
                            <p>{tweet.data.totalLikes}</p>

                        
                        </div>
                    </div>
                </div>
                </div>
            </div>


                </div>
           
           <div className="bg-red-50">
            sadasd
           </div>

        </div>
           
    )
}
export default XAnalysis;