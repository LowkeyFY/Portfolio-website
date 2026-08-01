import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DesignWork from "./components/DesignWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

function App() {
  return (
    <div className="font-body">
      <Navbar />
      <FadeIn><Hero /></FadeIn>
      <FadeIn><About /></FadeIn>
      <FadeIn><Skills /></FadeIn>
      <FadeIn><Projects /></FadeIn>
      <FadeIn><DesignWork /></FadeIn>
      <FadeIn><Contact /></FadeIn>
      <Footer />
    </div>
  );
}

export default App;
