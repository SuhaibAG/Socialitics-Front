import example1 from './Images/example1.png'
import example2 from './Images/example2.png'
import logo from './Images/socialitics png-modified.png'
import { useNavigate } from 'react-router-dom'
const Adverts = () =>{
    const navigate = useNavigate()

    return(
        <div className='h-screen'>
            {/*Welcome Message*/}
           <div className="flex-row p-4 mt-24">
                <div className="flex text-5xl justify-center m-4 font-bold">Take Control of Your Social Media Strategy 🚀</div>
                <div className="flex text-2xl justify-center m-4">"Analyze, plan, and optimize your social media with AI-powered insights, automation, and competitor analysis—all in one place."</div>
            </div>

            {/*Double Image*/}
            <div className="flex justify-center items-center space-x-12 mt-24">
                <img src={example1} 
                    className="w-5/12 h-auto transform transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer" alt="Example 1" />
                <img src={example2} 
                    className="w-5/12 h-auto transform transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer" alt="Example 2" />
            </div>
            
            {/*Big Button*/}
            <div className="flex justify-center mt-24">
                    <button onClick={() => navigate("/login")} 
                        className=" bg-[#848FA5] text-black text-2xl rounded-3xl flex justify-center items-center w-3/12 h-16 font-bold hover:bg-[#9eabc5] transition-color">
                            Start Growing Now
                    </button>
            </div>

            {/*Product Info*/}
            <div>
                <div className="flex p-4 m-24 justify-center">
                    <div className="flex text-xl justify-left m-4">📊 Unlock the Power of Social Media Analytics</div>
                    <div className="flex text-xl justify-left m-4 text-gray-500">"Track, optimize, and automate your content strategy with AI-powered insights."</div>
                </div>

                <div className="flex p-4 m-24 justify-center">
                    <div className='w-1/6'>
                        <div className="flex text-xl justify-left m-4">📊 Cross-Platform Analytics</div>
                        <div className="flex text-xl justify-left m-4 text-gray-500">“Track your performance across Facebook, Instagram, X and Tiktok—all in one dashboard."</div>
                    </div>
                    <div className='w-1/6'>
                        <div className="flex text-xl justify-left m-4">🤖 AI-Driven Recommendations</div>
                        <div className="flex text-xl justify-left m-4 text-gray-500">"Our AI suggests the best times to post, trending hashtags, and strategies to boost engagement."</div>
                    </div>
                    <div className='w-1/6'>
                        <div className="flex text-xl justify-left m-4">📅 Smart Scheduling & Automation</div>
                        <div className="flex text-xl justify-left m-4 text-gray-500">"Save time by automating post publishing and managing multiple platforms effortlessly."</div>
                    </div>
                    <div className='w-1/6'>
                        <div className="flex text-xl justify-left m-4">📎 Generate Reports in One Click</div>
                        <div className="flex text-xl justify-left m-4 text-gray-500">"Easily download weekly performance reports with insights to improve your strategy."</div>
                    </div>
                    <div className='w-1/6'>
                        <div className="flex text-xl justify-left m-4">📈 Industry Trends Insights</div>
                        <div className="flex text-xl justify-left m-4 text-gray-500">“Track trending hashtags and content types in your industry. Get smart, personalized tips on what to post and when—based on your audience's behavior.”</div>
                    </div>
                </div>

                <div className="flex p-4 m-24 justify-center">
                    <div className="flex text-xl justify-left m-4">🚀 Ready to Take Your Social Media to the Next Level?</div>
                    <div className="flex text-xl justify-left m-4 text-gray-500">"Sign up today and start optimizing your strategy with AI-powered insights!"</div>
                </div>

            </div>
            
            {/*Footer*/}
            <div className="flex justify-left bg-gray-950 h-4/6">
                    <div className='w-1/6 ml-20 mt-12'>
                        <img src={logo}></img>
                    </div>

                    <div className='w-1/6 mt-12'>
                        <div className="flex text-xl justify-left m-4 text-white"> Site Informations</div>
                        <a onClick={()=> navigate('/tos')} className="flex text-xl justify-left m-4 text-gray-500 hover:cursor-pointer">Terms of Service</a>
                        <a onClick={()=> navigate('/privacypolicy')} className="flex text-xl justify-left m-4 text-gray-500 hover:cursor-pointer">Privacy Policy</a>
                    </div>
            </div>




        </div>
           
           
    )
}

export default Adverts;