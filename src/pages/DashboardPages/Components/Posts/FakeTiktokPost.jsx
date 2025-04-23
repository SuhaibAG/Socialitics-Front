
const FakeTiktokPost = ({post}) =>{
    return(
                <div className="items-center  ">
                    <div
                    className="flex flex-wrap rounded-lg  justify-center m-12">
                        <p className="w-full mb-10">Posted on:    {new Date(post.scheduleDate).toLocaleString()}</p>
                        <video width="700" controls>
                            <source src={post.mediaUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
    )
}
export default FakeTiktokPost;
