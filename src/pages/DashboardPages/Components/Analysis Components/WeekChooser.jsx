import { useState } from "react"
const WeekChooser = ({week, sample, setWeek}) =>{
    const [lowest, setLowest] = useState(1)

      const lower = ()=>{
        if(lowest != 1){
          if(week > lowest+2){
            setWeek(lowest+2)
          }
          setLowest(lowest-1)
        }
      }
      const increase = ()=>{
        const array = sample.data
        if(array.length > lowest + 2){
          setLowest(lowest+1)
        }
      
      }

    return(
        <div className="flex">
            <button 
                    onClick={()=>lower()}
                    className="border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center">{"<"}</button>


                  <button 
                    onClick={()=>setWeek(lowest)} 

                    className={lowest === week? 
                      `border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center bg-black text-white`
                    :
                      `border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center`
                    }
                    >{lowest}
                  </button>

                    <button 
                    onClick={()=>setWeek(lowest + 1)} 

                    className={lowest + 1 === week? 
                      `border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center bg-black text-white`
                    :
                      `border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center`
                    }
                    >{lowest + 1}
                  </button>

                  <button 
                    onClick={()=>setWeek(lowest + 2)} 

                    className={lowest + 2=== week? 
                      `border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center bg-black text-white`
                    :
                      `border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center`
                    }
                    >{lowest + 2}
                  </button>

                  <button 
                    onClick={() =>increase()}
                    className="border-black border-solid border-2 rounded-full  w-7 text-xl flex items-center justify-center">{">"}</button>
                    
                    <p className="ml-24">{sample.data[week -1].startDate} - {sample.data[week -1].endDate}</p>
        </div>
    )
}
export default WeekChooser;