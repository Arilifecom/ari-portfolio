import Card from "src/compornents/Card";
import { useEffect, useRef, useState } from "react";
import projects from "/public/data/projects.json";
import Link from "next/link";
import Meta from "src/compornents/Meta";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Head from "next/head";
import useScrollRestoration from "src/hooks/useScrollRestoration";
import BackBtnProject from "src/compornents/BackBtnProject";
import PrevButton from "src/compornents/PrevButton";

// スマホ判定用フック
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

// パララックス用フック
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// プロジェクトセクションを作成
function Image() {
  const isMobile = useIsMobile();

  return (
    <>
      {projects.map((project, index) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({ target: ref });
        const y = useParallax(scrollYProgress, 300);

        return (
          <section
            key={index}
            className="relative h-screen flex flex-col items-center justify-center z-0"
          >
            <div ref={ref} className="overflow-hidden snap-center">
              <Link href={`/projects/${project.id}`}>
                <Card
                  className="w-[85%] md:w-[500px] mx-auto p-6 pb-3 mb-5 md:mb-12"
                  title={project.title}
                  imgeUrl={project.ProjectImge}
                  imgeclassName="border-2 rounded-8"
                />
              </Link>
              <ul className="flex flex-wrap gap-1 md:gap-2 md:px-4 md:max-w-xl xl:max-w-2xl mx-auto">
                {project.techStack.map((tec, i) => (
                  <li
                    key={i}
                    className="btn-base text-xs rounded-4 py-2 px-3 bg-[#F3F2F2] text-dark font-medium md:text-base text-left z-0"
                  >
                    {tec}
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ visibility: "hidden" }}
              animate={{ visibility: "visible" }}
              style={isMobile ? {} : { y }}
              className="absolute inline-block top-[16%] md:pt-0 md:top-[calc(50%-25px)] md:left-[calc(50%+120px)]"
            >
              <h2 className="text-[#77B255] font-mont font-black text-4xl md:text-5xl xl:text-6xl -tracking-[2px] ">
                #{project.titleNumber}
              </h2>
              <span className="block font-bold text-center text-sm bg-[#FFD803] rounded-8 p-2 text-dark font-noto">
                {project.siteType}
              </span>
            </motion.div>
          </section>
        );
      })}
    </>
  );
}

export default function Project() {
  useScrollRestoration("scrollY");

  const { scrollYProgress } = useScroll();
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
      <div className="bg-[#FFFAF2] w-full px-5">
        <Image />
      </div>
      <motion.div
        className="bg-[#BAE8E8] h-2 fixed left-0 right-0 bottom-[20px] md:bottom-6 xl:bottom-10 scale-x-0"
        style={{ scaleX }}
      />
      <BackBtnProject />
      <PrevButton className="fixed bottom-12 left-3 px-0 md:px-0 lg:px-0 py-0 z-10" />
    </>
  );
}
