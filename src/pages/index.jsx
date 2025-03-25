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
        <h1 className="font-mont font-bold text-4xl sm:text-6xl md:text-7xl">設定中</h1>
        <a href="#" className="btn-base">HTML</a>
        <div className="card-base relative">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[108%] rounded-22 bg-[#C6C4C7]"/>
        <h3 className="title-large-bk">Web制作</h3>
        <p className="title-large-blue">2024-現在 | 岩手県</p>
        <p>はじめまして。</p>
        </div>
    </div>
      </MainLayout>
    </CommonLayout>
    </>
  );
}
