import { motion } from "framer-motion";
import { AriIcon, GithubIcon, XIcon } from "src/compornents/Icons";

const SosialLinks = () => {
  return(
    <div className="flex items-center justify-center flex-wrap">
      <motion.a href="#" className="w-8 mx-1 lg:nx-3 rounded-full "
      whileHover={{
        scale: 1.3,
        transition: { duration: 0.4 },
      }}
      whileTap={{scale: 0.9 }}
      >
        <GithubIcon />
      </motion.a>

      <motion.a href="#" className="w-8 mx-1 lg:nx-3 rounded-full "
      whileHover={{
        scale: 1.3,
        transition: { duration: 0.4 },
      }}
      whileTap={{scale: 0.9 }}
      >
        <AriIcon />
      </motion.a>

      <motion.a href="#" className="w-8 mx-1 lg:nx-3 rounded-full "
      whileHover={{
        scale: 1.3,
        transition: { duration: 0.4 },
      }}
      whileTap={{scale: 0.9 }}
      >
        <XIcon />
      </motion.a>
    </div>
  )
}

export default SosialLinks