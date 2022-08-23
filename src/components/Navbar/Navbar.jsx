import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <nav>
            <header className='nav-header'>
                <img src={logo} alt="shortly" />
                <AiOutlineMenu className='menu-icon' onClick={()=>setNavOpen(!navOpen)}/>
            </header>
            <div className={`${navOpen ? "nav-links open":"nav-links"}`}>
                <ul className="links">
                    <li>Features</li>
                    <li>pricing</li>
                    <li>Resources</li>
                </ul>
                <div className="register">
                    <a href="/login" className="login">Login</a>
                    <div className="btn">sign up</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar