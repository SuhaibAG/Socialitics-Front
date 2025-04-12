import { useState } from "react";

const PostPopUP = ({setPostData, setPosting}) =>{
    const [content, setContent] = useState(null)
    const [date, setDate] = useState(null)

    return(

           <div >
                <div className=" bg-gray-500 opacity-45 h-screen w-screen m-auto z-10 absolute inset-0"
                                onClick={() => setPosting(false)}></div>
                <div className='shadow-md rounded-lg bg-white  h-2/3 w-1/3 m-auto z-10 absolute inset-0 flex-row'>

                <div className="flex flex-col justify-center items-center h-2/6 mt-4">
                    <p className="text-center mb-4">Content</p>
                    <textarea className="border p-2 w-1/2 h-full resize-none"></textarea>
                </div>
             
                    
                        


                    <div className="h-4"></div>


                    <div className="mt-12">
                        <label>
                            publish date
                        </label>
                        <input type="date" className="w-2/3 mt-2"></input>
                    </div>
                    <button className="mt-12 mr-4 bg-blue-500 w-20 h-10 justify-center items-center text-white hover:bg-blue-200 transition">Publish</button>

                
            </div>
           </div>
    )
}
export default PostPopUP;