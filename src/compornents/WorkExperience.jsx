import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedLine from "src/compornents/AnimatedLine";
import AnimatedText from "src/compornents/AnimatedText";

const Experience = ({ title, date, desc }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.2, 1], // 進行具合に応じて変化
    [
      "-5px -5px 10px 0px rgba(255, 255, 255, 0), 5px 5px 10px 0px rgba(0, 0, 0, 0)",
      "-5px -5px 10px 0px rgba(255, 255, 255, 0.5), 5px 5px 10px 0px rgba(0, 0, 0, 0.3)",
      "-5px -5px 10px 0px rgba(255, 255, 255, 0), 5px 5px 10px 0px rgba(0, 0, 0, 0)",
    ]
  );

  return (
    <motion.li
      ref={ref}
      className="p-8 bg-bg_white"
      style={{
        boxShadow: boxShadow,
      }}
    >
      <h3 className="title-large-bk">{title}</h3>
      <p className="title-large-blue">{date}</p>
      <p>{desc}</p>
    </motion.li>
  );
};

const experiences = [
  {
    title: "Web制作",
    date: "2024-現在 | 岩手県",
    desc: "Web制作を個人で請け負っています。個人事業主様のWebサイトや、これから事業を始めたい方のWebサイトを制作させていただきました。制作から完成までの流れを説明をさせて頂いた後、ZOOMで打ち合わせをしながら、制作→確認→修正を行なっています。また、友人からの依頼でshopifyを用いたECサイトも制作しました。その他Next.jsのフロントエンドの個人開発にも力を入れ、Webアプリ「Saving-UP」を完成させました。",
  },
  {
    title: "農業スタッフ",
    date: "2019-2024 | オーストラリア",
    desc: "オーストラリアにワーキングホリデーへ行き、主に農業企業の収穫スタッフとして働いておりました。様々な土地で農作物の収穫を行いました。単純な作業の中で、集中力の継続や工夫をすることで、収穫量を増やしたりすることを学びました。また、収穫のみではなく英語でのコミュニケーション力を伸ばすため、スーパーバイザーの補助スタッフの業務にも挑戦しました。",
  },
  {
    title: "スポーツジム受付",
    date: "2018-2019 | 広島県",
    desc: "キッズスクール併用のスポーツジムにて、受付として働いていました。主に新規入会者様へのご案内と契約業務を行なっておりました。契約内容の説明や重要事項など、利用者様にとって大切なことは出来る限り分かりやすくお伝えするように口調や指差しなどで注意を払っておりました。",
  },
  {
    title: "レストランサービス・仲居",
    date: "2016-2018 | 北海道、淡路島",
    desc: "全国のリゾート地へ派遣される、派遣スタッフとして働いていました。レストランサービスのウェイターや仲居業務、キッチン補助などの様々な業務を行なっておりました。繁忙期の短期での仕事ということもあり、いち早く業務内容を覚え、即戦力になることを大切に取り組んでおりました。自分の仕事を覚えるコツを知ることができ、対面でのコミュニケーション力をつけることができました。",
  },
  {
    title: "カスタマーサービス",
    date: "2013-2016 | 広島県",
    desc: "家具を販売する会社で、カスタマーサービス担当として働いていました。電話にてお問い合わせいただく、商品や配送のトラブルを主に解決する役割を行なっておりました。また、カスタマーチームの主任として新人教育やフォローに努めました。その他、日々の業務を円滑に行うためマニュアル作りにも力をいれておりました。",
  },
];

function WorkExperience({ className }) {
  const lineRef = useRef(null);
  return (
    <div className={`${className}`}>
      <AnimatedText text={"Work Experience"} />

      <div ref={lineRef} className="relative xl:grid xl:grid-cols-2 mx-auto">
        <ul className="w-full flex items-start justify-between flex-col gap-32">
          {experiences.map((experience) => (
            <Experience key={experience.title} {...experience} />
          ))}
        </ul>
        <AnimatedLine lineRef={lineRef} />
      </div>
    </div>
  );
}

export default WorkExperience;
