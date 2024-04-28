import "../style.css";
import miniIcon from "../../../assets/footer-profile.png";

const FooterTop: React.FC = () => {
  return (
    <div className="get-in-touch">
      <div className="touch-text">
        <p>Have something in mind?</p>
        <p>
          <img src={miniIcon} alt="mini-icon" />
          <span> let's build it together.</span>
        </p>
      </div>
      <button type="button">Get In Touch</button>
    </div>
  );
};

export default FooterTop;
