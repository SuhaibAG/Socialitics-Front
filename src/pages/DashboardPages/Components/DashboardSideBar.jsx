import { useEffect, useState } from 'react'
import '../../../index.css'
import { loginWithX, getXUSer } from '../../../SocialMediaConnections/XConnections'
import { useUser } from '../../../userhandlers/UserProvider'
import { loginWithInstagram } from '../../../SocialMediaConnections/InstagramConnection'
const DashboardSideBar = () =>{
    const { user } = useUser(false);


    const [isOpen, setIsOpen] = useState(true)
    const [filteredAccount, setFilteredAccount] = useState()
    const [XUser, setXUser] = useState()
    const [instagramUser, setinstagramUser] = useState()
    useEffect(() => {
        if(XUser == null){
            setXUser(user.TwitterUserName)
        }

        if(instagramUser == null){
            setinstagramUser(user.InstagramUserName)
        }

 
    }, [])
   
    return(
            <div className="flex">
                <div className={"w-64 h-screen border p-5 text-black p-5 fixed"}>

                    <nav className="space-y-4 block flex flex-col items-center justify-center h-screen -m-4">

                        
                        {/* X */}
                        {XUser != null?
                        <button
                            onClick={() => setFilteredAccount("X")}
                            className='border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2'
                             >   
                            <p>{XUser}</p>
                            <img
                                className='w-3 h-3' 
                                src='https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg'
                                alt='X logo'
                            >
                            </img>
                        </button>
                        
                        :

                        <button
                        onClick={() => setXUser(loginWithX().userName)}
                        className='border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2'
                         >   
                        <p>Connect</p>
                        <img
                            className='w-3 h-3' 
                            src='https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg'
                            alt='X logo'
                            >
                        </img>

                        </button> 
                        }
                        

                        {/* instagram */}
                        {instagramUser != null?
                        <button
                        onClick={() => setFilteredAccount("Instagram")}
                        className='border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2'
                         >   
                        <p>{instagramUser}</p>
                        <img
                            className='w-3 h-3' 
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png'
                            alt='Instagram logo'
                        >
                        </img>
                        </button>
                    
                            :
                    
                        <button
                            onClick={() => setinstagramUser(loginWithInstagram)}
                            className='border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x- m-2'
                            >   
                            <p>Connect</p>
                            <img
                                className='w-3 h-3' 
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png'
                                alt='Instagram logo'
                                >
                            </img>

                        </button>
                    
                        }
                        
                        
                        {/* facebook */}
                        {instagramUser != null?
                        <button
                        onClick={() => setFilteredAccount("Facebook")}
                        className='border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2'
                         >   
                        <p>{instagramUser}</p>
                        <img
                            className='w-3 h-3' 
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png'
                            alt='Instagram logo'
                        >
                        </img>
                        </button>
                    
                            :
                    
                        <button
                            onClick={() => setinstagramUser(loginWithInstagram)}
                            className='border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x- m-2'
                            >   
                            <p>Connect</p>
                            <img
                                className='w-3 h-3' 
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png'
                                alt='Instagram logo'
                                >
                            </img>

                        </button>
                    
                        }
                        
                        
                        {/* Youtube */}
                        <button
                            className='border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2'
                        >   
                            <p>Connect</p>
                            <img
                                className='w-3 h-3' 
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/YouTube_full-color_icon_%282024%29.svg/120px-YouTube_full-color_icon_%282024%29.svg.png'
                                alt='Youtube logo'
                                >
                            </img>

                        </button>

                        {/* Tiktok */}
                        <button
                            className='border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2'
                        >   
                            <p>Connect</p>
                            <img
                                className='w-3 h-3' 
                                src='https://www.svgrepo.com/show/327400/logo-tiktok.svg'
                                alt='Tiktok logo'
                                >
                            </img>

                        </button>

                    </nav>
                </div>
            </div>
    )
}
export default DashboardSideBar;