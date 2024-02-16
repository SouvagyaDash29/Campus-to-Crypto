import React from 'react';
import { GrYoutube } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import './Footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer-section">
       <div className="footer-section-content">
       <div className="footer-section-left">
        <NavLink to='/'><img src="" alt="LoGo" /></NavLink>
        Managed by Ethereum technology
        <div className="social-media-logo">
        <NavLink to='/#'><GrYoutube /></NavLink>
        <NavLink to='/#'><BsTwitterX /></NavLink>
        <NavLink to='/#'><FaInstagram /></NavLink>
        <NavLink to='/#'><BiLogoTelegram /></NavLink>
   
        </div>
        </div>
        <div className="footer-section-right">
          GET CONNCTED
          <ul>
            <li><NavLink to='#'>Services</NavLink></li>
            <li><NavLink to='#'>BLog</NavLink></li>
            <li><NavLink to='#'>Newsletter</NavLink></li>
          </ul>
        </div>
       </div>

      </div>
    </footer>

    </>
  )
}

export default Footer