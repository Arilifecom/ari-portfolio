import { motion } from 'framer-motion';  // framer-motionからmotionをインポート

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const SparklesAnimation = ({ SvgIcon, color, className }) => {
  const sparkles = Array.from({ length: 8 });

  return (
    <div>
      <span aria-hidden className="pointer-events-none absolute inset-0 block -z-10">
        {sparkles.map((_, index) => (
          <motion.div
            key={index}
            className={`absolute opacity-0 sparkle-${index} ${className}`}
            initial={{ opacity: 0, scale: 0 }} // 初期状態で透明、縮小状態
            animate={{
              opacity: 1,
              scale: randomNumberBetween(1.8, 2),
              x: randomNumberBetween(-80, 80),
              y: randomNumberBetween(-30, 0),
            }} // ランダムに動く
            transition={{
              duration: 0.6,
              ease: "easeOut", // イージングを設定してスムーズにアニメーション
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: { duration: 0.3, ease: "easeIn" },
            }} // アニメーション後にフェードアウト
          >
            <SvgIcon fill={color} />
          </motion.div>
        ))}
      </span>
    </div>
  );
};

export default SparklesAnimation;
