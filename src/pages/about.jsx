import AnimatedNumber from "src/compornents/AnimatedNumuber";
import WorkExperience from "src/compornents/WorkExperience";
import HelloInteraction from "src/compornents/HelloInteraction";
import CommonLayout from "src/compornents/layout/CommonLayout";
import MainLayout from "src/compornents/layout/MainLayout";
import Skills from "src/compornents/Skills";
import Meta from "src/compornents/Meta";

export default function About() {
  return (
    <>
      <Meta
        title={"自己紹介"}
        description="Web開発スキルを学ぶAriのポートフォリオページ。実績や学習記録、プロジェクトを通じて、就職活動に向けたスキルを紹介しています。"
      />

      <CommonLayout>
        <MainLayout>
          <div className="grid justify-center gap-10 md:gap-14 xl:grid-cols-12 xl:grid-rows-5 xl:gap-8 mb-128 md:mb-256">
            <AnimatedNumber className="xl:col-span-7 xl:col-start-6 xl:row-span-1" />
            <div className=" px-3 xl:py-5 xl:px-10 flex flex-col items-start justify-start gap-3 md:gap-5 xl:col-span-5 xl:row-span-5 xl:row-start-1">
              <h2 className="text-lg title-large-blue mb-0">About Ari</h2>
              <p>はじめまして。Ariと申します。</p>
              <p>
                未経験からフロントエンドエンジニアを目指し、独学でWeb開発を学んでいます。（現在はMentaの方から学び中）
              </p>
              <p>
                海外留学中に出会った、エンジニアの方に憧れ、HTML/CSS/JavaScriptから学習を開始。
              </p>
              <p>
                現在はWeb制作案件を個人で請け負い、ヒアリングからデザイン、コーディングまで一貫して対応しています。
              </p>
              <p>
                特に「完成イメージを形にするコーディング」にやりがいを感じ、現在はNext.jsを活用した開発に取り組みながら、継続的にスキルを磨いています。
              </p>
              <p>
                これまでの社会人経験を活かし、責任感を持ってチームに貢献できるエンジニアを目指しています。
              </p>
            </div>
            <HelloInteraction className="xl:col-start-6 xl:col-span-7 xl:row-span-4 xl:row-start-2" />
          </div>
          <Skills className="mb-128 md:mb-256" />
          <WorkExperience className="mb-128 md:mb-256" />
        </MainLayout>
      </CommonLayout>
    </>
  );
}
