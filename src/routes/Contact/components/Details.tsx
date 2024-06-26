import "../../Contact/style.css";
import profilePic from "../../../assets/contact-portrait.png";

const Details: React.FC = () => {
  return (
    <div className="contact-details">
      <img src={profilePic} alt="ayush" className="details-pic" />
      <div className="details-text">
        <p className="details-title">Contact Details</p>
        <p className="details-item">ayush.barnwal@brightscout.com</p>
        <p className="details-item">+91 8651447521</p>
      </div>
      <div className="details-text">
        <p className="details-title">Socials</p>
        <p className="details-item">
          <a href="">LinkedIn</a>
        </p>
        <p className="details-item">
          <a href="">Instagram</a>
        </p>
        <p className="details-item">
          <a href="">Twitter</a>
        </p>
        <p className="details-item">
          <a href="">Webflow</a>
        </p>
        <p className="details-item">
          <a href="">Figma</a>
        </p>
      </div>
    </div>
  );
};

export default Details;
