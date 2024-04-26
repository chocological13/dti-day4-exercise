import "../style.css";
import workRowTop from "../../../assets/work-row-top.png";
import workRowBot from "../../../assets/work-row-bot.png";

const Work: React.FC = () => {
  return (
    <div className="work-container">
      <img src={workRowTop} alt="work row top" />
      <img src={workRowBot} alt="work row bot" />
    </div>
  );
};

export default Work;
