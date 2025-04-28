import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  AriIcon,
  BlueStarIcon,
  ColorFigmaIcon,
  CrackerIcon,
  CssIcon,
  GreenCircleIcon,
  GreenHookIcon,
  GreenWaveIcon,
  HtmlIcon,
  JavaScriptIcon,
  NextJsIcon,
  PinkStarIcon,
  PurpleCircleIcon,
  PurpleLineIcon,
  PurpleWaveIcon,
  TailwindIcon,
  YellowCircleIcon,
  YellowStarIcon,
} from "src/compornents/Icons";

const AnimatIcons = [
  <PurpleLineIcon className="w-10 md:w-16 xl:w-20" />,
  <GreenHookIcon className="w-4 md:w-6 xl:w-10" />,
  <PurpleWaveIcon className="w-6 md:w-7 xl:w-8" />,
  <GreenWaveIcon className="w-6 md:w-8 xl:w-12" />,
  <GreenCircleIcon className="w-8 md:w-9 xl:w-10" />,
  <YellowCircleIcon className="w-8 md:w-10 xl:w-12" />,
  <PurpleCircleIcon className="w-5 md:w-6 xl:w-6" />,
  <PinkStarIcon className="w-8 md:w-16 xl:w-20" />,
  <BlueStarIcon className="w-6 xl:w-6" />,
  <YellowStarIcon className="w-7 md:w-14 xl:w-20" />,
  <ColorFigmaIcon className="w-12 md:w-14 xl:w-16" />,
  <AriIcon className="w-16 md:w-20 xl:w-28" />,
  <CssIcon className="w-16 md:w-16 xl:w-16" />,
  <HtmlIcon className="w-14 md:w-16 xl:w-18" />,
  <JavaScriptIcon className="w-16 md:w-20 xl:w-20" />,
  <TailwindIcon className="w-16 md:w-16 xl:w-20" />,
  <NextJsIcon className="w-16 md:w-20 xl:w-20" />,
];

const AnimatedCrackerPop = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // アニメーションを設置したいコンテナーを取得
  const getRandomPosition = () => {
    const container = document.getElementById("container");
    const { width, height } = container.getBoundingClientRect();

    // コンテナサイズ内でランダムな数値を取得
    const randomX = randomNumberBetween(0, width - 64); // 幅内でランダム
    const randomY = randomNumberBetween(0, height - 64); // 高さ内でランダム

    return { x: randomX, y: randomY };
  };

  useEffect(() => {
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
  }, [animationComplete]);

  return (
    <>
      <motion.div
        initial={{
          x: "-500px",
          y: "500px",
          opacity: 0,
        }}
        animate={{
          x: 10,
          y: 10,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 1,
        }}
        className="absolute bottom-0 -left-10 md:left-0 xl:-left-20"
        onAnimationComplete={() => setAnimationComplete(true)}
      >
        <CrackerIcon className="w-36 md:w-52 xl:w-60" />
      </motion.div>

      {animationComplete && (
        <>
          {AnimatIcons.map((Icon, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                x: getRandomPosition().x,
                y: -getRandomPosition().y,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 1,
              }}
              className="absolute bottom-0 left-0"
            >
              {Icon}
            </motion.div>
          ))}
        </>
      )}
    </>
  );
};

export default AnimatedCrackerPop;
