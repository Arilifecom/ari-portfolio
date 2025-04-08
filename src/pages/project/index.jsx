import Card from "src/compornents/Card";
import CommonLayout from "src/compornents/layout/CommonLayout";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const projects = [
  {
    titleNumber: "001",
    title: "Ari ホームページ制作",
    ProjectImge: "/arihomepage.png",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAPP",
      "PHP",
      "Composer",
      "Bootstrap",
      "Figma",
      "GitHub Actions",
    ],
  },
  {
    titleNumber: "002",
    title: "Saving-UP",
    ProjectImge: "/savingup.png",
    techStack: ["HTML", "Next", "JavaScript", "Tailwind", "Figma", "Vercel"],
  },
];

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
        <div className=" bg-light w-full z-0 border-t-4 border-solid border-dark px-5">
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
                  className="relative flex flex-col items-center justify-center pt-16 pb-40 md:py-28"
                >
                  <div>
                    <a ref={liRef} href="#">
                      <Card
                        className="max-w-[600px] mx-auto mb-12"
                        title={project.title}
                        imgeUrl={project.ProjectImge}
                        imgeclassName="border-2"
                      />
                      <motion.h2
                        // Hide until scroll progress is measured
                        className="text-pink font-mont font-bold text-4xl md:text-6xl xl:text-7xl inline-block m-0 absolute top-[60%] left-3/4"
                        style={{ y }}
                      >
                        #{project.titleNumber}
                      </motion.h2>
                    </a>
                    <ul className="flex flex-wrap gap-2 px-4 md:max-w-xl xl:max-w-2xl mx-auto">
                      {project.techStack.map((tec, i) => (
                        <li key={i} className="btn-base">
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
