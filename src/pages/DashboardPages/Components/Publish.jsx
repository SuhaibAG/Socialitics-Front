import { useState } from 'react'
import '../../../index.css'
import PostPopUP from './Publish Components/PostPopUp'

const Publish = () =>{
    const posts = []
    const [posting, setPosting] = useState(false)
    const [postData, setPostData] = useState()

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
                <div className='flex flex-col h-screen'>         
                    <div className="flex justify-center flex-1 mb-60 mt-20 ">
                        <div className=" border-2 border-black border-solid p-4  w-2/12 mr-3.5  rounded-lg">Queue</div>
                        <div className=" border-2 border-black border-solid p-4 w-2/12 mr-3.5  rounded-lg">Draft</div>
                        <div className=" border-2 border-black border-solid p-4 w-2/12 mr-3.5  rounded-lg">Sent</div>
                        <div className=" border-2 border-black border-solid p-4 w-2/12 mr-3.5  rounded-lg">Approve</div>
                        <div
                        className='flex flex-col justify-end'>
                        <button  
                        onClick={() => setPosting(true)}
                        className='bg-blue-500 w-20 h-10 justify-center items-center text-white text-2xl hover:bg-blue-200 transition'>
                            +
                        </button>
                    </div>
                    </div>
                    
                </div>
           </div>
    )
}
export default Publish;