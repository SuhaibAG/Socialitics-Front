import { useEffect, useState } from 'react'
import '../../../index.css'
import XPublish from './Publish Components/XPublish'
import TiktokPublish from './Publish Components/TiktokPublish'
import InstagrmaPublish from './Publish Components/InstagramPublish'
import axios from 'axios'
import { useUser } from '../../../userhandlers/UserProvider'
import FacebookPublish from './Publish Components/FacebookPublish'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

const Publish = ({filteredAccount}) =>{
    const [posts, setPosts] = useState(null)
    const [postType, setPostType] = useState("Queue")
    const [xPosts, setXPosts] = useState([])
    const [instagramPosts, setInstagramPosts] = useState([])
    const [facebookPosts, setFacebookPosts] = useState([])
    const [tikTokPosts, setTiktokPosts] = useState([])
    const {user} = useUser()

    const getPosts = async()=>{
        try{
            const response = await axios.get(`${BACKEND_URL}/posts/scheduler/userPosts`,
                {
                  params: { "firebaseUID": user.firebaseUID },
                  headers:{
                   Authorization: `Bearer ${user.accessToken}`,
                },
              }
            );
            return(response.data)
          } catch (error) {
            console.error(error);
            return null;
          }
        }

        useEffect(() => {
            const fetchPosts = async () => {
                if(posts === null){
                    const newPosts = await getPosts();
                    setPosts(newPosts)

                    for (const post of newPosts) {
                        if (post.platform === "tiktok") {
                            setTiktokPosts([...tikTokPosts, post]);
                        } else if (post.platform === "facebook") {
                            setFacebookPosts([...facebookPosts, post]);
                        } else if (post.platform === "instagram") {
                            setInstagramPosts([...instagramPosts, post]);
                        } else if (post.platform === "twitter") {
                            setXPosts([...xPosts, post]);
                        }    
                    }
                
            }
        }
        fetchPosts();
          
        }, []);
          

    return(
           <div className='bg-slate-50 '>
                {/*if no social media account is chosen this will be shown*/}
                <div className='m-10 text-xl'>
                    {filteredAccount?
                    <p>{filteredAccount}</p>
                    :
                    <div>Choose a Social Media Account</div>
                    }
                </div>


                <div className='flex mt-10 '>         
                    <button
                        className={`bg-slate-50 border-b-2 border-solid rounded-none ${
                            postType === "Queue" ? "border-black" : "border-transparent"
                        }`}
                        onClick={() => setPostType("Queue")}
                        >
                        Queue
                    </button>

                    <button
                        className={`bg-slate-50 border-b-2 border-solid rounded-none ${
                            postType === "Posted" ? "border-black" : "border-transparent"
                        }`}
                        onClick={() => setPostType("Posted")}
                        >
                        Posted
                    </button>
                </div>
                    
                    <div className='-mt-10  flex justify-center'>
                        {filteredAccount =="X"?
                        <XPublish  postType={postType} posts={xPosts}/>
                        :
                        filteredAccount =="Instagram"?
                        <InstagrmaPublish postType={postType} posts={instagramPosts}/>
                        :
                        filteredAccount =="Facebook"?
                        <FacebookPublish postType={postType} posts={facebookPosts}/>
                        :
                        filteredAccount =="Tiktok"?
                        <TiktokPublish postType={postType} posts={tikTokPosts}/>
                        :
                        <div className="flex justify-center items-center h-[100%] w-[100%]">
                            <h1 className='ml'>Choose a Social media Account</h1>
                        </div>
                        }
                    </div>








                    
                
               
                
           </div>
    )
}
export default Publish;