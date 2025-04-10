import Card from "src/compornents/Card";
import CommonLayout from "src/compornents/layout/CommonLayout";
import { useEffect, useRef } from "react";
import projects from "/public/data/projects.json";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";

export default function Project() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "100% 100%"],
  });

  const rawScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scaleX = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = rawScale.on("change", (v) => {
      scaleX.set(v >= 1 ? 0 : v);
    });
    return () => unsubscribe();
  }, [rawScale, scaleX]);

  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  return (
    <>
      <CommonLayout>
        <div className=" bg-light w-full z-0 border-t-4 border-solid border-dark px-5 pb-24 lg:pb-64">
          <div ref={containerRef}>
            {projects.map((project, index) => {
              const liRef = useRef(null);
              const { scrollYProgress } = useScroll({
                target: liRef,
              });

              const y = useParallax(scrollYProgress, 300);

              return (
                <section
                  key={index}
                  className="relative flex flex-col items-center justify-center pt-16 pb-32 md:pb-24"
                >
                  <div>
                    <Link ref={liRef} href={`/projects/${project.id}`}>
                      <Card
                        className="max-w-[400px] mx-auto mb-12"
                        title={project.title}
                        imgeUrl={project.ProjectImge}
                        imgeclassName="border-2"
                      />
                      <motion.div
                        style={{ y }}
                        className="absolute top-[50%] left-[60%]"
                      >
                        <h2
                          // Hide until scroll progress is measured
                          className=" text-pink font-mont font-black text-5xl md:text-6xl xl:text-7xl"
                        >
                          #{project.titleNumber}
                        </h2>
                        <span className="block title-large-bk text-sm bg-[#FFD803] rounded-8 p-2 text-dark font-noto">
                          {project.siteType}
                        </span>
                      </motion.div>
                    </Link>
                    <ul className="flex flex-wrap gap-2 px-4 md:max-w-xl xl:max-w-2xl mx-auto">
                      {project.techStack.map((tec, i) => (
                        <li
                          key={i}
                          className="btn-base text-sm md:text-base text-left"
                        >
                          {tec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              );
            })}
          </div>
          <motion.div
            className="bg-blue h-5 fixed left-0 right-0 bottom-24 md:bottom-6 xl:bottom-10 scale-x-0"
            style={{ scaleX }}
          />
        </div>
      </CommonLayout>
    </>
  );
}
