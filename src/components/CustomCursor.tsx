import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppStateContext";

const cursorSize = 20;

/**
 * Custom cursor that is shown throughout the app
 */
const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const { mouseHovering } = useAppContext();

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const maxX = window.innerWidth - cursorSize;
    const maxY = window.innerHeight - cursorSize;
    const x = clientX > maxX ? maxX : clientX;
    const y = clientY > maxY ? maxY : clientY;
    setCursorPos({ x, y });
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
        zIndex: 99999,
      }}
      animate={{
        opacity: [0, 1],
        background: mouseHovering
          ? ["transparent", "white"]
          : ["white", "transparent"],
      }}
      transition={{
        opacity: {
          delay: 2,
          duration: 2,
          ease: "easeInOut",
        },
      }}
    />
  );
};

export default CustomCursor;
