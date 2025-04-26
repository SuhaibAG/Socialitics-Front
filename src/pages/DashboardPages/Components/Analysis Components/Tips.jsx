import { useEffect, useState } from "react";

const Tips = ({data, week}) =>{
    const [tips, setTips] = useState(data[week])

    useEffect(() =>{
        setTips(data[week])
    },[week])
    return (
        <div  className="flex-row h-96 border-2 shadow-md rounded-lg mb-5 gap-4 bg-white w-6/6 p-4 w-full max-h-72 text-lg overflow-y-auto">
            <p className="w-11/12  ml-8 text-2xl">Tips:</p>
            {data !== null?
                <div>
                    {tips.tips.map((tip, index) =>(
                        <li className="ml-12 p-4 w-11/12">{tip}:</li>
                    ))}

                </div>
                
            :
                <div>Loading....</div>
            }
            
        </div>
      );
};

export default Tips;