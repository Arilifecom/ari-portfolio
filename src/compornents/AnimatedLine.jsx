import { motion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";

const AnimatedLine = ({ lineRef }) => {
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      setSize({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start center", "end center"],
  });

  return (
    <div
      ref={containerRef}
      className="absolute overflow-hidden xl:static top-0 flex justify-center w-full h-full -z-10 xl:z-0"
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size.width} ${size.height}`}
        className="relative"
      >
        <motion.path
          d={`
            M ${size.width / 2},0
            C ${size.width * 1.5},${size.height * 0.2}  
              ${size.width * -0.5},${size.height * 0.4}  
              ${size.width / 2},${size.height * 0.6}
            C ${size.width * 1.5},${size.height * 0.75}  
              ${size.width * -0.5},${size.height * 0.9}  
              ${size.width / 2},${size.height}
          `}
          stroke="#45CAE0"
          strokeWidth="7"
          fill="transparent"
          strokeLinecap="round"
          style={{
            pathLength: scrollYProgress,
          }}
        />
      </motion.svg>

      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size.width} ${size.height}`}
        className="absolute -z-10"
      >
        <path
          d={`
            M ${size.width / 2},0
            C ${size.width * 1.5},${size.height * 0.2}  
              ${size.width * -0.5},${size.height * 0.4}  
              ${size.width / 2},${size.height * 0.6}
            C ${size.width * 1.5},${size.height * 0.75}  
              ${size.width * -0.5},${size.height * 0.9}  
              ${size.width / 2},${size.height}
          `}
          stroke="#FD5E95"
          strokeWidth="7"
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size.width} ${size.height}`}
        className="absolute top-2 -z-20"
      >
        <path
          d={`
            M ${size.width / 2},0
            C ${size.width * 1.5},${size.height * 0.2}  
              ${size.width * -0.5},${size.height * 0.4}  
              ${size.width / 2},${size.height * 0.6}
            C ${size.width * 1.5},${size.height * 0.75}  
              ${size.width * -0.5},${size.height * 0.9}  
              ${size.width / 2},${size.height}
          `}
          stroke="#272343"
          strokeWidth="7"
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default AnimatedLine;
