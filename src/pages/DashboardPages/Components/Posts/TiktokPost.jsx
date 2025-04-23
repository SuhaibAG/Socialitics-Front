
const TikTokPost = ({embedLink}) =>{


    return(
                <div className="items-center overflow-y-auto ">
                    <div
                    className="flex flex-wrap rounded-lg  h-72 justify-center">
                        <iframe
                        className="rounded-lg"
                        src={embedLink}
                        title="TikTok Video"
                        />
                    </div>
                </div>
    )
}
export default TikTokPost;
