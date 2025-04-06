
const PostPopUP = ({setPostData, setPosting}) =>{


    return(
           <div>
                <div
                    className='border-2 border-black rounded-lg bg-gray-100 h-2/3 h-2/3 w-1/3 m-auto z-10 absolute inset-0 flex-row'>
                    <div 
                    className="flex items-end justify-end">
                        
                        <button 
                            className="bg-gray-400 h-5 w-5 items-center flex justify-center m-2 hover: bg-gray-200 transition "
                            onClick={()=>setPosting(false)}
                        >
                            x
                        </button>
                    </div>

                    <div
                    className="flex items-center justify-center mt-12 ml-6">
                        <label> Post Title</label>
                        <input></input>
                    </div>

                    <div
                    className="flex items-center justify-center mt-12">
                        <label> Content   </label>

                        
                    </div>
                    <div
                    className="flex items-center justify-center mt-2">
                        <textarea
                        className="w-2/3  border-2 solid border-gray-200 rounded-md resize-none"></textarea>
                        
                    </div>
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