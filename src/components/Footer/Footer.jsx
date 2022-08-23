import React from 'react'
import './Footer.css'
import logo from './../../images/logo.png'
import {AiFillFacebook,AiOutlineTwitter} from 'react-icons/ai'
import {BsPinterest,BsInstagram} from 'react-icons/bs'
const Footer = () => {
    return (
        <footer>
            <div className="logo">
                Shortly
            </div>
                <ul className="foot-links">
                    <li>
                        <h3>Features</h3>
                        <ul>
                            <li>Link Shortening</li>
                            <li>Branded Links</li>
                            <li>Analytics</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Resources</h3>
                        <ul>
                            <li>Blog</li>
                            <li>Developers</li>
                            <li>Support</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Company</h3>
                        <ul>
                            <li>About</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>contact</li>
                        </ul>
                    </li>
                </ul>
                <div className="social">
                    <AiFillFacebook className='icon'/>
                    <AiOutlineTwitter className='icon'/>
                    <BsPinterest className='icon'/>
                    <BsInstagram className='icon'/>
                </div>
        </footer>
    )
}

export default Footer