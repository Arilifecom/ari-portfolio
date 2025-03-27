import AnimatedNumber from "src/compornents/AnimatedNumuber";
import CommonLayout from "src/compornents/layout/CommonLayout";
import MainLayout from "src/compornents/layout/MainLayout";

export default function About() {
  return (
    <>
    <CommonLayout>
      <MainLayout>
    <div className="flex flex-col justify-between xl:flex-row ">
        <h1 className="font-mont font-bold text-4xl sm:text-6xl md:text-7xl">About</h1>
        <AnimatedNumber />
    </div>
      </MainLayout>
    </CommonLayout>
    </>
  );
}
