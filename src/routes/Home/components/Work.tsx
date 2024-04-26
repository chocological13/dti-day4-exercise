import "../style.css";
import work from "../../../assets/work.png";

const Work: React.FC = () => {
  return (
    <div className="work">
      <div className="work-row">
        <div className="work-container">
          <img src={work} alt="work" />
        </div>
        <div className="work-container">
          <img src={work} alt="work" />
        </div>
        <div className="work-container">
          <img src={work} alt="work" />
        </div>
        <div className="work-container">
          <img src={work} alt="work" />
        </div>
      </div>
      <div className="work-row">
        <div className="work-container">
          <img src={work} alt="work" />
        </div>
        <div className="work-container">
          <img src={work} alt="work" />
        </div>
        <div className="work-container">
          <img src={work} alt="work" />
        </div>
        <div className="work-container">
          <img src={work} alt="work" />
        </div>
      </div>
    </div>
  );
};

export default Work;
