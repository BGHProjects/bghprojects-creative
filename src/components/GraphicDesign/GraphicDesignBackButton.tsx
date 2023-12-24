import { motion } from "framer-motion";
import useAppButton from "../../hooks/componentHooks/useAppButton";
import { Center, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  GraphicDesignViewed,
  useGraphicDesignContext,
} from "../../contexts/GraphicDesignContext";

/**
 * Button that unselected the Game Design currently viewed
 * to return the user to the Game Design page
 */
const GraphicDesignBackButton = () => {
  const { setGraphicDesignViewed } = useGraphicDesignContext();

  const { functions } = useAppButton(0, () => {
    setGraphicDesignViewed(GraphicDesignViewed.None);
  });
  const { handleHoverState, handleMouseEnter, handleMouseLeave, handleClick } =
    functions;

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        zIndex: 2,
        alignSelf: "flex-start",
        marginBottom: "40px",
      }}
      animate={{
        opacity: [0, 1],
        scale: handleHoverState(1, 1.1),
      }}
      transition={{
        ease: "easeInOut",
      }}
    >
      <Center boxSize="100%">
        <ArrowBackIcon color="white" boxSize={7} mr="10px" />
        <Text color="white" fontFamily="Electrolize">
          Back to Graphic Design
        </Text>
      </Center>
    </motion.div>
  );
};

export default GraphicDesignBackButton;
