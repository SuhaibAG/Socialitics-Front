import { useState } from "react";

const XPopUP = ({queue, draft, setDraft, setQueue, setPosting}) =>{
    const [content, setContent] = useState(null)
    const [date, setDate] = useState(null)

   

    const addQueue = () =>{
        console.log(date)
        console.log(content)
        if(content !=null && date!=null){
            const post ={
                "tweetId": "000000",
                "tweetContent": content,
                "totalLikes": 0,
                "totalRetweets": 0,
                "totalEngagements": 0,
                "totalImpressions": 0,
                "date":date
                }
    
                const newQueue = [...queue, post]
                setQueue(newQueue)
            setPosting(false)
        }

        
    }

    return(

           <div >
                <button className=" bg-gray-500 opacity-45 h-screen w-screen m-auto z-10 absolute inset-0 hover:cursor-default"
                                onClick={() => setPosting(false)}></button>

    
                <div className='shadow-md rounded-lg bg-white  h-2/3 w-1/3 m-auto z-10 absolute inset-0'>

                    <div className="flex flex-col justify-center items-center h-2/6 mt-4">
                        <p className="text-center mb-4">Content</p>
                        <textarea className="border p-2 w-1/2 h-full resize-none" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                

                    <div className="mt-12">
                        <label>
                            Publish Date
                        </label>
                        <input type="date" className="w-2/3 mt-2 rounded-lg" value={date} onChange={(e) => setDate(e.target.value)}></input>
                    </div>
                    
                    <div className="mt-12 justify-center items-center mr-24">
                        <button onClick={() => addQueue()} className=" bg-blue-500 text-white rounded-xl flex justify-center items-center w-4/12 hover:bg-blue-400 transition-color">Add to Queue</button>
                        <button className=" bg-gray-600 text-white rounded-xl flex justify-center items-center w-4/12 hover:bg-gray-500 transition-color">Draft</button>
                    </div>

                    
                </div>
           </div>
    )
}
export default XPopUP;