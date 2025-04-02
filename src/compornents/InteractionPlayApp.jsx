import { motion } from "framer-motion";
import {
  ArimixIcon,
  BlueStarIcon,
  PinkStarIcon,
  YellowStarIcon,
} from "src/compornents/Icons";

const action1 = {
  animate: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 360, 0],
    x: [0, 180, 260, -260, 0],
    y: [0, 18, 26, -26, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      // repeatDelay: 1,
    },
  },
};
const action2 = {
  animate: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 360, 0],
    x: [0, 180, 260, -260, 0],
    y: [0, 12, 26, -26, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1.2,
    },
  },
};
const action3 = {
  animate: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 360, 0],
    x: [0, 180, 260, -260, 0],
    y: [0, 20, 26, -26, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1.3,
    },
  },
};
const action4 = {
  animate: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 360, 0],
    x: [10, 180, 260, -260, 0],
    y: [10, 18, 26, -26, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1.4,
    },
  },
};

const InteractionPlayApp = () => {
  return (
    <>
      {/* action1 */}
      <motion.svg
        variants={action1}
        animate="animate"
        className="absolute top-[25%] w-24 md:w-32 z-10"
      >
        <ArimixIcon />
      </motion.svg>

      {/* action2 */}
      <motion.svg
        variants={action2}
        animate="animate"
        className="absolute top-[25%] w-14 md:w-22"
      >
        <BlueStarIcon />
      </motion.svg>

      {/* action3 */}
      <motion.svg
        variants={action3}
        animate="animate"
        className="absolute top-[25%] w-4 md:w-8"
      >
        <PinkStarIcon />
      </motion.svg>

      {/* action4 */}
      <motion.svg
        variants={action4}
        animate="animate"
        className="absolute top-[25%] w-6 md:w-14"
      >
        <YellowStarIcon />
      </motion.svg>
    </>
  );
};

export default InteractionPlayApp;
