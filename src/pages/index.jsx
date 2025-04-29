import AnimatedBtn from "src/compornents/AnimatedBtn";
import AnimatedCrackerPop from "src/compornents/AnimatedCrackerPop";
import AnimatedText from "src/compornents/AnimatedText";
import CommonLayout from "src/compornents/layout/CommonLayout";
import MainLayout from "src/compornents/layout/MainLayout";
import Meta from "src/compornents/Meta";

export default function Home() {
  return (
    <>
      <Meta description="未経験からフロントエンドエンジニアを目指す、Ariの就職活動に向けたポートフォリオサイトです。制作したプロジェクトの詳細や、学習記録を掲載しています。" />
      <CommonLayout>
        <MainLayout className="h-[75vh] flex flex-col items-start md:h-[90vh] md:gap-8 lg:gap-6 lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <AnimatedText
              text="Learning to Create with Coding"
              className="lg:text-left xl:text-[80px]"
            />
            <AnimatedBtn
              text="ARIについて"
              className="text-center my-2 lg:text-left font-mont"
              link="/about"
            />
          </div>
          <div className="w-full relative h-[100%] lg:w-1/2" id="container">
            <AnimatedCrackerPop />
          </div>
        </MainLayout>
      </CommonLayout>
    </>
  );
}
