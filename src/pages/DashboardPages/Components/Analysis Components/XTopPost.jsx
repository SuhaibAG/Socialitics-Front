const XTopPost = ({tweet}) =>{


    return(
        <div className="w-4/6 h-80 pt-4 pb-10 border-2 border-black border-solid rounded-lg ml-20  flex  gap-4 flex-wrap justify-center bg-white ">
            <div className="flex-row h-1/12 text-2xl pl-12 w-[100%] ">Top Post : </div>
                <div className="w-[80%] border-2 solid border-black h-5/6 items-center">
                    <div
                    className="flex flex-wrap h-[100%]">
                        <div className="ml-5 text-l w-[100%] h-1/6">@{tweet.userName}</div>
                        <div className="ml-16 text-xs self-top b self-start h-4/6 w-[100%]  w-max[100%] mr-16 break-words">{tweet.data.tweetContent}</div>
                        <div className="h-1/6 flex border-2 border-t-black w-[100%] items-center justify-center self-end">
                            <p className="p-4 text-xs break-words"> Likes: {tweet.data.totalLikes}</p>
                            <p className="p-4 text-xs break-words"> Clicks: {tweet.data.totalRetweets}</p>
                            <p className="p-4 text-xs break-words">Engagement: {tweet.data.totalEngagements}</p>
                            <p className="p-4 text-xs break-words">Impressions: {tweet.data.totalImpressions}</p>
                        
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default XTopPost;