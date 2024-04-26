import "../style.css";
import Menu from "./Menu";

const CTAButton: React.FC = () => {
  return (
    <div className="cta-button">
      <p>
        👋
        <span>
          <a href={Menu}>Hi I'm Ayush!</a>
        </span>
      </p>
    </div>
  );
};

export default CTAButton;
