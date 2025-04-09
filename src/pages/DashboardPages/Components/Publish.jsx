import { useState } from 'react'
import '../../../index.css'
import PostPopUP from './Publish Components/PostPopUp'
import XPublish from './Publish Components/XPublish'

const Publish = ({filteredAccount}) =>{
    const posts = []
    const [posting, setPosting] = useState(false)
    const [postData, setPostData] = useState()
    const [postType, setPostType] = useState("Queue")

    return(
           <div>
            {posting?
            <div>
                <PostPopUP 
                setPostData ={setPostData}
                setPosting ={setPosting}/>
            </div>
            :
            <div>
                
            </div>
            }
                <div className='m-10 text-xl'>
                    {filteredAccount?
                    <p>{filteredAccount}</p>
                    :
                    <div>Choose a Social Media Account</div>
                    }
                </div>


                <div className='flex mt-10'>         
                    <button
                        className={`border-b-2 border-solid rounded-none ${
                            postType === "Queue" ? "border-black" : "border-transparent"
                        }`}
                        onClick={() => setPostType("Queue")}
                        >
                        Queue
                    </button>

                    <button
                    className={`border-b-2 border-solid rounded-none ${
                        postType === "Draft" ? "border-black" : "border-transparent"
                    }`}
                    onClick={() => setPostType("Draft")}
                    >
                    Draft
                    </button>

                    <button
                    className={`border-b-2 border-solid rounded-none ${
                        postType === "Posted" ? "border-black" : "border-transparent"
                    }`}
                    onClick={() => setPostType("Posted")}
                    >
                    Posted
                    </button>
                </div>
                    
                    <div>
                        {filteredAccount =="X"?
                        <XPublish />
                        :
                        filteredAccount =="Instagram"?
                        <div></div>
                        :
                        filteredAccount =="Facebook"?
                        <div></div>
                        :
                        filteredAccount =="Tiktok"?
                        <div></div>
                        :
                        <div className="flex justify-center items-center h-[100%] w-[100%]">
                            <h1 className='ml'>Choose a Social media Account</h1>
                        </div>
                        }
                    </div>








                    
                
                <div>
                    {<button  
                        onClick={() => setPosting(true)}
                        className='bg-blue-500 w-20 h-10 justify-center items-center text-white text-2xl hover:bg-blue-200 transition m-4'>
                            +
                    </button>}
                </div>
                        
                
           </div>
    )
}
export default Publish;