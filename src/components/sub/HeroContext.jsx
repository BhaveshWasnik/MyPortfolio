import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion"; // Change the path if needed
import { BsStars } from "react-icons/bs";
import { InView } from "react-intersection-observer";

const HeroContent = () => {
  return (
    /*{the box section}*/

    <InView triggerOnce={false}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="
flex
flex-row
items-center
justify-between
gap-4
sm:gap-6
lg:gap-8
w-full
max-w-7xl
mx-auto
px-4
sm:px-8
lg:px-16
mt-16
sm:mt-20
lg:mt-32
z-20
"   >
          <div className="w-[65%] sm:w-[60%] lg:w-1/2 flex flex-col gap-4 sm:gap-5">
            <div
              className="
    grid
    grid-cols-2
    gap-2
    justify-items-center
    sm:flex
    sm:flex-wrap
    sm:justify-start
    sm:gap-5
  "
            >        <InView triggerOnce={false}>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={slideInFromTop(0.2)}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 350,
                        damping: 18,
                      },
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="
    Welcome-box
    py-1
    px-2
    sm:py-2
    sm:px-3
    border
    border-[#0b70eb8b]
    opacity-90
    w-fit
    cursor-pointer
    transition-all
    duration-300
    hover:border-blue-400
    hover:shadow-[0_0_25px_rgba(11,112,235,0.35)]
    hover:bg-[#0b70eb]/10
    backdrop-blur-md
  "
                  >
                    <BsStars className="text-[#4b8dff] mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" />
                    <h1 className="text-xs sm:text-sm md:text-base font-medium text-white">
                      Full Stack Developer
                    </h1>
                  </motion.div>
                )}
              </InView>

              <InView triggerOnce={false}>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={slideInFromTop(0.2)}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 350,
                        damping: 18,
                      },
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="
    Welcome-box
    py-1
    px-2
    sm:py-2
    sm:px-3
    border
    border-[#0b70eb8b]
    opacity-90
    w-fit
    cursor-pointer
    transition-all
    duration-300
    hover:border-blue-400
    hover:shadow-[0_0_25px_rgba(11,112,235,0.35)]
    hover:bg-[#0b70eb]/10
    backdrop-blur-md
  "
                  >
                    <BsStars className="text-[#4b8dff] mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" />
                    <h1 className="text-xs sm:text-sm md:text-base font-medium text-white">             
                        Tech Innovator
                    </h1>
                  </motion.div>
                )}
              </InView>

              <InView triggerOnce={false}>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={slideInFromTop(0.2)}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 350,
                        damping: 18,
                      },
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="
    Welcome-box
    py-1
    px-2
    sm:py-2
    sm:px-3
    border
    border-[#0b70eb8b]
    opacity-90
    w-fit
    cursor-pointer
    transition-all
    duration-300
    hover:border-blue-400
    hover:shadow-[0_0_25px_rgba(11,112,235,0.35)]
    hover:bg-[#0b70eb]/10
    backdrop-blur-md
  "
                  >

                    <BsStars className="text-[#4b8dff] mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" />
                    <h1 className="text-xs sm:text-sm md:text-base font-medium text-white">       
                            Team Lead
                    </h1>
                  </motion.div>
                )}
              </InView>
            </div>

            <InView triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "visi"}
                  variants={slideInFromLeft(0.2)}
                  className="
w-full
max-w-xl
text-left
text-xl
xs:text-3xl
sm:text-3xl
md:text-4xl
lg:text-5xl
font-medium
leading-snug
break-words
text-gray-200
will-change-transform



"    >
                  <span>
                    Coding
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                      {" "}
                      Dreams{" "}
                    </span>
                    into
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                      {" "}
                      Reality{" "}
                    </span>
                    one line at a time
                  </span>
                </motion.div>
              )}
            </InView>

            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(0.8)}
                  className="
w-full
max-w-xl
text-sm
sm:text-base
text-gray-400
my-5
z-30
"                >
                  <ul className="list-disc pl-5 pr-2 space-y-2 break-words">
                    <li>Participated in Innovex-AI Hackathon 2026.</li>
                    <li>Certified in C/C++ Programming Languages.</li>
                    <li>Worked at Flipkart as a Digital Warehousing Intern.</li>
                    <li>Built an AI-powerd voice assistant using the MERN Stack and Gemini API.</li>
                  </ul>
                </motion.div>
              )}
            </InView>

            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.a
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(1)}
                  href="#about"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="
    py-2.5
    px-6
    button-primary
    text-center
    text-white
    rounded-lg
    cursor-pointer
    max-w-[200px]
    border
    border-blue-500/30
    shadow-lg
    shadow-blue-500/20
    hover:shadow-blue-500/50
    hover:border-blue-400
    transition-all
    duration-300
    z-40
  "
                >
                  Learn More →
                </motion.a>)}
            </InView>
          </div>

          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInFromRight(0.8)}
                className="
   w-1/2
    lg:w-1/2
    flex
    justify-end
    items-center
    flex-shrink-0
    z-40
  "              >
                <img
                  src="/mainIconsdark1.png"
                  alt="work icons"
                  width={650}
                  height={650}
                  className="
      w-full max-w-[300px] sm:max-w-[360px] md:max-w-[450px]
      lg:max-w-[550px]
      xl:max-w-[650px]
      h-auto
      object-contain
    "               />
              </motion.div>
            )}
          </InView>
        </motion.div>
      )}
    </InView>
  );
};

export default HeroContent;