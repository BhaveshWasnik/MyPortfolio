import React from "react";
import "./index.css";

import Navbar from "./components/main/Navbar";
import StarsCanvas from "./components/main/StarBackground";
import Footer from "./components/main/Footer";

import Hero from "./components/main/Hero";
import About from "./components/main/About";
import Skills from "./components/main/Skills";
import Projects from "./components/main/Projects";

function App() {
  return (
    <div className="relative bg-[#000000] overflow-x-hidden max-w-[1855px] mx-auto min-h-screen">
      <StarsCanvas />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <div className="relative z-10"> <Footer /></div>

    </div>
  );
}

export default App;