import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { GoArrowUpRight } from "react-icons/go";
import "./Home.css";
// import YTicon from "../../Assets/svg/youtube-color-icon.svg";
// import Podcast from "../../Assets/svg/apple-podcasts-icon.svg";
import Bimage from "../../Assets/svg/Group 17.svg";
import Shape from "../../Assets/svg/Group 16.svg";
// import Square from "../../Assets/svg/Rectangle 131.svg";
import Person1 from "../../Assets/images/ellipse-10.png";
import Person2 from "../../Assets/images/ellipse-20.png";
import Person3 from "../../Assets/images/ellipse-30.png";
import Person4 from "../../Assets/images/ellipse-40.png";
// import Company1 from "../../Assets/images/image-40.png";
// import Company2 from "../../Assets/images/image-50.png";
import Backimg from "../../Assets/images/backgroundIMAGE.png";
// import image1 from "../../Assets/images/image9.png";
// import image2 from "../../Assets/images/image10.png";
// import image3 from "../../Assets/images/image11.png";
// import image4 from "../../Assets/images/image12.png";
// import image5 from "../../Assets/images/image13.png";
// import image6 from "../../Assets/images/image14.png";
// import image7 from "../../Assets/images/image15.png";
// import image8 from "../../Assets/images/image16.png";

const imgPolk = "https://campus-crypto.s3.eu-north-1.amazonaws.com/Polkadot-20240223T062823Z-001/Polkadot/1694463747080.jfif";
const imgwaveAI="https://campus-crypto.s3.eu-north-1.amazonaws.com/FusionWaveAi-20240223T065404Z-001/FusionWaveAi/1702374446893.jfif";
const imgKoi="https://campus-crypto.s3.eu-north-1.amazonaws.com/KoinX/1674268329598.jfif";
const imgBlok= "https://campus-crypto.s3.eu-north-1.amazonaws.com/BlockonCapital/1698334334464.jfif";
const imgBSB="https://campus-crypto.s3.eu-north-1.amazonaws.com/BlockseBlock/1692902136792.jfif";
const imgSFT="https://campus-crypto.s3.eu-north-1.amazonaws.com/SnapperTech/f.jfif";
//footer-side
const image1 = "https://campus-crypto.s3.eu-north-1.amazonaws.com/Campus+2+Crypto/iamge1.jpg";
const image2 = "https://campus-crypto.s3.eu-north-1.amazonaws.com/Campus+2+Crypto/a9af380e-0c82-42f8-bf87-4fd36c207085.jfif";
const image3 = "https://campus-crypto.s3.eu-north-1.amazonaws.com/Campus+2+Crypto/image2.webp";
const image4 = "https://campus-crypto.s3.eu-north-1.amazonaws.com/Campus+2+Crypto/image3.webp";
const image5 = "https://campus-crypto.s3.eu-north-1.amazonaws.com/Campus+2+Crypto/22805cca-058e-40db-8f2c-194eee7908a0.jfif";
const image6 = "https://campus-crypto.s3.eu-north-1.amazonaws.com/Campus+2+Crypto/image4.webp";
const image7 = "https://campus-crypto.s3.eu-north-1.amazonaws.com/Campus+2+Crypto/9dc9148e-b7ff-4498-b7d7-2354f55a8cb9.jfif";
const image8 = "https://campus-crypto.s3.eu-north-1.amazonaws.com/Campus+2+Crypto/a25fe95b-154a-48cd-9aff-d93dc4479a1e.jfif";


const imgKoinX = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/koinx.webp";
const imgCutm = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/cutm+logo.png";
const imgFusionWave = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/FusionWaveAI.png";
const imgBlockCation = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/blockcation_logo.png";
const imgFilemarket = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/filemarket.png";
const imgGramTarang = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/logo.png";

const YTicon = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
const Podcast = "https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg"

const Ylink = "https://www.instagram.com/campustocrypto/";
const Tlink = "https://twitter.com/campustocrypto";
const data = [
  {
    image: imgPolk,
    name: "Radhakrishna Dasari",
    role: "CEO of Polkadot",
  },
  {
    image: imgwaveAI,
    name: "Ankit Das",
    role: "CEO of FusionwaveAI",
  },
  {
    image: imgKoi,
    name: "Punit Agarwal",
    role: "CEO of KoinX",
  },
  {
    image:imgBlok,
    name: "Jagdish Pandya",
    role: "CEO of BlockOn",
  },
  {
    image: imgBSB,
    name: "Sahil Thakur",
    role: "CEO of BlockseBlock",
  },
  {
    image: imgSFT,
    name: "Prashant Surana",
    role: "CEO of Snapper Future Tech",
  },
];

const CountComponent = ({ count }) => (
  <div className="count">
    {count.map((Count, index) => (
      <div className="innner-count" key={index}>
        {/* Use CountUp component */}
        <CountUp end={parseInt(Count.number)} duration={2.5} /><span>+</span>
        <h3 className="inner-count-h3">{Count.title}</h3>
      </div>
    ))}
  </div>
);
const count = [
  {
    number: "7+",
    title: "YEARS",
  },
  {
    number: "18+",
    title: "ACTIVE MEMBERS",
  },
  {
    number: "30+",
    title: "PROJECTS",
  },
];

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Blockchain", "Decentralize", "Cryptocurrency"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <>
    <div className="circle"></div>
      <div className="home">
        {/* SECTION 1 */}
        <div className="section1">
          <div className="section1-left">
            Access the power of <br />
            <span>{typeEffect}</span>
            <Cursor style={{ color: "white" }} />
          </div>
          <div className="section1-right">
            🔥😍👍
            <span>
              Blockchain technology that enables secure and transparent
              record-keeping of transactions across a network of computers. It
              was originally designed as the underlying technology for the
              cryptocurrency Bitcoin.
            </span>
          </div>
        </div>
        {/* SECTION 2 */}
        <div className="section2">
          <div className="section2-left">
            <img src={Bimage} alt="img" />{" "}
          </div>
          <div className="section2-right">
            <div className="right-side-1">
              {/* <img src={Square} alt="img" /> */}
            </div>
            <div className="right-side-2">
              <img src={Shape} alt="img" />
            </div>
            <div className="right-side-3">
            Chain of Community Chain of Block, 
              <div className="profile">
                <div className="image">
                  <img src={Person1} alt="img" />
                  <img src={Person2} alt="img" />
                  <img src={Person3} alt="img" />
                  <img src={Person4} alt="img" />
                </div>
                <div className="join">
                  Join our Community, We are waiting for you
                </div>
              </div>
            </div>
            <Link to="/Community">
            <div className="try-free">
              Join Us <GoArrowUpRight />
            </div>
            </Link>
          </div>
        </div>
        {/* SECTION 3 */}
        <div className="section3">
          <div className="section3-up">
            POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
          </div>
          <div className="section3-down">
            <img src={imgCutm} alt="img" />
            <img src={imgGramTarang} alt="img" />
            <img src={imgFilemarket} alt="img" />
            <img src={imgKoinX} alt="img" />
            <img src={imgFusionWave} alt="img" />
            <img src={imgBlockCation} alt="img" />
          </div>
        </div>
        {/* SECTION 4 */}
        <div className="cards">
          <div className="card">
            Explore the power of Blockchain
            <p>
            Explore the future of social interaction with our innovative blockchain-based social media platform! Join us today to experience decentralized.
            </p>
            <div className="buttons">
            <Link to={Ylink} style={{ color: "white" }} target="__blank">
              <button >
                INSTAGRAM <img src={YTicon} alt="Instagram icon" />
              </button>
              </Link>
              <Link to={Tlink} style={{ color: "white" }} target="__blank">
              <button>
                TWITTER <img src={Podcast} alt="Twiiter icon" />
              </button>
              </Link>
            </div>
          </div>
          <div className="card" id="subscribe">
            Connect through the Blockchain
            <p>
            Subscribe now and join our blockchain community today to be part of the future of decentralized technology!
            </p>
            <div className="discussionSection">
              <input type="text" placeholder="Write your thoughts" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="backgroungImg">
          <img src={Backimg} alt="img" />
        </div>
        {/* SECTION 5 */}
        <div className="section5">
          <h2> Our Guest's & Speakers</h2>
          <div className="speaker-list">
            {data.map((item, index) => (
              <div className="speakers" key={index}>
                <img src={item.image} alt="speaker img" />
                {item.name}
                <h4>{item.role}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6 */}
        <div>
          <CountComponent count={count}/>
        </div>

        <div className="section7">
          <h1>Journey Through Art of community</h1>
          <div className="section7-content">
            <div className="content-sec1">
              <div className="content-left">
                <div className="block1">
                  <h2>2018</h2>
                  <span>Got the first funding from CUTM to build the mining rig inside the University for educational purposes.</span>
                </div>
                <div className="block2">
                  <img src={image1} alt="img" />
                </div>
              </div>
              <div className="content-right">
                <img src={image2} alt="img2" />
              </div>
            </div>
            <div className="content-sec2">
              <div className="content-left">
                <div className="block2">
                  <img src={image3} alt="img" />
                </div>
                <div className="block1">
                  <h2>2019</h2>
                  <span>In 2019, launched our first DAPP name "Blockation".</span>
                </div>
              </div>
              <div className="content-right">
                <img src={image5} alt="img2" />
              </div>
            </div>
            <div className="content-sec1">
              <div className="content-left">
                <div className="block1">
                  <h2>2020</h2>
                  <span>Started Blockchain Skill Courses in all the campus.</span>
                </div>
                <div className="block2">
                  <img src={image4} alt="img" />
                </div>
              </div>
              <div className="content-right">
                <img src={image7} alt="img2" />
              </div>
            </div>
            <div className="content-sec2">
              <div className="content-left">
                <div className="block2">
                  <img src={image6} alt="img" />
                </div>
                <div className="block1">
                  <h2>2021</h2>
                  <span>Launched web application of our first DAPP names "Blockcation".</span>
                </div>
              </div>
              <div className="content-right">
                <img src={image8} alt="img2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
