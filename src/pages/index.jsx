import AnimatedBtn from "src/compornents/AnimatedBtn";
import AnimatedCrackerPop from "src/compornents/AnimatedCrackerPop";
import AnimatedText from "src/compornents/AnimatedText";
import CommonLayout from "src/compornents/layout/CommonLayout";
import MainLayout from "src/compornents/layout/MainLayout";
import Meta from "src/compornents/Meta";

export default function Home() {
  return (
    <>
      <Meta description="独学のフロントエンド開発・Web制作者Ariのポートフォリオサイトです。" />
      <CommonLayout>
        <MainLayout className="h-[90vh] flex flex-col items-start md:gap-8 lg:gap-6 xl:flex-row-reverse">
          <div className="xl:w-1/2">
            <AnimatedText
              text="Learning to Create with Coding"
              className="xl:text-left xl:text-[80px]"
            />
            <AnimatedBtn
              text="ARIについて"
              className="text-center my-6 xl:text-left font-mont"
              link="/about"
            />
          </div>
          <div className="w-full relative h-[100%] xl:w-1/2" id="container">
            <AnimatedCrackerPop />
          </div>
        </MainLayout>
      </CommonLayout>
    </>
  );
}
