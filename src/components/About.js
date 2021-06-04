import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div>
      <motion.h4
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.7,
          // delay: 0.5
        }}
      >About</motion.h4>
    </motion.div>
  );
};

export default About;