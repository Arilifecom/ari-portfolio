import AnimatedBtn from "src/compornents/AnimatedBtn";
import Card from "src/compornents/Card";
import CommonLayout from "src/compornents/layout/CommonLayout";
import MainLayout from "src/compornents/layout/MainLayout";
import Meta from "src/compornents/Meta";


export default function Home() {
  return (
    <>
    <Meta description="独学のフロントエンド開発・Web制作者Ariのポートフォリオサイトです。" />
    <CommonLayout>
      <MainLayout>
    <div>
       <Card className={"max-w-[500px] mx-auto"} title={"Home"} imgeUrl={"/p-001.png"} imgeclassName="border-2"/>
       <AnimatedBtn text="Hello" className="text-center my-4"/>
    </div>
      </MainLayout>
    </CommonLayout>
    </>
  );
}
