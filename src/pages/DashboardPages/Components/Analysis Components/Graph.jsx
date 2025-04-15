import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const XGraph = ({data, collumns}) =>{
    const colors = ["#8884d8", "#097969", "#F88379", " #fff781"]

    return (
        <div className="w-full h-96 bg-white shadow-lg rounded-lg mt-4 p-4">
          <p className='text-2xl mb-4'></p>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="endDate" />
              <YAxis />
              <Tooltip />
              <Legend />
              {collumns.map((col, index) => (
                <Line
                  key={col}
                  type="monotone"
                  dataKey={col}
                  stroke={colors[index % colors.length]}/>
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
};

export default XGraph;