import AnimatedNumber from "src/compornents/AnimatedNumuber";
import WorkExperience from "src/compornents/WorkExperience";
import HelloInteraction from "src/compornents/HelloInteraction";
import CommonLayout from "src/compornents/layout/CommonLayout";
import MainLayout from "src/compornents/layout/MainLayout";
import Skills from "src/compornents/Skills";

export default function About() {
  return (
    <>
      <CommonLayout>
        <MainLayout>
          <div className="grid justify-center gap-10 md:gap-14 xl:grid-cols-12 xl:grid-rows-5 xl:gap-8 mb-128 md:mb-256">
            <div className="px-3 xl:py-5 xl:px-10 flex flex-col items-start justify-start gap-3 md:gap-5 xl:col-span-5 xl:row-span-5">
              <h2 className="text-lg font-bold text-dark/75">About Ari</h2>
              <p>はじめまして。Ariと申します。</p>
              <p>
                私は、独学のWeb開発者として、コーディングとフロントエンド開発の分野に取り組んでいます。
              </p>
              <p>
                Webサイトを制作する際は、「情報を整理すること」と「分かりやすく表示させること」を特に大切にしています。
              </p>
              <p>
                複雑なレイアウトやアニメーションの課題に直面した際、「どうすれば実現できるか？」と考えるのが好きで、試行錯誤を繰り返しながら、理想の形にしていくことにやりがいを感じています。
              </p>
              <p>
                また、Web全般に興味があるためフロント部分のみにとどまらず、PHPを学びセキュリティを考慮したデータの受け渡しの知識を学んでいます。
              </p>
              <p>
                ご依頼いただいたWeb制作や、個人開発を進める中で、商品写真の撮影やWebアプリの紹介動画の作成など、ビジュアル面での表現にも力を入れています。
              </p>
            </div>
            <AnimatedNumber className="xl:col-span-7 xl:col-start-6 xl:row-span-1" />
            <HelloInteraction className="xl:col-start-6 xl:col-span-7 xl:row-span-4 xl:row-start-2" />
          </div>
          <Skills className="mb-128 md:mb-256" />
          <WorkExperience className="mb-128 md:mb-256" />
        </MainLayout>
      </CommonLayout>
    </>
  );
}
