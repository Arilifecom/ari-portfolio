import { motion } from 'framer-motion'
import AnimatedText from 'src/compornents/AnimatedText'
import {
  DrizzleIcon,
  FigmaIcon,
  GithubIcon,
  HonoIcon,
  NextJsIcon,
  ReactIcon,
  TailwindIcon,
  TanStackIcon,
  TypeScriptIcon,
  WordPressIcon,
} from 'src/compornents/skilsIcon'

const show = {
  initial: {
    y: 16,
    opacity: 0,
  },
  animate: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.08,
      type: 'spring',
      duration: 0.8,
      bounce: 0,
    },
  }),
}

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      {
        Icon: <TypeScriptIcon className="h-12 w-12" />,
        title: 'TypeScript',
      },
      {
        Icon: <ReactIcon className="h-12 w-12" />,
        title: 'React',
      },
      {
        Icon: <NextJsIcon className="h-12 w-12" />,
        title: 'Next.js',
      },
      {
        Icon: <TanStackIcon className="h-12 w-12" />,
        title: 'TanStack Router',
      },
      {
        Icon: <TanStackIcon className="h-12 w-12" />,
        title: 'TanStack Query',
      },
      {
        Icon: <TailwindIcon className="h-12 w-12" />,
        title: 'Tailwind CSS',
      },
    ],
  },
  {
    category: 'Backend / Data',
    skills: [
      {
        Icon: <HonoIcon className="h-12 w-12" />,
        title: 'Hono',
      },
      {
        Icon: <DrizzleIcon className="h-12 w-12" />,
        title: 'Drizzle ORM',
      },
    ],
  },
  {
    category: 'CMS',
    skills: [
      {
        Icon: <WordPressIcon className="h-12 w-12" />,
        title: 'WordPress',
      },
    ],
  },
  {
    category: 'Tools',
    skills: [
      {
        Icon: <GithubIcon className="h-12 w-12" />,
        title: 'Git / GitHub',
      },
      {
        Icon: <FigmaIcon className="h-12 w-12" />,
        title: 'Figma',
      },
    ],
  },
]

const Skill = ({ title, Icon, index }) => {
  return (
    <motion.li
      variants={show}
      custom={index}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="
        flex flex-col items-center justify-center gap-2
        border border-dark py-5 w-32"
    >
      {Icon}

      <p
        className="
          flex items-center justify-center
           text-center text-sm font-bold text-dark
        "
      >
        {title}
      </p>
    </motion.li>
  )
}

const SkillGroup = ({ category, skills, groupIndex }) => {
  return (
    <section className="grid gap-4 xl:grid-cols-[12rem_1fr] xl:gap-8">
      <h3 className="text-blue text-center text-xl font-bold xl:text-2xl xl:text-left">
        {category}
      </h3>

      <ul className="flex flex-wrap justify-center gap-2 xl:justify-start">
        {skills.map((skill, skillIndex) => (
          <Skill
            key={skill.title}
            {...skill}
            index={groupIndex * 6 + skillIndex}
          />
        ))}
      </ul>
    </section>
  )
}

const Skills = ({ className }) => {
  return (
    <section className={`mx-auto max-w-5xl ${className}`}>
      <AnimatedText text="Skills" />

      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        {skillGroups.map((group, groupIndex) => (
          <SkillGroup key={group.category} {...group} groupIndex={groupIndex} />
        ))}
      </div>
    </section>
  )
}

export default Skills
