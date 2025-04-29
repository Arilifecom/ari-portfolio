import React from "react";
import MainLayout from "src/compornents/layout/MainLayout";
import projects from "/public/data/projects.json";
import Footer from "src/compornents/Footer";
import {
  ChallengeIcon,
  GithubIcon,
  PointIcon,
  WhyIcon,
} from "src/compornents/Icons";
import Card from "src/compornents/Card";
import PrevButton from "src/compornents/PrevButton";
import Meta from "src/compornents/Meta";

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
      <Meta
        title={`「${project.title}」の詳細ページ`}
        description={project.projectDsc}
        image={project.ProjectImge}
      />
      <PrevButton />
      <MainLayout className="pb-128 pt-4 md:p-20 md:pt-20 lg:p-32 lg:pt-12 xl:pb-256 xl:px-40">
        <h1 className="text-xl md:text-2xl font-bold px-2">
          <span className="text-pink font-mont font-black text-4xl md:text-5xl mr-3">
            #{project.titleNumber}
          </span>
          {project.title}
        </h1>
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 md:flex-row mb-16">
          <div className="z-0">
            <Card
              className="max-w-[400px] mb-0 mx-auto my-8 lg:my-12 xl:my-16"
              title={project.title}
              imgeUrl={project.ProjectImge}
              imgeclassName="border-2"
            />
          </div>
          <div className="flex flex-col justify-center gap-8">
            <div className="max-w-[400px]">
              {project.projectDsc.split("\n").map((line, index) => (
                <p key={index} className="text-sm p-0 md:text-base mb-1">
                  {line}
                </p>
              ))}
            </div>
            <p>制作期間：{project.timeSpent}</p>
            <div className="flex items-center gap-4">
              <a
                target="blank"
                href={project.siteUrl}
                className="btn-base bg-[#FFD803] text-sm text-dark w-40 py-4 hover:shadow-lg"
              >
                サイトへ行く
              </a>
              <a href={project.gitUrl} target="blank">
                <GithubIcon className="w-10 hover:animate-sway" />
              </a>
            </div>
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
              <div key={index} className="mb-10">
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
                  <p className="bg-[#FF8C42]/10 border-[1px] rounded-8 border-[#FF8C42] text-[#FF8C42] inline-block py-1 px-2 text-sm mb-2">
                    課題
                  </p>
                  <div className="mb-10">
                    {point.challengeText.split("\n").map((line, i) => (
                      <p key={i} className="text-sm md:text-base mb-4">
                        {line}
                      </p>
                    ))}
                  </div>
                  <p className="bg-[#2ECC71]/10 border-[1px] rounded-8 border-[#2ECC71] text-[#2ECC71] inline-block py-1 px-2 text-sm mb-2">
                    解決
                  </p>
                  <div>
                    {point.solution.split("\n").map((line, i) => (
                      <p key={i} className="text-sm md:text-base mb-4">
                        {line}
                      </p>
                    ))}
                  </div>
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
