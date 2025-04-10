import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const XGraph = ({data}) =>{


    return(
        <div className="w-full h-96  bg-white border-2 border-black rounded-lg mt-4 p-4">
            <p className='text-2xl mb-4'></p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="weekNumber" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="totalFollowers" stroke="#8884d8" />
                <Line type="monotone" dataKey="totalLikes" stroke="#097969" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
export default XGraph;