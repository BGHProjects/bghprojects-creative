import { Center, Image, Spinner } from "@chakra-ui/react";
import useAppButton from "../../hooks/componentHooks/useAppButton";
import { motion } from "framer-motion";

interface IAppButton {
  animDuration: number;
  animDelay?: number;
  action: () => void;
  filePath: string;
  ext: string;
}

/**
 * Button that represents each portfolio item
 * on the Generative AI Art page
 */
const GenAIArtItemButton = ({
  animDelay = 0,
  action,
  animDuration,
  filePath,
  ext,
}: IAppButton) => {
  const { state, functions } = useAppButton(animDelay, action);
  const { animationDelay } = state;
  const { handleMouseEnter, handleMouseLeave, handleHoverState, handleClick } =
    functions;

  const buttonSize = "15vw";

  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      style={{
        width: buttonSize,
        height: buttonSize,
        position: "relative",
        opacity: 0,
      }}
      transition={{
        ease: "easeInOut",
        duration: animDuration,
        delay: animationDelay,
        opacity: {
          duration: animDuration,
          delay: animationDelay + 1,
        },
      }}
    >
      <Image
        boxSize={buttonSize}
        position="absolute"
        fit="cover"
        fallback={<Spinner size="xl" color="white" />}
        src={`/assets/images/gen-ai-art/items/${filePath}/1${ext}`}
      ></Image>
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        animate={{
          scale: [0, 1],
          opacity: handleHoverState(0.5, 0),
        }}
        style={{
          width: buttonSize,
          height: buttonSize,
          scale: 0,
          opacity: 1,
          position: "absolute",
        }}
        transition={{
          ease: "easeInOut",
          duration: animDuration,
          delay: animationDelay,
          scale: {
            duration: animDuration,
            delay: animationDelay + 1,
          },
          opacity: {
            duration: 0.2,
          },
        }}
      >
        <Center boxSize="100%" bg="black"></Center>
      </motion.div>
    </motion.div>
  );
};

export default GenAIArtItemButton;
