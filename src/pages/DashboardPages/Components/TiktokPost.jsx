
const TikTokPost = ({embedLink}) =>{


    return(
                <div className="items-center overflow-y-auto ">
                    <div
                    className="flex flex-wrap rounded-lg  h-72 justify-center">
                        <iframe
                        className="rounded-lg"
                        src={`https://www.tiktok.com/player/v1/7492768990142467335?music_info=1&description=1&autoplay=1&loop=1&utm_campaign=tt4d_open_api&utm_source=sbawg2tu63235dgqwe`}
                        title="TikTok Video"
                        />
                    </div>
                </div>
    )
}
export default TikTokPost;