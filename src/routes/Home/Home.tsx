import NavBar from "../../components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Work />
    </div>
  );
};

export default Home;
