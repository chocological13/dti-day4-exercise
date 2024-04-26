import NavBar from "../../components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Work />
      <Testimonials />
    </div>
  );
};

export default Home;
