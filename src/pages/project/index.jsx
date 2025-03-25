import CommonLayout from "src/compornents/layout/CommonLayout";
import MainLayout from "src/compornents/layout/MainLayout";

export default function Project() {
  return (
    <>
    <CommonLayout>
      <MainLayout>
    <div>
        <h1 className="font-mont font-bold text-4xl sm:text-6xl md:text-7xl">Project</h1>
    </div>
      </MainLayout>
    </CommonLayout>
    </>
  );
}
