import "../style.css";
import Portrait from "../../../assets/hero-portrait.png";

const Hero: React.FC = () => {
  return (
    <div className="hero-section">
      <img src={Portrait} alt="portrait" />
      <p className="hero-title">Webflow Developer - UI/UX</p>
      <div className="cta-button">
        <p>
          👋<span> Hi I'm Ayush!</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
