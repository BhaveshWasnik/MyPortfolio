import React from "react";
import HeroContent from "../sub/HeroContext";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen lg:h-screen overflow-x-hidden" id="home">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Blue Glow */}
      <div className="absolute inset-0 bg-[#0000008b] mix-blend-screen opacity-20"></div>

      {/* Hero */}
      <div className="relative z-10 flex items-center h-full">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;