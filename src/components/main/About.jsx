import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { InView } from "react-intersection-observer";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-5 sm:px-8 lg:px-12 py-20"
    >
      {/* Background Video (Desktop Only) */}
<div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 overflow-hidden">        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-30 md:opacity-40 scale-125 md:scale-100"
          src="/encryption.mp4"
        />
        <div className="absolute inset-0 bg-black/30"></div>

      </div>

      {/* Heading */}
      <div className="relative z-20 mb-8 md:mb-10">
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromTop}
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-center text-gray-200"
            >
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                {" "}
                Me
              </span>
            </motion.div>
          )}
        </InView>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-5xl">
        {/* Profile Image */}
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(0.5)}
              className="rounded-full overflow-hidden border-[5px] border-[#0b70eb8b] bg-gradient-to-r from-blue-600 to-cyan-500 p-1"
            >
              <img
                src="/newphoto.jpg"
                alt="profile"
                className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full object-cover"
              />
            </motion.div>
          )}
        </InView>

        {/* Name */}
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromRight(0.5)}
              className="Welcome-box mt-6 px-5 py-2 border border-[#0b70eb8b] opacity-90"
            >
              <h1 className="Welcome-text text-lg sm:text-xl font-bold text-gray-200">
                Bhavesh Wasnik
              </h1>
            </motion.div>
          )}
        </InView>

        {/* About Text */}
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromBottom}
              className="Welcome-box w-full max-w-4xl mt-5 px-5 sm:px-7 py-5 border border-[#0b70eb8b] opacity-90 rounded-xl"
            >
              <p className="Welcome-text text-sm sm:text-base md:text-lg leading-7 text-justify text-gray-200">
                I am a BCA student and a passionate Full Stack MERN Developer
                with expertise in React.js, Next.js, JavaScript (ES6+),
                Node.js, Express.js, MongoDB, Tailwind CSS, HTML5, CSS3,
                REST APIs, Git, GitHub, and Postman. I also have a strong
                foundation in C, C++, Python, MySQL, and core computer
                science concepts including Data Structures & Algorithms,
                Object-Oriented Programming, DBMS, and Operating Systems.
                <br />
                <br />
                I built <strong>Mac AI – Speak Smart, Live Smart</strong>, an
                AI-powered voice assistant that strengthened my full-stack
                development skills. I hold C/C++ Programming and Data Analyst
                (OneRoadmap) certifications and have participated in the
                Innovex AI Hackathon. I am committed to continuous learning,
                solving real-world problems, and building impactful,
                user-focused software solutions.
              </p>
            </motion.div>
          )}
        </InView>

        {/* Bottom Quote */}
        <div className="relative z-20 mt-10">
          <p className="cursive text-base sm:text-lg md:text-xl font-medium text-center text-gray-300 px-4">
            Shaping Tomorrow with Code and Creativity
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;