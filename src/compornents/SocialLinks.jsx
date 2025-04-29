import { motion } from "framer-motion";
import { AriIcon, GithubIcon, XIcon } from "src/compornents/Icons";

const SosialLinks = () => {
  return (
    <div className="flex items-center justify-center flex-wrap">
      <motion.a
        href="https://github.com/Arilifecom"
        target="blank"
        aria-label="AriのGitHubアカウントへ"
        className="w-8 mx-1 lg:nx-3 rounded-full "
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.4 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <GithubIcon />
      </motion.a>

      <motion.a
        href="https://ari-life.com/"
        target="blank"
        aria-label="Web制作ご案内サイト「ari-life.comの」サイトへ"
        className="w-8 mx-1 lg:nx-3 rounded-full "
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.4 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <AriIcon />
      </motion.a>

      <motion.a
        href="https://x.com/Sunny_sideupup"
        target="blank"
        aria-label="AriのXアカウントへ"
        className="w-8 mx-1 lg:nx-3 rounded-full "
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.4 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <XIcon />
      </motion.a>
    </div>
  );
};

export default SosialLinks;
