import "../style.css";
import Portrait from "../../../assets/hero-portrait.png";
import CTAButton from "./CTA-Button";

const Hero: React.FC = () => {
  return (
    <div className="hero-section">
      <img src={Portrait} alt="portrait" />
      <p className="hero-title">Webflow Developer - UI/UX</p>
      <CTAButton />
    </div>
  );
};

export default Hero;
