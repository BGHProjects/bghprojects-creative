import { ArrowBackIcon } from "@chakra-ui/icons";
import { Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useAppButton from "../../hooks/componentHooks/useAppButton";

interface IConceptArtBackButton {
  action: () => void;
}

/**
 * Button that unselects the concept currently viewed
 * to return the user to the Concept Art page
 */
const ConceptArtBackButton = ({ action }: IConceptArtBackButton) => {
  const { functions } = useAppButton(0, () => action());
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
        position: "absolute",
        top: "5%",
        left: "10%",
      }}
      animate={{
        opacity: [0, 1],
        scale: handleHoverState(1, 1.1),
      }}
      transition={{
        ease: "easeInOut",
        opacity: {
          delay: 1,
        },
      }}
    >
      <Center boxSize="100%">
        <ArrowBackIcon color="white" boxSize={7} mr="10px" />
        <Text color="white" fontFamily="Electrolize">
          Back to Concept Art
        </Text>
      </Center>
    </motion.div>
  );
};

export default ConceptArtBackButton;
