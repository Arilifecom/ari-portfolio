import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  BlueStarIcon,
  GreenCircleIcon,
  GreenWaveIcon,
  PinkStarIcon,
  PurpleWaveIcon,
  YellowCircleIcon,
} from "src/compornents/Icons";

const AnimatedLine = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight - 120,
        });
      }
    };

    handleResize(); // 初回呼び出し
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (pathRef.current) {
      const path = pathRef.current;
      const totalLength = path.getTotalLength();
      const point = path.getPointAtLength(totalLength * latest);

      setPoint({ x: point.x, y: point.y });
    }
  });

  return (
    <div
      ref={containerRef}
      className="absolute xl:static top-0 flex justify-center w-full h-full -z-10 xl:z-0"
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size.width} ${size.height}`}
        className="relative"
      >
        {/* ３番目 */}
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
          transform="translate(2, 8)"
          stroke="#272343"
          strokeWidth="8"
          fill="transparent"
          strokeLinecap="round"
        />

        {/* ２番目 */}
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

        {/* 1番上 */}
        <motion.path
          ref={pathRef}
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

      <div
        className="absolute"
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 73 77"
          style={{
            transform: `translate(${point.x}px, ${point.y}px)`,
            opacity: scrollYProgress.get() > 0.01 ? 1 : 0, // ← ここ追加
            transition: "opacity 0.5s ease",
          }}
        >
          <path
            fill="#FFD803"
            d="M35.538 74.744c18.645 0 33.76-15.115 33.76-33.76 0-18.646-15.115-33.76-33.76-33.76-18.646 0-33.76 15.114-33.76 33.76 0 18.645 15.114 33.76 33.76 33.76Z"
          />
          <path
            fill="#272343"
            fillRule="evenodd"
            d="M35.538 9C17.873 9 3.553 23.318 3.553 40.982s14.32 31.984 31.984 31.984S67.52 58.647 67.52 40.983 53.201 9 35.538 9ZM0 40.982C0 21.356 15.91 5.446 35.538 5.446c19.626 0 35.537 15.91 35.537 35.537s-15.91 35.538-35.538 35.538C15.912 76.52 0 60.61 0 40.983Z"
            clipRule="evenodd"
          />
          <path
            fill="#FFD803"
            d="M33.638 36.455c4.065-3.945 7.502-1.644 8.712 0Z"
          />
          <path
            fill="#272343"
            fillRule="evenodd"
            d="M38.744 36.105c-.852-.16-2.163-.02-3.859 1.626L32.41 35.18c2.37-2.3 4.81-2.98 6.996-2.566 2.064.39 3.584 1.7 4.385 2.788l-2.862 2.107c-.41-.557-1.212-1.22-2.185-1.404Z"
            clipRule="evenodd"
          />
          <path
            fill="#E3F6F5"
            d="M54.303 52.79c7.218 0 13.069-5.85 13.069-13.068S61.52 26.653 54.303 26.653c-7.217 0-13.068 5.851-13.068 13.069 0 7.217 5.85 13.068 13.068 13.068Z"
          />
          <path
            fill="#272343"
            fillRule="evenodd"
            d="M54.322 28.43c-6.236 0-11.292 5.055-11.292 11.291 0 6.237 5.056 11.292 11.292 11.292s11.292-5.055 11.292-11.291c0-6.237-5.056-11.292-11.292-11.292ZM39.477 39.72c0-8.198 6.646-14.845 14.845-14.845 8.199 0 14.846 6.646 14.846 14.845 0 8.2-6.647 14.846-14.846 14.846S39.477 47.92 39.477 39.721Z"
            clipRule="evenodd"
          />
          <path
            fill="#E3F6F5"
            d="M21.638 52.79c7.218 0 13.07-5.85 13.07-13.068s-5.852-13.069-13.07-13.069c-7.217 0-13.068 5.851-13.068 13.069 0 7.217 5.85 13.068 13.068 13.068Z"
          />
          <path
            fill="#272343"
            fillRule="evenodd"
            d="M21.66 28.43c-6.236 0-11.291 5.055-11.291 11.291 0 6.237 5.055 11.292 11.291 11.292 6.237 0 11.292-5.055 11.292-11.291 0-6.237-5.055-11.292-11.292-11.292ZM6.815 39.72c0-8.198 6.646-14.845 14.845-14.845 8.2 0 14.846 6.646 14.846 14.845 0 8.2-6.647 14.846-14.846 14.846S6.815 47.92 6.815 39.721Z"
            clipRule="evenodd"
          />
          <path
            fill="#FFD803"
            d="M7.484 40.81c-1.644-.725-3.945-2.613 0-4.355Z"
          />
          <path
            fill="#272343"
            fillRule="evenodd"
            d="M7.341 38.678c.242.192.556.373.86.507l-1.435 3.25a7.628 7.628 0 0 1-1.636-.976c-.504-.4-1.105-1.005-1.41-1.831-.349-.949-.23-1.991.428-2.901.581-.804 1.509-1.408 2.618-1.898l1.435 3.25a5.232 5.232 0 0 0-.948.525l.088.074Z"
            clipRule="evenodd"
          />
          <path
            fill="#FFD803"
            d="M68.473 40.81c1.643-.725 3.944-2.613 0-4.355Z"
          />
          <path
            fill="#272343"
            fillRule="evenodd"
            d="M70.825 41.46a7.63 7.63 0 0 1-1.636.976l-1.436-3.25c.304-.135.618-.316.86-.508.033-.026.063-.051.089-.074a5.233 5.233 0 0 0-.949-.524l1.436-3.251c1.11.49 2.037 1.094 2.617 1.898.659.91.778 1.952.428 2.901-.304.826-.905 1.431-1.409 1.831Z"
            clipRule="evenodd"
          />
          <path
            fill="#FFD803"
            d="M36.626 14.844c.358 2.111 2.283 5.896 7.115 4.146Z"
          />
          <path
            fill="#272343"
            fillRule="evenodd"
            d="M37.336 19.702c-1.53-1.342-2.236-3.243-2.46-4.56l3.504-.594c.135.795.57 1.842 1.3 2.483.594.52 1.587.967 3.458.29l1.21 3.341c-2.962 1.073-5.346.501-7.012-.96Z"
            clipRule="evenodd"
          />
          <path
            fill="#FFD803"
            d="M37.706 19.202c6.97-8.345 10.165-6.954 10.89-5.216Z"
          />
          <path
            fill="#272343"
            fillRule="evenodd"
            d="M45.97 14.527c-1.213.33-3.46 1.708-6.889 5.813l-2.727-2.278c3.541-4.24 6.377-6.338 8.685-6.965 1.205-.327 2.34-.27 3.309.194a3.869 3.869 0 0 1 1.9 2.01l-3.28 1.37a.316.316 0 0 0-.155-.175c-.053-.025-.288-.12-.843.031Z"
            clipRule="evenodd"
          />
          <path
            fill="#BAE8E8"
            d="M55.395 19.194c-2.99.12-8.969-1.008-8.969-6.478 7.175-.575 10.25 4.079 10.89 6.478h-1.921Z"
          />
          <path
            fill="#272343"
            fillRule="evenodd"
            d="M48.553 14.483c.404.894 1.13 1.52 2.044 1.984 1.188.605 2.62.878 3.808.942-1.085-1.35-2.937-2.687-5.852-2.926Zm-2.268-3.538c8.203-.658 11.936 4.741 12.75 7.79l.597 2.235H55.43c-1.695.063-4.242-.215-6.445-1.335-2.315-1.178-4.334-3.363-4.334-6.919v-1.64l1.634-.13Z"
            clipRule="evenodd"
          />
          <path
            fill="#BAE8E8"
            d="M40.166 12.66c-2.99.12-8.968-1.008-8.968-6.478 7.175-.576 10.25 4.078 10.89 6.477h-1.922Z"
          />
          <path
            fill="#272343"
            fillRule="evenodd"
            d="M33.327 7.95c.404.894 1.13 1.52 2.043 1.984 1.189.605 2.621.877 3.809.942-1.085-1.35-2.938-2.687-5.852-2.927ZM31.06 4.411c8.202-.658 11.935 4.74 12.75 7.79l.596 2.235h-4.201c-1.695.063-4.242-.215-6.445-1.336-2.315-1.177-4.335-3.362-4.335-6.918v-1.64l1.635-.131Z"
            clipRule="evenodd"
          />
          <path
            fill="#BAE8E8"
            d="M53.6 1.791c-2.39-.2-7.174 1.68-7.174 10.795 5.74.96 8.2-6.797 8.712-10.795h-1.537Z"
          />
          <path
            fill="#272343"
            fillRule="evenodd"
            d="M53.67.014c-1.699-.117-3.988.494-5.844 2.461-1.897 2.01-3.175 5.252-3.175 10.11v1.505l1.483.248c3.916.655 6.566-1.772 8.132-4.374 1.565-2.598 2.36-5.798 2.636-7.947L57.16.014h-3.49Zm-.667 3.552c-.709.064-1.7.402-2.593 1.348-.925.98-1.865 2.749-2.131 5.851 1.124-.312 2.088-1.214 2.943-2.634.831-1.381 1.416-3.055 1.781-4.565Z"
            clipRule="evenodd"
          />
          <path
            fill="#000"
            fillRule="evenodd"
            d="M30.227 53.75c.736 0 1.333.597 1.333 1.333 0 2.008.74 3.416 1.773 4.335 1.06.941 2.509 1.44 4.001 1.44 1.493 0 2.943-.499 4.002-1.44 1.034-.92 1.773-2.327 1.773-4.335a1.333 1.333 0 1 1 2.666 0c0 2.731-1.038 4.877-2.669 6.327-1.606 1.428-3.71 2.114-5.772 2.114-2.06 0-4.165-.686-5.771-2.114-1.631-1.45-2.669-3.596-2.669-6.327 0-.736.597-1.332 1.333-1.332Z"
            clipRule="evenodd"
          />
        </svg>
        <BlueStarIcon className="w-8 xl:w-10 absolute top-[0%] right-[8%]" />
        <GreenCircleIcon className="w-8 xl:w-16 absolute top-[18%] left-[30%]" />
        <PurpleWaveIcon className="w-8 xl:w-12 absolute top-[38%] right-3" />
        <YellowCircleIcon className="w-12 xl:w-10 absolute top-[58%] left-3" />
        <PinkStarIcon className="w-10 xl:w-18 absolute top-[77%] left-[20%]" />
        <BlueStarIcon className="w-6 xl:w-16 absolute top-[79%] left-[40%]" />
        <GreenWaveIcon className="w-10 xl:w-18 absolute bottom-[10%] right-6" />
        <YellowCircleIcon className="w-8 xl:w-12 absolute bottom-[0%] left-4" />
      </div>
    </div>
  );
};

export default AnimatedLine;
