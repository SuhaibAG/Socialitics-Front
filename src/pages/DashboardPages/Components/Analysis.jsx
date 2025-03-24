import '../../../index.css'

const Analysis = () =>{

    

    return(
           <div>
                <div className='flex flex-col h-screen'>
                <div className="bg-pink-400 p-4 text-center">Top</div>

                    <div className="flex flex-1">
                        <div className="bg-blue-400 p-4 flex-1">Left</div>
                        <div className="bg-green-400 p-4 flex-2">Center</div>
                        <div className="bg-yellow-400 p-4 flex-1">Right</div>
                    </div>

                    <div className="bg-pink-400 p-4 text-center">Bottom</div>
                </div>
           </div>
    )
}
export default Analysis;