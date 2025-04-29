import { useEffect } from "react";
import { useRef } from "react";
const FakePost = ({post}) =>{
    
    const videoRef = useRef();
    
      useEffect(() => {    
        videoRef.current?.load();
      }, [post]);

    return(
                <div className="flex flex-wrap rounded-lg justify-center border-2">
                    <div
                    className="flex flex-wrap rounded-lg  justify-center m-12  ">
                            <p className="w-full mb-10 text-sm">Post Date:    {new Date(post.scheduleDate).toLocaleString()}</p>
                            <p className="w-full text-2xl ml-12 mb-4"> {post.content}</p>
                        
                        {post.mediaType === "video"?
                            <video width="700" controls ref={videoRef}>
                                <source src={post.mediaUrl} type="video/mp4" />
                                Your browser does not videos
                            </video>
                            :
                        post.mediaType === "image"?
                            <div className="w-full flex justify-center">
                                <img className="max-w-full max-h-full h-full" src={post.mediaUrl} alt="picture from the post"></img>
                            </div>
                            :
                            <></>
                        }
                        
                    </div>
                </div>
    )
}
export default FakePost;