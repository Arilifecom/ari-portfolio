import Card from "src/compornents/Card";
import { useRef } from "react";
import projects from "/public/data/projects.json";
import Link from "next/link";
import BackToTopButton from "src/compornents/BackToTopButton";
import Meta from "src/compornents/Meta";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Head from "next/head";
import useScrollRestoration from "src/hooks/useScrollRestoration";
import BackBtnProject from "src/compornents/BackBtnProject";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image() {
  return (
    <>
      {projects.map((project, index) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
          target: ref,
        });
        const y = useParallax(scrollYProgress, 300);

        return (
          <section
            key={index}
            className="relative h-screen flex flex-col items-center justify-center snap-center"
          >
            <div ref={ref} className="flex flex-col">
              <Link href={`/projects/${project.id}`}>
                <Card
                  className="max-w-[500px] mx-auto mb-12"
                  title={project.title}
                  imgeUrl={project.ProjectImge}
                  imgeclassName="border-2 rounded-8"
                />
                <motion.div
                  style={{ y }}
                  className="absolute inline-block top-10  md:top-[calc(50%-25px)] md:left-[calc(50%+120px)]"
                >
                  <h2 className="text-[#77B255] font-mont font-black text-4xl md:text-5xl xl:text-6xl -tracking-[2px] ">
                    #{project.titleNumber}
                  </h2>
                  <span className="block font-bold text-center text-sm bg-[#FFD803] rounded-8 p-2 text-dark font-noto">
                    {project.siteType}
                  </span>
                </motion.div>
              </Link>
              <ul className="flex flex-wrap gap-2 px-4 md:max-w-xl xl:max-w-2xl mx-auto">
                {project.techStack.map((tec, i) => (
                  <li
                    key={i}
                    className="btn-base text-sm font-medium md:text-base text-left"
                  >
                    {tec}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default function Project() {
  useScrollRestoration("scrollY");

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Meta
        title={"プロジェクト一覧"}
        description={
          "これまで制作してきたプロジェクトの一覧です。新しい技術やツールを学びながら完成させた作品を紹介しています。"
        }
      />
      <Head>
        <style>{`html { scroll-snap-type: y mandatory; }`}</style>
      </Head>
      <div className="bg-[#FFFAF2] w-full z-0 px-5 snap-y snap-mandatory">
        <Image />
      </div>
      <motion.div
        className="bg-[#BAE8E8] h-2 fixed left-0 right-0 bottom-[20px] md:bottom-6 xl:bottom-10 scale-x-0"
        style={{ scaleX }}
      />
      <BackToTopButton />
      <BackBtnProject />
    </>
  );
}
