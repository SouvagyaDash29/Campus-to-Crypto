import { useState } from "react";
import "./TextInstructions.css";

const TextInstructions = () => {
  const [imageYouTubeValue, setImageYouTubeValue] = useState("");
  const [imageYouTube1Value, setImageYouTube1Value] = useState("");
  const [imageYouTube2Value, setImageYouTube2Value] = useState("");
  return (
    <div className="text-instructions">
      <img className="image-icon1" alt="" src="/image@2x.png" />
      <div className="text-c-t-a">
        <img
          className="image-8-icon"
          loading="eager"
          alt=""
          src="/image-8@2x.png"
        />
      </div>
      <h3 className="powering-tools-and">
        Powering tools and integrations from companies all around the world
      </h3>
      <button className="welcome-frame">
        <div className="rectangle" />
        <div className="join-us">Join us</div>
      </button>
      <input
        className="image-you-tube3"
        placeholder="Lorem ipsum is simply standard"
        type="text"
        value={imageYouTubeValue}
        onChange={(event) => setImageYouTubeValue(event.target.value)}
      />
      <input
        className="image-you-tube"
        placeholder="Lorem ipsum is simply standard"
        type="text"
        value={imageYouTubeValue}
        onChange={(event) => setImageYouTubeValue(event.target.value)}
      />
      <input
        className="image-you-tube1"
        placeholder="Lorem ipsum is simply standard"
        type="text"
        value={imageYouTube1Value}
        onChange={(event) => setImageYouTube1Value(event.target.value)}
      />
      <input
        className="image-you-tube2"
        placeholder="Lorem ipsum is simply standard"
        type="text"
        value={imageYouTube2Value}
        onChange={(event) => setImageYouTube2Value(event.target.value)}
      />
    </div>
  );
};

export default TextInstructions;
