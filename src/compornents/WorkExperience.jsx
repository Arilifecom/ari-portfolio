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
      <div>
        {desc.split("\n").map((line, index) => (
          <p key={index} className="text-sm p-0 md:text-base">
            {line}
          </p>
        ))}
      </div>
    </motion.li>
  );
};

const experiences = [
  {
    title: "Web制作",
    date: "2024-現在 | 岩手県",
    desc: "個人でWeb制作を請け負っています。\nこれから事業を立ち上げる方のWebサイト制作を担当しました。\n制作の流れをご説明したうえで、ZOOMで打ち合わせを重ねながら、デザイン制作・実装・修正対応まで一貫して行っています。\nまた、友人からの依頼でShopifyを用いたECサイト制作も経験。\n個人制作では、Next.jsを用いて開発したWebアプリ「Saving-UP」を完成させました。\n※現在、Web制作の新規受付は停止しています。",
  },
  {
    title: "農業スタッフ",
    date: "2019-2024 | オーストラリア",
    desc: "オーストラリアにワーキングホリデーへ行き、主に農業企業の収穫スタッフとして働いておりました。様々な土地で農作物の収穫を行いました。\n単純な作業の中でも、集中力の継続や工夫をすることで、収穫量を増やしたりすることを学びました。\nまた、収穫のみではなく英語でのコミュニケーション力を伸ばすため、スーパーバイザーの補助スタッフの業務にも挑戦しました。",
  },
  {
    title: "スポーツジム受付",
    date: "2018-2019 | 広島県",
    desc: "キッズスクール併用のスポーツジムにて、受付として働いていました。主に新規入会者様へのご案内と契約業務を行なっておりました。\n契約内容の説明や重要事項など、利用者様にとって大切なことは出来る限り分かりやすくお伝えするように口調や指差しなどで注意を払っておりました。",
  },
  {
    title: "レストランサービス・仲居",
    date: "2016-2018 | 北海道、淡路島",
    desc: "全国のリゾート地へ派遣される、派遣スタッフとして働いていました。レストランサービスのウェイターや仲居業務、キッチン補助などの様々な業務を行なっておりました。\n繁忙期の短期での仕事ということもあり、いち早く業務内容を覚え、即戦力になることを大切に取り組んでおりました。\n自分の仕事を覚えるコツを知ることができ、対面でのコミュニケーション力をつけることができました。",
  },
  {
    title: "カスタマーサービス",
    date: "2013-2016 | 広島県",
    desc: "家具を販売する会社で、カスタマーサービス部署で正社員として働いていました。電話にてお問い合わせいただく、商品や配送のトラブルを主に解決する役割を行なっておりました。また、カスタマーチームの主任として新人教育やフォローに努めました。\nその他、日々の業務を円滑に行うためマニュアル作りにも力をいれておりました。",
  },
];

function WorkExperience({ className }) {
  const lineRef = useRef(null);
  return (
    <div className={`${className}`}>
      <AnimatedText text={"Work Experience"} />

      <div
        ref={lineRef}
        className="relative xl:grid xl:grid-cols-2 mx-auto items-start mb-96"
      >
        <ul className="w-full flex items-start justify-between flex-col gap-32 pb-48">
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
