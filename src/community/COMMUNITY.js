import FrameCommunity from "./FrameCommunity";
import TextInstructions from "./TextInstructions";
import YouTubePodcast from "./YouTubePodcast";
import "./COMMUNITY.css";

const COMMUNITY = () => {
  return (
    <div className="community">
      <FrameCommunity />
      <div className="frame-background">
        <TextInstructions />
        <img className="empty-frame-icon" alt="" src="/empty-frame@2x.png" />
        <img
          className="empty-frame-icon1"
          loading="eager"
          alt=""
          src="/frame-2@2x.png"
        />
        <div className="ellipse-node" />
      </div>
      <img className="community-child" alt="" src="/group-1171275446.svg" />
      <div className="child-frames">
        <main className="parent-frame">
          <YouTubePodcast />
        </main>
      </div>
    </div>
  );
};

export default COMMUNITY;
