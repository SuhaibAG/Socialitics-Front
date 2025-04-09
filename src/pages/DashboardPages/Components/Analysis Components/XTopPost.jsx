const XTopPost = ({tweet}) =>{


    return(
        <div className="w-[80%] h-2/5 pt-4 pb-10 border-2 border-black border-solid rounded-lg ml-20 mt-1 flex  gap-4 flex-wrap justify-center bg-white">
            <div className="flex-row h-1/12 text-2xl pl-12 w-[100%] ">Top Post : </div>
                <div className="w-[80%] border-2 solid border-black h-5/6 items-center">
                    <div
                    className="flex flex-wrap h-[100%] items-end">
                        <div className="ml-5 text-xl w-[100%]">@{}</div>
                        <div className="ml-16 mt-[5%] mb-[15%] text-xl">{tweet.data.tweetContent}</div>
                        <div className="flex border-2 border-t-black w-[100%] h-1/6 items-center justify-center p-4">
                            <p>{tweet.data.totalLikes}</p>
                            <p>{tweet.data.totalLikes}</p>
                            <p>{tweet.data.totalLikes}</p>

                        
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default XTopPost;