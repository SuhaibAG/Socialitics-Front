import { useEffect, useState } from 'react'
import '../../../index.css'
import { loginWithX, getXUSer } from '../../../SocialMediaConnections/XConnections'
import { useUser } from '../../../userhandlers/UserProvider'
import { loginWithInstagram } from '../../../SocialMediaConnections/InstagramConnection'
import { loginWithFacebook } from '../../../SocialMediaConnections/FacebookConnections'
import { loginWithTiktok } from '../../../SocialMediaConnections/TiktokConnections'
const DashboardSideBar = ({filteredAccount, setFilteredAccount, view}) =>{
    const { user } = useUser(false);
    const [isOpen, setIsOpen] = useState(true)
    const [XUser, setXUser] = useState(user.TwitterUserName)
    const [instagramUser, setinstagramUser] = useState(user.InstagramUserName)
    const [facebookUser, setFacebookUser] = useState(user.FaceBookUserName)
    const [tiktokUser, setTiktokUser] = useState(user.TiktokUserName)

    return(
                <div className={"w-64 h-screen text-black p-5    border-r-2 border-black "}>

                    <nav className="space-y-4  flex flex-col items-center justify-center h-screen -m-4 ">
                        {view==="Analysis"?
                        <div>

                        <button
                            onClick={() => setFilteredAccount(null)}
                            className={
                                filteredAccount == null?
                                `border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2 bg-black w-40 text-white hover:bg-gray-800 transition`
                                :
                                `border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2 bg-white w-40 hover:bg-gray-300 transition`
                                }
                             >   
                            <p>All pages</p>

                        </button>
                        </div>
                        :
                        <div></div>
                        }
                        
                        {/* X */}
                        {XUser != null?
                        <button
                            onClick={() => setFilteredAccount("X")}
                            className={
                                filteredAccount == "X"?
                                `border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2 bg-black w-40 text-white hover:bg-gray-800 transition`
                                :
                                `border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2 bg-white w-40 hover:bg-gray-300 transition`
                                }
                             >   
                            <p>{XUser}</p>
                            <img
                                className='w-3 h-3 bg-white' 
                                src='https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg'
                                alt='X logo'
                            >
                            </img>
                        </button>
                        
                        :

                        <button
                        onClick={() => setXUser(loginWithX())}
                        className='border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2 hover:bg-gray-300 transition'
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
                        className={
                            filteredAccount == "Instagram"?
                            `border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2 bg-black w-40 text-white hover:bg-gray800 transition`
                            :
                            `border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2 bg-white w-40 hover:bg-gray-300 transition`
                            }
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
                            className='border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x- m-2 hover:bg-gray-300 transition'
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
                        {facebookUser != null?
                        <button
                        onClick={() => setFilteredAccount("Facebook")}
                        className={
                            filteredAccount == "Facebook"?
                            `border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2 bg-black w-40 text-white hover:bg-gray800 transition`
                            :
                            `border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2 bg-white w-40 hover:bg-gray-300 transition`
                            }
                         >   
                        <p>{facebookUser}</p>
                        <img
                            className='w-3 h-3' 
                            src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032'
                            alt='Instagram logo'
                        >
                        </img>
                        </button>
                    
                            :
                    
                        <button
                            onClick={() => setFacebookUser(loginWithFacebook)}
                            className='border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x- m-2 hover:bg-gray-300 transition'
                        >   
                            <p>Connect</p>
                            <img
                                className='w-3 h-3 bg-white' 
                                src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032'
                                alt='Instagram logo'
                                >
                            </img>

                        </button>
                    
                        }
                        

                        {/* Tiktok */}
                        {tiktokUser != null?
                        <button
                        onClick={() => setFilteredAccount("Tiktok")}
                        className={
                            filteredAccount == "Tiktok"?
                            `border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2 bg-black w-40 text-white hover:bg-gray800 transition`
                            :
                            `border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x-2 m-2 bg-white w-40 hover:bg-gray-300 transition`
                            }
                         >   
                        <p>{tiktokUser}</p>
                        <img
                            className='w-3 h-3' 
                            src='https://www.svgrepo.com/show/327400/logo-tiktok.svg'
                            alt='Instagram logo'
                        >
                        </img>
                        </button>
                    
                            :
                    
                        <button
                            onClick={() => setTiktokUser(loginWithTiktok)}
                            className='border border-black border-solid rounded-lg p-4 flex items-center justify-center space-x- m-2 hover:bg-gray-300 transition'
                        >   
                            <p>Connect</p>
                            <img
                                className='w-3 h-3' 
                                src='https://www.svgrepo.com/show/327400/logo-tiktok.svg'
                                alt='Instagram logo'
                                >
                            </img>

                        </button>
                    
                        }
                    </nav>
                </div>
    )
}
export default DashboardSideBar;