import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
 
export default function App() {
  return (
    <div style={{ margin: 0, padding: 0, background: "#05050F" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
 