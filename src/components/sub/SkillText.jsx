import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
} from "../../utils/motion"; // Change the path if needed
import { InView } from "react-intersection-observer";

const SkillText = () => {
  return (
    <div className="w-full h-auto pt-20 flex flex-col items-center justify-center">
      <InView triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromTop}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-center text-gray-200"
          >
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              {" "}
              Skills{" "}
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
            variants={slideInFromLeft(0.5)}
            className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
          >
            Never miss a task, deadline or idea
          </motion.div>
        )}
      </InView>
    </div>
  );
};

export default SkillText;