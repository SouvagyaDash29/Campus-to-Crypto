import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { GoArrowUpRight } from "react-icons/go";
import "./Home.css";
import YTicon from "../../Assets/svg/youtube-color-icon.svg";
import Podcast from "../../Assets/svg/apple-podcasts-icon.svg";
import Bimage from "../../Assets/svg/Group 17.svg";
import Shape from "../../Assets/svg/Group 16.svg";
import Square from "../../Assets/svg/Rectangle 131.svg";
import Person1 from "../../Assets/images/ellipse-10.png";
import Person2 from "../../Assets/images/ellipse-20.png";
import Person3 from "../../Assets/images/ellipse-30.png";
import Person4 from "../../Assets/images/ellipse-40.png";
import Company1 from "../../Assets/images/image-40.png";
import Company2 from "../../Assets/images/image-50.png";
import SampleImg1 from "../../Assets/images/sampleimg1.avif";
import SampleImg2 from "../../Assets/images/sampleimg2.avif";
import SampleImg3 from "../../Assets/images/sampleimg3.avif";
import SampleImg4 from "../../Assets/images/sampleimg4.avif";
import SampleImg5 from "../../Assets/images/sampleimg5.avif";
import ReginaImg from "../../Assets/images/regina4.png";
import Backimg from '../../Assets/images/backgroundIMAGE.png';
// import image1 from '../../Assets/images/image9.png';
// import image2 from '../../Assets/images/image10.png';
// import image3 from '../../Assets/images/image11.png';
// import image4 from '../../Assets/images/image12.png';
// import image5 from '../../Assets/images/image13.png';
// import image6 from '../../Assets/images/image14.png';
// import image7 from '../../Assets/images/image15.png';
// import image8 from '../../Assets/images/image16.png';


const data = [
  {
    image: SampleImg1,
    name: "Speaker",
    role: "CEO xyz",
  },
  {
    image: SampleImg2,
    name: "Speaker",
    role: "CEO xyz",
  },
  {
    image: SampleImg3,
    name: "Speaker",
    role: "CEO xyz",
  },
  {
    image: SampleImg4,
    name: "Speaker",
    role: "CEO xyz",
  },
  {
    image: SampleImg5,
    name: "Speaker",
    role: "CEO xyz",
  },
  {
    image: ReginaImg,
    name: "Speaker",
    role: "CEO xyz",
  },
];
const count =  [
  {
    number: "7+",
    title: "YEARS"
  },
  {
    number: "18+",
    title: "ACTIVE"
  },
  {
    number: "30+",
    title: "ACCOUNT"
  }
];

// const photos = [
//   {
//     number: "40,000",
//     subtitle: "BLOCKCHAIN TECHNOLOGY EXPLORE THE POWER",
//     photo: image1,
//     photo2: image2
//   },
//   {
//     number: "42,000",
//     subtitle: "BLOCKCHAIN TECHNOLOGY EXPLORE THE POWER",
//     photo: image3,
//     photo2: image4
//   },
//   {
//     number: "40,000",
//     subtitle: "BLOCKCHAIN TECHNOLOGY EXPLORE THE POWER",
//     photo: image5,
//     photo2: image6
//   },
//   {
//     number: "40,000",
//     subtitle: "BLOCKCHAIN TECHNOLOGY EXPLORE THE POWER",
//     photo: image7,
//     photo2: image8
//   },
// ]

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Blockchain", "Decentralize", "Cryptocurrency"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <>
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
              <img src={Square} alt="img" />
            </div>
            <div className="right-side-2">
              <img src={Shape} alt="img" />
            </div>
            <div className="right-side-3">
              Lorem ipsum dolor sit amet, consectetur
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
            <div className="try-free">
              Try Free <GoArrowUpRight />
            </div>
          </div>
        </div>
        {/* SECTION 3 */}
        <div className="section3">
          <div className="section3-up">
            POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
          </div>
          <div className="section3-down">
            <img src={Company1} alt="img" />
            <img src={Company2} alt="img" />
            <img src={Company1} alt="img" />
            <img src={Company2} alt="img" />
            <img src={Company1} alt="img" />
            <img src={Company2} alt="img" />
          </div>
        </div>
        {/* SECTION 4 */}
        <div className="cards">
          <div className="card">
            Explore the power of Blockchain
            <p>
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
            <div className="buttons">
              <button>
                YOUTUBE <img src={YTicon} alt="Youtube icon" />
              </button>
              <button>
                PODCAST <img src={Podcast} alt="podcast icon" />
              </button>
            </div>
          </div>
          <div className="card">
            Connect through the Blockchain
            <p>
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
            <div className="discussionSection">
              <input type="text" placeholder="Write your thoughts" />
              <button>Let's talk</button>
            </div>
          </div>
        </div>
        <div className="backgroungImg">
          <img src={Backimg} alt="img" />
        </div>
        {/* SECTION 5 */}
        <div className="section5">
          <h2> Our Speakers</h2>
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
            <div className="count">
              {count.map((Count, index) => (
               <div className="innner-count" key={index}>
                 <h1>{Count.number}</h1>
                <h3>{Count.title}</h3>
               </div>
              ))}
            </div>

            {/* <div className="section7">
              <h1>Journey Through Art of community</h1>
              {photos.map((elements, index) => (
                
                  <div className="section7-whole" key={index}>
                  <div className="section7-left">
                  <div className="left-details">
                  <h2>{elements.number}</h2>
                  <label> {elements.subtitle}</label>
                  </div>
                  <div className="left-image">
                  <img src={elements.photo} alt="img" />
                  </div>
                </div>
                <div className="section7-right">
                  <img src={elements.photo2} alt="img" />
                </div>
                </div>
                
                
              ))}
            </div> */}

            </div>
      </>
    
  );
};

export default Home;
