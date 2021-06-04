import { motion } from "framer-motion";

const Blog = () => {
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
      >Blog</motion.h4>
    </motion.div>
  );
};

export default Blog;