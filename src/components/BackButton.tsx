import { ArrowBackIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import buttonStyle from "../helpers/buttonStyle";
import useAppButton from "../hooks/componentHooks/useAppButton";
import useHandleNavigation from "../hooks/useHandleNavigation";

interface IBackButton {
  animDelay?: number;
}

/**
 * Button used to navigate to the previous page
 */
const BackButton = ({ animDelay = 0 }: IBackButton) => {
  const { handleNavigate } = useHandleNavigation();

  const { functions } = useAppButton(animDelay, () => handleNavigate(-1));
  const { handleHoverState, handleMouseEnter, handleMouseLeave, handleClick } =
    functions;

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        ...(buttonStyle(50, 50) as any),
        position: "absolute",
        top: "5%",
        left: "5%",
        zIndex: 2,
        borderRadius: 50,
      }}
      animate={{
        opacity: [0, 1],
        scale: handleHoverState(1, 1.2),
      }}
      transition={{
        opacity: {
          delay: animDelay,
        },
      }}
    >
      <Center boxSize="100%">
        <ArrowBackIcon color="white" boxSize={10} />
      </Center>
    </motion.div>
  );
};

export default BackButton;
