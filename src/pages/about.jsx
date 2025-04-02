import AnimatedNumber from "src/compornents/AnimatedNumuber";
import AnimatedText from "src/compornents/AnimatedText";
import HelloInteraction from "src/compornents/HelloInteraction";
import CommonLayout from "src/compornents/layout/CommonLayout";
import MainLayout from "src/compornents/layout/MainLayout";

export default function About() {
  return (
    <>
      <CommonLayout>
        <MainLayout>
          <AnimatedText text={"About Ari"} />
          <div className="flex flex-col justify-center xl:flex-row ">
            <AnimatedNumber />
          </div>
          <HelloInteraction />
        </MainLayout>
      </CommonLayout>
    </>
  );
}
