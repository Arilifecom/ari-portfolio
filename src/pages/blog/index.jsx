import CommonLayout from "src/compornents/layout/CommonLayout";
import MainLayout from "src/compornents/layout/MainLayout";

export default function Blog() {
  return (
    <>
    <CommonLayout>
      <MainLayout>
    <div>
        <h1 className="font-mont font-bold text-4xl sm:text-6xl md:text-7xl">Blog</h1>
    </div>
      </MainLayout>
    </CommonLayout>
    </>
  );
}
