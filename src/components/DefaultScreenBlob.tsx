import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import getRandomNumber from "../helpers/getRandomNumber";

/**
 * One of the rotating blurs that appears on
 * the default Screen Animation
 */
const DefaultScreenBlob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const xMax = window.innerWidth / 2;
  const yMax = window.innerHeight / 2;

  const radiusX = getRandomNumber(-xMax, xMax);
  const radiusY = getRandomNumber(-yMax, yMax);
  const speed = getRandomNumber(10, 20) / 10000;

  const coinflip = getRandomNumber(-1, 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: radiusX * Math.cos(speed * Date.now()) * (coinflip > 0 ? -1 : 1),
        y: radiusY * Math.sin(speed * Date.now()),
      });
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      style={{
        width: "10vw",
        height: "10vw",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "50%",
        x: position.x,
        y: position.y,
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
        filter: [
          `blur(80px)`,
          `blur(120px)`,
          `blur(80px)`,
          `blur(100px)`,
          `blur(80px)`,
          `blur(120px)`,
          `blur(80px)`,
          `blur(100px)`,
          `blur(80px)`,
        ],
        scale: [1, 1.5, getRandomNumber(2, 3), 1.5, 1],
      }}
      transition={{
        duration: 1000 / 60,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
};

export default DefaultScreenBlob;
