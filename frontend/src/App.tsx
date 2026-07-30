import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DesignWork from "./components/DesignWork";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DesignWork />
      <Contact />
    </div>
  );
}

export default App;
