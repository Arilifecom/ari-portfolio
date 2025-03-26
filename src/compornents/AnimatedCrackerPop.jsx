import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AriIcon, BlueStarIcon, ColorFigmaIcon, CrackerIcon, GreenCircleIcon, GreenHookIcon, GreenWaveIcon, PinkStarIcon, PurpleCircleIcon, PurpleLineIcon, PurpleWaveIcon, YellowCircleIcon, YellowStarIcon } from 'src/compornents/Icons';

const AnimatIcons = [
  <PurpleLineIcon className="w-12 md:w-20" />,
  <GreenHookIcon className="w-12 md:w-10" />,
  <PurpleWaveIcon className="w-12 md:w-16" />,
  <GreenWaveIcon className="w-12 md:w-12" />,
  <GreenCircleIcon className="w-12 md:w-10" />,
  <YellowCircleIcon className="w-12 md:w-12" />,
  <PurpleCircleIcon className="w-12 md:w-6" />,
  <PinkStarIcon className="w-12 md:w-20" />,
  <BlueStarIcon className="w-12 md:w-20" />,
  <YellowStarIcon className="w-12 md:w-20" />,
  <ColorFigmaIcon className="w-12 md:w-16" />,
  <AriIcon className="w-12 md:w-28" />
]

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
    const randomX = randomNumberBetween(80, width - 80);  // 幅内でランダム
    const randomY = randomNumberBetween(80, height -80); // 高さ内でランダム
    return { x: randomX, y: randomY };
  };

  useEffect(() => {
    const timer = setTimeout(() => {      
    }, 1000); 
    return () => clearTimeout(timer)
  },[animationComplete])

  return(
    <>
    <motion.div
      initial={{ 
        x: "-500px",
        y: "500px",
        opacity:0,
      }}
      animate={{ 
        x: 10,
        y: 10,
        opacity:1
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1,
      }}
       className="absolute bottom-0 -left-10 md:-left-20"
       onAnimationComplete={() => setAnimationComplete(true)}
    >
      <CrackerIcon  className="w-40 md:w-60"/>
    </motion.div>

    { animationComplete && (
      <div>
      { AnimatIcons.map(( Icon, index) =>(
        <motion.div
          key={index}
          initial={{
            opacity:0 }}
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
     </div>
    )}
    </>
  )
}

export default AnimatedCrackerPop