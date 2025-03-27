import { stagger, useAnimate } from "framer-motion";

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function AnimatedBtn({ text = "", className }) {
  const [scope, animate] = useAnimate();
  const letters = text.split(""); 

  const onButtonClick = () => {
    const sparkles = Array.from({ length: 10 });
    const sparklesAnimation = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: randomNumberBetween(-80, 80),
        y: randomNumberBetween(-80, 80),
        scale: randomNumberBetween(1.8, 2),
        opacity: 1,
      },
      {
        duration: 0.4,
        at: "<",
      },
    ]);

    const sparklesFadeOut = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.3,
        at: "<",
      },
    ]);

    const sparklesReset = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.000001,
      },
    ]);

    animate([
      ...sparklesReset,
      [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ...sparklesFadeOut,
    ]);
  };

  return (
    <div ref={scope} className={className}>
      <button
        onClick={onButtonClick}
        className="relative rounded-full border-2 border-dark bg-dark px-6 py-2 text-lg md:text-xl text-light font-bold transition-colors hover:bg-bg_primary hover:text-dark"
      >
        <span className="sr-only">{text}</span>
        <span className="block h-8 overflow-hidden font-mont" aria-hidden>
          {letters.map((letter, index) => (
            <span
              data-letter={letter}
              className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
              key={`${letter}-${index}`}
            >
              {letter}
            </span>
          ))}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 block"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <svg
              className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
              key={index}
              viewBox="0 0 122 117"
              width="16"
              height="16"
            >
              <path
                d="M66.39,4,82.11,40.76,122,44.33a3.2,3.2,0,0,1,1.83,5.59h0L93.64,76.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L63.44,98.19,29.09,118.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L3.09,49.92A3.2,3.2,0,0,1,5,44.32l39.74-3.56L60.49,4a3.2,3.2,0,0,1,5.9,0Z"
                fill="rgba(0, 0, 0, 0.5)" 
              />
              <path
                className="fill-blue"
                d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
              />
            </svg>
          ))}
        </span>
      </button>
    </div>
  );
}

export default AnimatedBtn;