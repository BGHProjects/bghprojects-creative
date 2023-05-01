import { motion } from "framer-motion";
import { useState } from "react";
import getRandomNumber from "../helpers/getRandomNumber";

const DefaultScreenBar = () => {
  const [barY] = useState(getRandomNumber(0, 80));
  const [barWidth] = useState(getRandomNumber(50, 100));
  const [barHeight] = useState(getRandomNumber(10, 50));

  const [coinFlip] = useState(getRandomNumber(-1, 1));
  const coinFlipResult = coinFlip > 0;

  return (
    <motion.div
      style={{
        width: `${barWidth}vw`,
        height: `${barHeight}px`,
        position: "absolute",
        y: `${barY}vh`,
      }}
      animate={{
        backgroundColor: [
          `hsl(0,100,50)`,
          `hsl(360,100,50)`,
          `hsl(240,100,50)`,
          `hsl(360,100,50)`,
          `hsl(240,100,50)`,
          `hsl(360,100,50)`,
          `hsl(0,100,50)`,
        ],
        x: [
          `${coinFlipResult ? `-${barWidth + 10}vw` : "150vw"}`,
          `${coinFlipResult ? "150vw" : `-${barWidth + 10}vw`}`,
        ],
        filter: [`blur(5px)`, `blur(20px)`, `blur(5px)`],
      }}
      transition={{
        delay: getRandomNumber(1, 5),
        duration: getRandomNumber(5, 10),
        ease: "easeInOut",
        repeat: Infinity,
      }}
    ></motion.div>
  );
};

export default DefaultScreenBar;
