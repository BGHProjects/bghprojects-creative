import { ArrowBackIcon } from "@chakra-ui/icons";
import { Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  WorldbuildingItemViewed,
  useWorldbuildingContext,
} from "../../contexts/WorldbuildingContext";
import useAppButton from "../../hooks/componentHooks/useAppButton";

/**
 * Button that unselects the Worldbuilding item currently viewed
 * to return the user to the Worldbuilding page
 */
const WorldbuildingBackButton = () => {
  const { setWorldBuildingItemViewed } = useWorldbuildingContext();

  const { functions } = useAppButton(0, () => {
    setWorldBuildingItemViewed(WorldbuildingItemViewed.None);
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
          Back to Worldbuilding
        </Text>
      </Center>
    </motion.div>
  );
};

export default WorldbuildingBackButton;
