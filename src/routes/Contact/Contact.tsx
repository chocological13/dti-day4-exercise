import Form from "../Contact/components/Form";
import NavBar from "../../components/NavBar";
import "../Contact/style.css";
import Details from "./components/Details";
import Footer from "../Home/components/Footer";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <NavBar />
      <div className="forms">
        <div className="forms-item">
          <Details />
        </div>
        <div className="forms-item">
          <Form />
        </div>
      </div>
      <div className="footer-box">
        <div className="footer-position">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
