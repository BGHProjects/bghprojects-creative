import { motion } from "framer-motion";
import { range } from "lodash";
import DefaultScreenBlob from "./DefaultScreenBlob";

const ScreenAnimation = () => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        overflow: "hidden",
      }}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {range(20).map((item) => (
        <DefaultScreenBlob key={item} />
      ))}
    </motion.div>
  );
};

export default ScreenAnimation;
