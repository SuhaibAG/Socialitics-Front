import './Header.css'
import logo from './Images/socialitics png-modified.png'
import { useNavigate } from 'react-router-dom'
const Header = () =>{
    const navigate = useNavigate()
    return(
            <nav>
                <img src={logo} alt='socialitics logo' onClick={() => navigate("/")}/>
                <ul>       
                    <li><button onClick={() => navigate("/tos")}><h3>Terms of Service</h3></button></li>
                    <li><button onClick={() => navigate("/privacypolicy")}><h3 >Privacy policy</h3></button></li>
                    <li><button className='signin' onClick={() => navigate("/login")}><h3>Sign in</h3></button></li>

                </ul>
            </nav>
    )
}

export default Header;