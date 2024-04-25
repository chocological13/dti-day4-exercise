import "../style.css";
import Portrait from "../../../assets/hero-portrait.png";

const Hero: React.FC = () => {
  return (
    <div className="hero-section">
      <img src={Portrait} alt="portrait" />
      <p className="hero-title">Webflow Developer - UI/UX</p>
    </div>
  );
};

export default Hero;
