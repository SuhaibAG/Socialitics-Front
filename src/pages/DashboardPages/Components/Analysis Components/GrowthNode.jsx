const GrowthNode = ({paramName,param, paramDiff}) => {

    return(
        <div className="flex flex-col justify-center items-center w-3/12 overflow-x-scroll p-4">
            <div className="text-lg whitespace-nowrap">{paramName}</div>
            <div>
                <p className="inline text-lg">{param}</p> 
                <p className={`inline text-sm ${paramDiff.includes('-')? `text-red-600`:`text-green-600`} -mt-2 align-super relative`}>
                {paramDiff}
                </p>
            </div>
        </div>
    )
}

                    





export default GrowthNode