import { motion } from "framer-motion";
import AnimatedText from "src/compornents/AnimatedText";
import {
  CssIcon,
  FigmaIcon,
  GithubIcon,
  HtmlIcon,
  JavaScriptIcon,
  NextJsIcon,
  PhpIcon,
  TailwindIcon,
} from "src/compornents/Icons";

const show = {
  initial: { y: 0, x: 0, opacity: 0 },
  animate: (i) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      y: { delay: i * 0.2, type: "spring", duration: 1, bounce: 0 },
      x: { delay: i * 0.2, type: "spring", duration: 1, bounce: 0 },
      opacity: { delay: i * 0.2, duration: 0.3 },
    },
  }),
};

const Skill = ({ title, Icon, index }) => {
  return (
    <motion.li
      variants={show}
      custom={index}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="max-w-42 border-[1px] border-dark py-2 px-3 xl:py-4 xl:px-4 flex flex-col justify-center items-center gap-2"
    >
      {Icon}
      <p className="btn-base bg-[#BAE8E8] border-none text-dark min-w-28 text-sm">
        {title}
      </p>
    </motion.li>
  );
};

const skills = [
  { Icon: <HtmlIcon className="w-16" />, title: "HTML" },
  { Icon: <CssIcon className="w-16" />, title: "CSS" },
  { Icon: <JavaScriptIcon className="w-16" />, title: "JavaScript" },
  { Icon: <NextJsIcon className="w-16" />, title: "Next.js" },
  { Icon: <TailwindIcon className="w-16" />, title: "Tailwind" },
  { Icon: <PhpIcon className="w-16" />, title: "PHP" },
  { Icon: <FigmaIcon className="w-16" />, title: "Figma" },
  { Icon: <GithubIcon className="w-16" />, title: "GitHub" },
];

const Skills = ({ className }) => {
  return (
    <div className={`flex flex-col xl:flex-row max-w-5xl mx-auto ${className}`}>
      <div className="xl:basis-1/4 xl:mr-20">
        <AnimatedText text={"Skills"} />
      </div>
      <ul className="font-mont flex gap-4 flex-wrap justify-center items-center">
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
