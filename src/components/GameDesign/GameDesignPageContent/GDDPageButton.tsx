import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useAppButton from "../../../hooks/componentHooks/useAppButton";
import buttonStyle from "../../../helpers/buttonStyle";

interface IGDDPageButton {
  animDelay?: number;
  which: "prev" | "next";
  action: () => void;
}

/**
 * Button used to navigate between pages of the
 * Game Design Document
 */
const GDDPageButton = ({ animDelay = 0, which, action }: IGDDPageButton) => {
  const { functions } = useAppButton(animDelay, () => action());
  const { handleHoverState, handleMouseEnter, handleMouseLeave, handleClick } =
    functions;

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        ...(buttonStyle(40, 40) as any),
        zIndex: 2,
        borderRadius: 40,
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
        {which === "prev" ? (
          <ArrowBackIcon color="white" boxSize={8} />
        ) : (
          <ArrowForwardIcon color="white" boxSize={8} />
        )}
      </Center>
    </motion.div>
  );
};

export default GDDPageButton;
