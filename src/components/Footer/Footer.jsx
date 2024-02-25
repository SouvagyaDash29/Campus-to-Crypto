import React from 'react';
import { GrYoutube } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import './Footer.css'
import { NavLink } from 'react-router-dom';
const logoI = "https://campus-crypto.s3.eu-north-1.amazonaws.com/favicon-logo.png";
const nevigateN = window.location.href = "#";
const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer-section">
       <div className="footer-section-content">
       <div className="footer-section-left">
        <NavLink to='/' ><img src={logoI} alt="LoGo" /></NavLink>
        Managed by CUTM Community
        <div className="social-media-logo">
        <NavLink to='/#'><GrYoutube /></NavLink>
        <NavLink to='/#'><BsTwitterX /></NavLink>
        <NavLink to='/#'><FaInstagram /></NavLink>
        <NavLink to='/#'><BiLogoTelegram /></NavLink>
        </div>
        <div>© Copyright 2024 Centurion University.</div>
        </div>
        <div className='main-right-side'>
        {/* <div className="footer-section-right">
          OTHER RESOURCES
          <ul>
            <li><NavLink to='#'></NavLink></li>
            <li><NavLink to='#'></NavLink></li>
          </ul>
        </div> */}
        <div className="footer-section-right">
          GET CONNCTED
          <ul>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='#'>BLog</NavLink></li>
            <li><NavLink to={nevigateN}>Newsletter</NavLink></li>
            <li><NavLink to='#'>OurTeam</NavLink></li>
          </ul>
        </div>
        </div>
       </div>
        
      </div>
    </footer>

    </>
  )
}

export default Footer