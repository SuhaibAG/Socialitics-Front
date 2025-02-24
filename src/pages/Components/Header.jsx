import './Header.css'
import logo from './Images/socialitics png-modified.png'
const Header = () =>{


    return(
            <nav>
                <img src={logo} alt='socialitics logo'/>
                <ul>       
                    <li><button><h3>Products</h3></button></li>
                    <li><button><h3>Solutions</h3></button></li>
                    <li><button><h3>Community</h3></button></li>
                    <li><button><h3>Resources</h3></button></li>
                    <li><button><h3>Pricing</h3></button></li>
                    <li><button><h3>Contact</h3></button></li>
                    <li><button className='signin'><h3>Sign in</h3></button></li>
                    <li><button className='register'><h3>Register</h3></button></li>

                </ul>
            </nav>
    )
}

export default Header;