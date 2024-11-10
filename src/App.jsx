import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticleBackground from "./components/particle";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
