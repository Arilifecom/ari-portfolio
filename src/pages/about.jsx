import AnimatedNumber from "src/compornents/AnimatedNumuber";
import WorkExperience from "src/compornents/WorkExperience";
import HelloInteraction from "src/compornents/HelloInteraction";
import CommonLayout from "src/compornents/layout/CommonLayout";
import MainLayout from "src/compornents/layout/MainLayout";
import Skills from "src/compornents/Skills";
import Meta from "src/compornents/Meta";
import AnimatedBtn from 'src/compornents/AnimatedBtn'

export default function About() {
  return (
    <>
      <Meta
        title={'自己紹介'}
        description="Web開発スキルを学ぶAriのポートフォリオページ。実績や学習記録、プロジェクトを通じて、就職活動に向けたスキルを紹介しています。"
      />

      <CommonLayout>
        <MainLayout>
          <div className="grid justify-center gap-10 md:gap-14 xl:grid-cols-12 xl:grid-rows-5 xl:gap-8 mb-128 md:mb-256">
            <AnimatedNumber className="xl:col-span-7 xl:col-start-6 xl:row-span-1" />
            <div className="leading-normal px-3 xl:py-5 xl:px-10 flex flex-col items-start justify-start gap-3 md:gap-5 xl:col-span-5 xl:row-span-5 xl:row-start-1">
              <h2 className="text-lg title-large-blue mb-0">About Ari</h2>
              <p>はじめまして。Ariと申します。</p>
              <p>
                フロントエンドエンジニアを目指し、React・Next.js・TypeScriptを中心としたWebアプリケーション開発に取り組んでいます。
              </p>
              <p>
                現在は、個人でWordPressを用いたWeb制作案件を請け負い、ヒアリング、要件整理、コーディング、公開まで一貫して対応しています。
              </p>
              <p>
                海外留学中に出会ったエンジニアとの出会いをきっかけにWeb開発を学び始め、「アイデアを形にすること」に魅力を感じ、継続して技術を磨いてきました。
              </p>
              <p>
                これまでの社会人経験で培った責任感やコミュニケーション力を活かし、チームで信頼されるフロントエンドエンジニアを目指しています。
              </p>
            </div>
            <HelloInteraction className="xl:col-start-6 xl:col-span-7 xl:row-span-4 xl:row-start-2" />
          </div>
          <Skills className="mb-16" />
          <div className="flex flex-col justify-center items-center mb-128 md:mb-256">
            <h2 className="text-lg font-bold mb-2">制作プロジェクトはこちら</h2>
            <AnimatedBtn
              text="Projects一覧へ"
              className="text-center my-2 lg:text-left font-mont"
              link="/projects"
            />
          </div>
          <WorkExperience className="mb-128 md:mb-256" />
        </MainLayout>
      </CommonLayout>
    </>
  )
}
