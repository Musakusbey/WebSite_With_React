import React from 'react'
import './footer.css'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className='Container'>
                <div className='social'>
                    <div className='soci'><FaGithub /></div>
                    <div className='soci'><FaInstagram /></div>
                    <div className='soci'><FaLinkedin /></div>
                </div>
                <div className='copyright'>
                    Copyright &copy; 2022,Musa KUŞBEY
                </div>
            </div>
        </footer>
    )
}

export default Footer