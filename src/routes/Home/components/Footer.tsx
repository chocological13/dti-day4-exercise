import "../style.css";
import miniIcon from "../../../assets/footer-profile.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
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
      <div className="socials">
        <div className="socials-items">
          <p>Build with</p>
          <p>by Brightscout & Ayush</p>
        </div>
        <div className="socials-items">
          <ul>
            <li>
              <a href="" className="socials-links">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="" className="socials-links">
                Twitter
              </a>
            </li>
            <li>
              <a href="" className="socials-links">
                Instagram
              </a>
            </li>
            <li>
              <a href="" className="socials-links">
                Webflow
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
