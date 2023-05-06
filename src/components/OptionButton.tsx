import { Center, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useOptionButton from "../hooks/componentHooks/useOptionButton";

const animDuration = 0.2;
const textDropDistance = 80;

interface IOptionButton {
  text: string;
  image?: any;
  width: number;
  height: number;
  fontSize?: number;
  animDelay?: number;
  action: () => void;
}

/**
 * Button displayed on the Home page
 *
 * @param text Text that is displayed on the button
 * @param image The image that is displayed on the button
 * @param width The width of the button
 * @param height The height of the button
 * @param fontSize The fontsize of the title of the button
 * @param animDelay The delay for the animations
 * @param action The function that runs when the button is clicked
 */
const OptionButton = ({
  text,
  width,
  height,
  fontSize = 16,
  animDelay = 0,
  image = null,
  action,
}: IOptionButton) => {
  const { state, functions } = useOptionButton(animDelay, action);
  const { justRendered, hovering, animationDelay } = state;
  const { handleMouseEnter, handleMouseLeave, handleHoverState, handleClick } =
    functions;

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
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
        scale: handleHoverState(1, 1.1),
      }}
      transition={{
        ease: "easeInOut",
        duration: animDuration,
        delay: animationDelay,
        scale: {
          duration: animDuration,
          delay: animationDelay,
        },
        y: {
          duration: animDuration * 3,
          delay: animationDelay,
        },
        width: {
          delay: animDuration * 5 + animationDelay,
          duration: animDuration * 1.5,
        },
        height: {
          delay: animDuration * 3 + animationDelay,
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
          animate={{
            y:
              justRendered || !image
                ? 0
                : hovering
                ? [`${textDropDistance}%`, "0%"]
                : ["0%", `${textDropDistance}%`],
            opacity: !image ? 1 : handleHoverState(0, 1),
          }}
          transition={{
            duration: animDuration,
          }}
        >
          {text}
        </motion.span>
        {image && (
          <motion.div
            style={{
              height: "60%",
              alignItems: "center",
              justifyContent: "center",
            }}
            animate={{
              opacity: handleHoverState(1, 0),
            }}
            transition={{
              ease: "easeInOut",
            }}
          >
            <Image src={image} alt="Button Image" boxSize="100%" />
          </motion.div>
        )}
      </Center>
    </motion.div>
  );
};

export default OptionButton;
