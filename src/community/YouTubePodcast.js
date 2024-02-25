import { useState } from "react";
import "./YouTubePodcast.css";

const YouTubePodcast = () => {
  const [frameXExpectationsValue, setFrameXExpectationsValue] = useState("");
  return (
    <section className="you-tube-podcast">
      <img className="image-icon2" alt="" src="/image@2x.png" />
      <img
        className="child-rectangle-icon"
        alt=""
        src="/child-rectangle@2x.png"
      />
      <div className="powering-tools">
        <img className="powering-tools-child" alt="" src="/group-18.svg" />
        <button className="frame-join">
          <div className="frame-join-child" />
          <div className="join-us1">Join us</div>
        </button>
        <div className="join-us-frames">
          <img
            className="image-4-icon"
            loading="eager"
            alt=""
            src="/image-4@2x.png"
          />
        </div>
        <div className="join-us-frames1">
          <img
            className="image-5-icon"
            loading="eager"
            alt=""
            src="/image-5@2x.png"
          />
        </div>
        <button className="join-us-frames2">
          <img className="image-6-icon" alt="" src="/image-6@2x.png" />
        </button>
        <div className="join-us-frames3">
          <img
            className="image-7-icon"
            loading="eager"
            alt=""
            src="/image-7@2x.png"
          />
        </div>
        <div className="lorem-ipsum-frames">
          <div className="frame-x-self-intro" />
          <div className="text-input-intro">
            <div className="rectangle-bg-text">
              <h1 className="tell-us-about">tell us about yourself</h1>
              <div className="ipsum-is-simply-dummy">
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </div>
            </div>
          </div>
          <input
        className="frame-x-expectations"
        placeholder="Lorem ipsum is simply standard"
        type="text"
        value={frameXExpectationsValue}
            onChange={(event) => setFrameXExpectationsValue(event.target.value)}
      />
        </div>
      </div>
      <button className="frameset">
        <div className="rectangle1" />
        <div className="youtube">YouTube</div>
        <img
          className="rectangle-vector-icon"
          alt=""
          src="/rectangle-vector.svg"
        />
      </button>
      <button className="frameset1">
        <div className="rectangle1" />
        <div className="podcast">Podcast</div>
        <img className="frame-icon" alt="" src="/frame-1.svg" />
      </button>
      <button className="frameset2">
        <div className="rectangle1" />
        <div className="youtube">YouTube</div>
        <img
          className="rectangle-vector-icon"
          alt=""
          src="/rectangle-vector.svg"
        />
      </button>
      <button className="frameset3">
        <div className="rectangle1" />
        <div className="podcast">Podcast</div>
        <img className="frame-icon" alt="" src="/frame-1.svg" />
      </button>
      <div className="text-beyond-expects">
        <div className="beyond-expectations">Beyond expectations</div>
        <div className="ellipse-placeholder">
          <div className="resend-is-driving">
            Resend is driving remarkable developer experiences that enable
            success
          </div>
          <div className="stories-empower-businesses">
            stories, empower businesses, and fuel growth across industries and
            individuals.
          </div>
        </div>
      </div>
      <div className="rectangle-image-container">
        <img
          className="div-mdfade-in-black-mask-g"
          loading="eager"
          alt=""
          src="/div-mdfadeinblack-mask-group.svg"
        />
        <div className="text-fuel-growth" />
      </div>
    </section>
  );
};

export default YouTubePodcast;
