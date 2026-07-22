import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedLine from "src/compornents/AnimatedLine";
import AnimatedText from "src/compornents/AnimatedText";

const Experience = (experiences) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end start'],
  })

  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.2, 1], // 進行具合に応じて変化
    [
      '-5px -5px 10px 0px rgba(255, 255, 255, 0), 5px 5px 10px 0px rgba(0, 0, 0, 0)',
      '-5px -5px 10px 0px rgba(255, 255, 255, 0.5), 5px 5px 10px 0px rgba(0, 0, 0, 0.3)',
      '-5px -5px 10px 0px rgba(255, 255, 255, 0), 5px 5px 10px 0px rgba(0, 0, 0, 0)',
    ]
  )

  return (
    <motion.li
      ref={ref}
      className="p-8 bg-bg_white"
      style={{
        boxShadow: boxShadow,
      }}
    >
      <h3 className="title-large-bk">{experiences.title}</h3>
      <p className="title-large-blue">{experiences.date}</p>
      <div>
        {experiences.desc.split('\n').map((line, index) => (
          <p key={index} className="text-sm p-0 md:text-base">
            {line}
          </p>
        ))}
        <a className="mt-4">{experiences.url}</a>
      </div>
    </motion.li>
  )
}

const experiences = [
  {
    title: 'Web制作｜フロントエンド開発',
    date: '2024 - 現在',
    desc: '個人でWeb制作を受託。同時に現役のエンジニアによるマンツーマン指導のプログラミングスクールに所属し、Next.jsを用いたオリジナルアプリ「カロリーチ」を開発。その後インターン形式のプロジェクトに参画し、機能開発やAPI連携などのチーム開発を経験。',
  },
  {
    title: '農業スタッフ',
    date: '2019-2024',
    desc: '海外で生活してみたいという思いから、オーストラリアへ渡航。主に農業法人で農作物の収穫スタッフとして勤務。多国籍な職場や英語環境での業務を通じて、異なる環境への適応力と継続力を培う。現地で出会ったエンジニアの働き方に刺激を受け、プログラミング学習を開始。',
  },
  {
    title: 'スポーツジム受付',
    date: '2018-2019',
    desc: '入会案内や契約手続きを担当。\n前職で培った接客経験を活かし、契約内容や重要事項を一人ひとりに合わせてご案内。相手の理解度に合わせて伝える力を磨く。',
  },
  {
    title: 'レストランサービス・仲居',
    date: '2016-2018',
    desc: '全国のリゾート地でレストランサービスや仲居、キッチン補助など幅広い業務を経験。繁忙期の短期勤務が中心のため、短期間で業務を習得し、新しい環境へ素早く適応する力を身につける。',
  },
  {
    title: 'カスタマーサービス',
    date: '2012-2016',
    desc: '家具販売会社のカスタマーサービス部門に勤務。\n商品や配送に関する問い合わせ対応に加え、主任として新人教育や業務マニュアルの作成を担当。状況を整理し、最適な解決策を提案する業務に従事。',
  },
]

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
