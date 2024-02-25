import React from "react";
import "./About.css";
import Img from "../../Assets/svg/Yuppies Managing.svg";
import telegram from "../../Assets/svg/Icon (1).svg";
import setting from "../../Assets/svg/Icon.svg";
import missionIcon from "../../Assets/svg/Yuppies Remote Team.svg";
import Tick from "../../Assets/svg/Tick.svg";
import grid from '../../Assets/svg/Group 1171275444.svg';
import img from "../../Assets/images/sampleimg1.avif";
import { Link } from "react-router-dom";
import google from '../../Assets/images/image-50.png';
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";

const team =[
  {
    img: img,
    name: "Princy Flora",
    job: "Co-Founder of Alofirm",

  },
  {
    img: img,
    name: "Princy Flora",
    job: "Co-Founder of Alofirm"

  },
  {
    img: img,
    name: "Princy Flora",
    job: "Co-Founder of Alofirm"

  }
];

const partner = [
  {
    img: google,
    Comment: "One of a select group of Facebook Marketing Partners in Advertising Technology and Management.Building the ddfgan enterprisedoesn't need nightmare."
  },
  {
    img: google,
    Comment: "One of a select group of Facebook Marketing Partners in Advertising Technology and Management.Building the ddfgan enterprisedoesn't need nightmare."
  },
  {
    img: google,
    Comment: "One of a select group of Facebook Marketing Partners in Advertising Technology and Management.Building the ddfgan enterprisedoesn't need nightmare."
  },
  {
    img: google,
    Comment: "One of a select group of Facebook Marketing Partners in Advertising Technology and Management.Building the ddfgan enterprisedoesn't need nightmare."
  }

]

const About = () => {

  return (
    <div>
      <div className="about-circle-top"></div>
      <div className="About-contant">
        <div className="About-section1">
          <div className="A-section-left">
            <img src={Img} alt="img" />
          </div>
          <div className="A-section-right">
            {/* <div className="about-back-circle1"></div> */}
            <h4>At C2C, we are passionate about blockchain technology.</h4>
            <span>
              Our community is a gathering place for blockchain enthusiasts,
              developers, investors, and innovators who share a common goal: to
              explore, learn, and collaborate in this exciting field.
            </span>
            <hr />
            <div className="A-section-right2">
              <div className="sub-content1">
                <img src={telegram} alt="icon" />
                <div className="sub-content1-right">
                  <h6>How technology started</h6>
                  <span>
                    Building an enterprisedoesn't need your thousands.
                  </span>
                </div>
              </div>
              <div className="sub-content1">
                <img src={setting} alt="icon" />
                <div className="sub-content-right">
                  <h6>Endless Possibilities</h6>
                  <span>
                    Building an enterprisedoesn't need your thousands.
                  </span>
                </div>
              </div>
              <button>
                <Link to="/Community"> Join our Team </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="About-section2">
          <div className="about-section2-left">
            <h3>Our Mission</h3>
            <span>Our mission is to foster a vibrant and inclusive ecosystem where individuals from all backgrounds can come together to exchange ideas, share knowledge</span>
            <ul>
              <li><img src={Tick} alt="tick icon" />Project Collaboration: contribute to open-source.</li>
              <li><img src={Tick} alt="tick icon" />Networking Opportunities: Connect with like-minded individuals</li>
              <li><img src={Tick} alt="tick icon" />Supportive Community: Join a supportive and welcoming community </li>
            </ul>
          </div>
          <div className="about-section2-right">
            <img src={missionIcon} alt="icon" />
          </div>
        </div>
        <div className="About-section3">
          <div className="about-section3-left">
          <h2>Our <span>Team</span></h2>
          <label>Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built for </label>
          </div>
          <div className="about-section3-right">
          <button><Link to='/Community'>Join Our Team</Link></button>

          </div>
        </div>
      </div>
     <div className="our-team-img">
     <div className="grid">
          <img src={grid} alt="back" />
        </div>
        
          <div className="img-content">
 
            {team.map((person, index) => (
            <div className="content1" key={index}>
              <img src={person.img} alt="img" />
              <h3>{person.name}</h3>
              <span>{person.job}</span>
              <div className="s-media">
              <FaLinkedinIn />
              <FaXTwitter />
              <FaFacebookF />
              </div>
            </div>
          ))}
            </div>
          
        </div>
        <div className="our-partner">
        <h1>Our Partner</h1>
        <div className="partner">
        {partner.map((Partners, index) => (
            <div className="company" key={index}>
              <img src={Partners.img} alt="img" />
              <span>{Partners.Comment}</span>
              </div>
            
          ))}
        </div>
        </div>

     </div>
    
  );
};

export default About;
