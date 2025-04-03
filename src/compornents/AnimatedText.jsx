import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const sigleword = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className }) => {
  return (
    <div className="w-full mx-auto py-4 flex items-center justify-center text-center mb-8 md:mb-16">
      <motion.h2
        className={`inline-block w-full text-dark font-bold capitalize font-mont text-5xl md:text-6xl lg:text-7xl ${className}`}
        variants={quote}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block mb-2 md:mb-3"
            variants={sigleword}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

export default AnimatedText;
