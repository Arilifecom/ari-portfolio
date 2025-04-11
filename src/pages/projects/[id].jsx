import React from "react";
import MainLayout from "src/compornents/layout/MainLayout";
import projects from "/public/data/projects.json";
import { motion } from "framer-motion";
import Footer from "src/compornents/Footer";
import {
  AriHelloIcon,
  ChallengeIcon,
  PointIcon,
  WhyIcon,
} from "src/compornents/Icons";
import Card from "src/compornents/Card";

// 全てのパスを事前に生成
export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));
  return {
    paths,
    fallback: false, // 404を返す
  };
}

// 各ページのデータ取得
export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.id === params.id);

  return {
    props: { project },
  };
}

const ProjectDetail = ({ project }) => {
  return (
    <>
      <div className="px-7 md:px-20 lg:px-32 py-5 mb-10">
        <a href="/projects" className="btn-base text-xl md:text-2xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6L5 12L11 18M18 6L12 12L18 18"
              stroke="#E6E6E6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Prev
        </a>
      </div>
      <MainLayout className="pb-128 pt-4 md:p-20 md:pt-20 lg:p-32 lg:pt-12 xl:pb-256 xl:px-40">
        <h1 className="text-xl md:text-2xl font-bold px-2">
          <span className="text-pink font-mont font-black text-4xl md:text-5xl mr-3">
            #{project.titleNumber}
          </span>
          {project.title}
        </h1>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <div>
            <Card
              className="max-w-[400px] mx-auto my-8 lg:my-12 xl:my-16"
              title={project.title}
              imgeUrl={project.ProjectImge}
              imgeclassName="border-2"
            />
          </div>
          <div>
            <a
              target="blank"
              href={project.siteUrl}
              className="btn-base bg-[#FFD803] text-dark w-52 py-4 hover:shadow-lg	"
            >
              サイトへ行く
            </a>
          </div>
        </div>
        <div className="w-full bg-pattern h-6 mb-10 xl:mb-24" />

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-12 md:mb-128">
          <div className="lg:w-1/2">
            <div className="flex items-center mb-6 md:mb-12">
              <h2 className="title-large-bk mr-2">制作のきっかけ</h2>
              <WhyIcon className="w-24 md:w-32" />
            </div>
            <h3 className="title-large-blue">{project.motivation}</h3>
            {project.motivationText.split("\n").map((line, index) => (
              <p key={index} className="text-sm p-0 md:text-base mb-4">
                {line}
              </p>
            ))}
          </div>

          <div className="lg:w-1/2">
            <div className="flex items-center mb-6 md:mb-12">
              <h2 className="title-large-bk mr-2">こだわりポイント</h2>
              <PointIcon className="w-24 md:w-32" />
            </div>
            {project.focusPoints.map((point, index) => (
              <div key={index}>
                <h3 className="title-large-blue">{point.focus}</h3>
                {point.focusText.split("\n").map((line, i) => (
                  <p key={i} className="text-sm md:text-base mb-4">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center mb-6 md:mb-12">
            <h2 className="title-large-bk mr-2">苦労したこと</h2>
            <ChallengeIcon className="w-[180px] md:w-52" />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-20 gap-8">
            {project.challengePoints.map((point, index) => (
              <div key={index} className="flex flex-col lg:w-1/2">
                <h3 className="title-large-blue mb-3">{point.challenge}</h3>
                <div>
                  <p className="bg-dark text-bg_white inline-block py-1 px-2 text-sm mb-2">
                    課題
                  </p>
                  {point.challengeText.split("\n").map((line, i) => (
                    <p key={i} className="text-sm md:text-base mb-4">
                      {line}
                    </p>
                  ))}
                  <p className="bg-dark text-bg_white inline-block py-1 px-2 text-sm mb-2">
                    解決
                  </p>
                  {point.solution.split("\n").map((line, i) => (
                    <p key={i} className="text-sm md:text-base mb-4">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default ProjectDetail;
