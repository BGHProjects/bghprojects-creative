import { motion } from "framer-motion";
import { range } from "lodash";
import DefaultScreenBar from "./DefaultScreenBar";

const ScreenAnimation = () => {
  return (
    <motion.div
      style={{
        height: "100vh",
        width: "150vw",
        position: "absolute",
        overflow: "hidden",
        rotate: 45,
      }}
    >
      {range(60).map((item) => (
        <DefaultScreenBar key={item} />
      ))}
    </motion.div>
  );
};

export default ScreenAnimation;
