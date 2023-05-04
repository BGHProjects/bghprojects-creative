import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAppContext } from "../contexts/AppStateContext";

const animDuration = 0.2;

interface IOptionButton {
  text: string;
  image?: any;
  width: number;
  height: number;
  fontSize?: number;
}

/**
 * Button displayed on the Home page
 *
 * @param text Text that is displayed on the button
 * @param image The image that is displayed on the button
 * @param width The width of the button
 * @param height The height of the button
 * @param fontSize The fontsize of the title of the button
 */
const OptionButton = ({
  text,
  width,
  height,
  fontSize = 16,
}: IOptionButton) => {
  const [justRendered, setjustRendered] = useState(true);
  const [hovering, setHovering] = useState(false);

  const { setMouseHovering } = useAppContext();

  const textVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      display: "flex",
      opacity: 1,
      transition: {
        ease: "easeInOut",
        delay: animDuration * 5,
        duration: animDuration,
      },
    },
  };

  const handleMouseEnter = () => {
    setjustRendered(false);
    setHovering(true);
    setMouseHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setMouseHovering(false);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: "10px",
        border: "3px solid white",
        zIndex: "2",
        position: "relative",
        opacity: 0,
      }}
      animate={{
        y: [200, 0],
        opacity: [0, 1],
        width: [0, width],
        height: [0, height],
        scale: justRendered ? 1 : hovering ? [1, 1.1] : [1.1, 1],
      }}
      transition={{
        ease: "easeInOut",
        duration: animDuration,
        scale: {
          duration: animDuration,
        },
        y: {
          duration: animDuration * 3,
        },
        width: {
          delay: animDuration * 5,
          duration: animDuration * 1.5,
        },
        height: {
          delay: animDuration * 3,
          duration: animDuration * 1.5,
        },
      }}
    >
      <Center boxSize="100%" bg="rgba(0,0,0,0.5)" borderRadius="10px">
        <motion.span
          style={{
            fontFamily: "Electrolize",
            fontSize: fontSize,
            color: "white",
            textAlign: "center",
            position: "absolute",
          }}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {text}
        </motion.span>
      </Center>
    </motion.div>
  );
};

export default OptionButton;
