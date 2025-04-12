import { useState } from 'react'
import '../../../index.css'
import PostPopUP from './Publish Components/PostPopUp'
import XPublish from './Publish Components/XPublish'

const Publish = ({filteredAccount}) =>{
    const posts = []


    const [postType, setPostType] = useState("Queue")

    return(
           <div className='bg-slate-50 '>
            
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
                        postType === "Draft" ? "border-black" : "border-transparent"
                    }`}
                    onClick={() => setPostType("Draft")}
                    >
                    Draft
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
                    
                    <div className='-mt-10  flex justify-center '>
                        {filteredAccount =="X"?
                        <XPublish  postType={postType}/>
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








                    
                
               
                
           </div>
    )
}
export default Publish;