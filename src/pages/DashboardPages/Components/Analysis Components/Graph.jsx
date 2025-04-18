import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graph = ({data, collumns}) =>{
    const colors = ["#8884d8", "#097969", "#F88379", " #fff781"]
    const [filters, setFilters] = useState(collumns)

    const handleFilters = (col) =>{

      if(filters.includes(col)){
        setFilters(filters.filter(filters => filters != col))
      }
      else{
        setFilters([...filters, col])
      }
    }
    console.log(filters)
    return (
        <div className="w-full h-96 bg-white shadow-lg rounded-lg mt-4 p-4">
          <div>
            {collumns.map((col) => (
              <button
              className={`border-solid border-black border-2 w-32 ${filters.includes(col) ? "bg-black text-white" : "bg-white text-black"}`}
              onClick={()=>handleFilters(col)}>{col}</button>
            ))}

          </div>
          <p className='text-2xl mb-4'></p>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="endDate" />
              <YAxis />
              <Tooltip />
              <Legend />
              {filters.map((col, index) => (
                <Line
                  key={col}
                  type="monotone"
                  dataKey={col}
                  stroke={colors[index % colors.length]}/>
              ))
              }
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
};

export default Graph;