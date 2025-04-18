const XPost = ({tweet, userName}) =>{


    return(

                <div className=" border-2 solid border-black  rounded-lg items-center h-72 bg-[rgb(30,39,50)] text-white">
                    <div
                    className="flex flex-wrap  h-full">
                        <div className="ml-5 text-l w-[100%] h-1/12">@{userName}</div>
                        <div className="ml-16 text-xs self-top b self-start h-4/6 w-[100%]  w-max[100%] mr-16 break-words">{tweet.tweetContent}</div>
                        <div className="h-1/6 flex w-[100%] items-center justify-center self-end rounded-b-lg">
                            <p className="p-4 text-xs break-words"> Likes: {tweet.totalLikes}</p>
                            <p className="p-4 text-xs break-words"> Clicks: {tweet.totalRetweets}</p>
                            <p className="p-4 text-xs break-words">Engagement: {tweet.totalEngagements}</p>
                            <p className="p-4 text-xs break-words">Impressions: {tweet.totalImpressions}</p>
                        
                        </div>
                    </div>
                </div>

    )
}
export default XPost;