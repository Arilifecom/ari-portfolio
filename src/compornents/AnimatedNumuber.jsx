import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { PlaneStarIcon } from "src/compornents/Icons";
import SparklesAnimation from "src/compornents/SparklesAnimation";

const AnimatedNumbers = ({ value, delay = 0, sparkleColor, className }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 10 });
  const isInView = useInView(ref, { once: true });
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value);
        // カウント完了時に星を表示
        setTimeout(() => {
          setShowSparkles(true);

          // 星を 1 秒後に非表示にする
          setTimeout(() => {
            setShowSparkles(false);
          }, 1000);
        }, 200); // アニメーション完了後に発動
      }, delay);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return (
    <div className="relative inline-block">
      <span ref={ref}></span>
      {showSparkles && (
        <SparklesAnimation
          SvgIcon={PlaneStarIcon}
          color={sparkleColor}
          className={className}
        />
      )}
    </div>
  );
};

const AnimatedNumber = ({ className }) => {
  return (
    <div
      className={`xl:min-w-max flex justify-center gap-4 font-mont font-bold md:gap-8 ${className}`}
    >
      <div className="flex flex-col justify-center text-center">
        <span className="inline-block text-4xl md:h-16 md:text-6xl">
          <AnimatedNumbers
            value={4}
            sparkleColor="#45CAE0"
            className={"w-2 md:w-3"}
          />
        </span>
        <p className="md:text-xl font-medium text-dark/75 dark:text-light/75">
          Years of self-Study
        </p>
      </div>
      <div className="flex flex-col justify-center text-center">
        <span className="inline-block text-4xl md:h-16 md:text-6xl">
          <AnimatedNumbers
            value={3}
            delay={900}
            sparkleColor="#F9D84E"
            className={"w-2 md:w-3"}
          />
        </span>
        <p className="md:text-xl font-medium text-dark/75 dark:text-light/75">
          Private project
        </p>
      </div>
      <div className="flex flex-col justify-center text-center">
        <span className="inline-block text-4xl md:h-16 md:text-6xl">
          <AnimatedNumbers
            value={3}
            delay={2000}
            sparkleColor="#FD5E95"
            className={"w-2 md:w-3"}
          />
        </span>
        <p className="md:text-xl font-medium text-dark/75 dark:text-light/75">
          Client projects
        </p>
      </div>
    </div>
  );
};

export default AnimatedNumber;
