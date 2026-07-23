import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

import {
  Backend_skill,
  DevTools,
  Frontend_skill,
  libraries,
} from "../../constants"; // Change path if needed

import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

import {
  slideInFromLeft,
  slideInFromRight,
} from "../../utils/motion"; // Change path if needed

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-6 overflow-hidden py-16 md:py-20 px-4 sm:px-6"
    >
      <SkillText />

      <div className="w-full max-w-7xl flex flex-col items-center gap-5">
        {/* Frontend & Backend */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="w-full lg:w-1/2">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(0.1)}
                  className="rounded-md text-white w-full py-2 px-3 border border-[#0b70eb8b] opacity-90"
                >
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Frontend
                  </span>

                  <div className="flex flex-wrap justify-around items-center gap-5 my-4">
                    {Frontend_skill.map((image, index) => (
                      <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </InView>
          </div>

          <div className="w-full lg:w-1/2">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromRight(0.5)}
                  className="rounded-md text-white w-full py-2 px-3 border border-[#0b70eb8b] opacity-90"
                >
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Backend
                  </span>

                  <div className="flex flex-wrap justify-around items-center gap-5 my-4">
                    {Backend_skill.map((image, index) => (
                      <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </InView>
          </div>
        </div>

        {/* Dev Tools & Libraries */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="w-full lg:w-1/2">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(0)}
                  className="rounded-md text-white w-full py-2 px-3 border border-[#0b70eb8b] opacity-90"
                >
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Dev Tools
                  </span>

                  <div className="flex flex-wrap justify-around items-center gap-5 my-4">
                    {DevTools.map((image, index) => (
                      <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </InView>
          </div>

          <div className="w-full lg:w-1/2">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromRight(0.5)}
                  className="rounded-md text-white w-full py-2 px-3 border border-[#0b70eb8b] opacity-90"
                >
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Libraries
                  </span>

                  <div className="flex flex-wrap justify-around items-center gap-5 my-4">
                    {libraries.map((image, index) => (
                      <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </InView>
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute top-24">
        <div className="absolute flex items-center justify-center w-full h-full bg-cover opacity-30 z-[-10]">
          <video
            className="w-full h-auto "
            preload="none"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video1.mp4"
          />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>

      </div>
    </section>
  );
};

export default Skills;