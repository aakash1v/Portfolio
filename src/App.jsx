import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

