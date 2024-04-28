import NavBar from "../../components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FooterTop from "./components/FooterTop";
import "../Home/style.css";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Work />
      <Testimonials />
      <div className="footer">
        <FooterTop />
        <div className="footer-bot">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
