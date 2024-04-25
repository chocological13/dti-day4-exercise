import NavBar from "../../components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
