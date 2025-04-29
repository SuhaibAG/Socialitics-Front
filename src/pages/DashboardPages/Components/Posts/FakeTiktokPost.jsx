import { useEffect, useState } from "react";
import { useRef } from "react";
const FakeTikTokPost = ({post}) =>{
    const videoRef = useRef();

  useEffect(() => {    
    videoRef.current?.load();
  }, [post]);
    return(
                <div className="items-center  ">
                    <div
                    className="flex flex-wrap rounded-lg  justify-center m-12">
                        <p className="w-full mb-10">Posted on:    {new Date(post.scheduleDate).toLocaleString()}</p>
                            <video width="700" controls ref={videoRef}>
                                <source src={post.mediaUrl} type="video/mp4" />
                                Your browser does not videos
                            </video>
                    </div>
                </div>
    )
}
export default FakeTikTokPost;
