import "../style.css";
import arrowLight from "../../../assets/arrow-light.png";

const About: React.FC = () => {
  const DATA = [
    {
      url: "Decodable.co",
      role: "Brand Design - Webflow Development - Web Design"
    },
    {
      url: "Gofirefly.io",
      role: "Brand Design - Webflow Development - Web Design"
    },
    {
      url: "Blinkops.com",
      role: "Brand Design - Webflow Development - Web Design"
    },
    {
      url: "Withkanvas.com",
      role: "Brand Design - Webflow Development - Web Design"
    }
  ];

  return (
    <div className="about">
      <div className="about-1">
        <div className="about-title">
          <h3>About</h3>
        </div>
        <div className="about-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatibus a consequatur minus amet et sapiente consectetur, fuga facere autem excepturi vero! Et, quidem perspiciatis. Earum consequuntur eveniet necessitatibus nam.</p>
        </div>
      </div>
      <div className="about-1">
        <div className="about-title">
          <h3>Recent Work</h3>
        </div>
        <div className="recent-list">
          {DATA.map((work) => (
            <RecentWork url={work.url} role={work.role} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

const RecentWork = ({ url, role }: { url: string; role: string }) => {
  return (
    <div className="recent-container">
      <div className="url-role">
        <p className="url-text">
          <a href={`https://${url}`}>{url}</a>
        </p>
        <p className="role-text">{role}</p>
      </div>
      <div className="work-icon">
        <a href="">
          <img src={arrowLight} alt="arrow" />
        </a>
      </div>
    </div>
  );
};
