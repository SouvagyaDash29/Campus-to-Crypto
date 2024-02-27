import React from 'react';
import './Community.css';
import PlusIcon from '../../Assets/svg/Group (1).svg';
import L from '../../Assets/svg/Vector (4).svg';
import Triangle from '../../Assets/svg/Group 1 (1).svg'
import Planet from '../../Assets/images/rectangle-1340.png'
import YoutubeIcon from '../../Assets/svg/youtube-color-icon.svg'
import InstaIcon from '../../Assets/svg/ig-instagram-icon.svg'
import DiscordIcon from '../../Assets/svg/discord-round-color-icon.svg'
import TwitterIcon from '../../Assets/svg/x-social-media-logo-icon.svg'
import { Link } from 'react-router-dom';



const imgKoinX = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/koinx.webp";
const imgCutm = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/cutm+logo.png";
const imgFusionWave = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/FusionWaveAI.png";
const imgBlockCation = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/blockcation_logo.png";
const imgFilemarket = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/filemarket.png";
const imgGramTarang = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/logo.png";


const Community = () => {
  return (
    <>
    <div className="community">
        <div className="community-section1">
            <div className="community-section1-left">
                <h1>Access the power of Blockchain</h1>
                <span>Explore the power of Blockchain</span>
                <button>Join us</button>
            </div>
            <div className="community-section-right">
                <img src={PlusIcon} alt="icon" />
                <img src={L} alt="icon" />
                <img src={Triangle} alt="icon" />
            </div>
        </div>
    </div>
    <div className="community-circle"></div>
    <div className="community-section2">
        <div className="community-section2-up">
            POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
          </div>
          <div className="community-section2-down">
            <img src={imgCutm} alt="img" />
            <img src={imgGramTarang} alt="img" />
            <img src={imgFilemarket} alt="img" />
            <img src={imgKoinX} alt="img" />
            <img src={imgFusionWave} alt="img" />
            <img src={imgBlockCation} alt="img" />
          </div>
        </div>
        <div className="community-section3">
          <img src={Planet} alt="img" />
          <div className="community-section3-head">
            <h4>tell us about yourself</h4>
            <span>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</span>
            <div className="community-input-field">
              <input type="text" name="" id="" placeholder='Enter text'/>
              <input type="text" name="" id="" placeholder='Enter text'/>
              <input type="text" name="" id="" placeholder='Enter text'/>
              <input type="text" name="" id="" placeholder='Enter text'/>
            </div>
            <button>Join us</button>
          </div>
         
        </div>
    </>
  )
}

export default Community;