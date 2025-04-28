
const InstagramPost = ({embedLink}) =>{


    return(
                <div>
                    <div
                    className="flex flex-wrap rounded-lg  h-72 justify-center ">
                        <iframe
                        className="rounded-lg"
                        src={embedLink}
                        title="TikTok Video"
                        />
                    </div>
                </div>
    )
}
export default InstagramPost;