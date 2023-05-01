import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const cursorSize = 30;

/**
 * Custom cursor that is shown throughout the app
 */
const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const maxX = window.innerWidth - cursorSize;
    const maxY = window.innerHeight - cursorSize;
    const x = clientX > maxX ? maxX : clientX;
    const y = clientY > maxY ? maxY : clientY;
    setCursorPos({ x, y });
  };

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

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        height: `${cursorSize}px`,
        width: `${cursorSize}px`,
        background: "transparent",
        border: "2px solid white",
        borderRadius: `${cursorSize}px`,
        position: "absolute",
        top: `${cursorPos.y}px`,
        left: `${cursorPos.x}px`,
      }}
      variants={variants}
      initial="hidden"
      animate="visible"
    />
  );
};

export default CustomCursor;
