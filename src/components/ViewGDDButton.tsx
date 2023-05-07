import { motion } from "framer-motion";
import AppButton from "./AppButton";
import { Center, Text, chakra } from "@chakra-ui/react";

const animDelay = 1;

/**
 * Button that opens the GDD of the selected Game
 * that is being viewed
 */
const ViewGDDButton = ({ gdd }: { gdd: string }) => {
  console.log("gdd", gdd);

  return (
    <AppButton
      width={200}
      height={80}
      animDuration={0.2}
      action={() => {}}
      animDelay={animDelay}
    >
      <motion.div
        style={motionStyle as any}
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          delay: animDelay + 1,
        }}
      >
        <ButtonContentContainer>
          <ButtonLabel>View GDD</ButtonLabel>
        </ButtonContentContainer>
      </motion.div>
    </AppButton>
  );
};

const motionStyle = {
  height: "100%",
  width: "100%",
  opacity: 0,
  position: "relative",
};

const ButtonContentContainer = chakra(Center, {
  baseStyle: {
    backgroundColor: "rgba(0,0,0,0.4)",
    position: "absolute",
    boxSize: "100%",
    borderRadius: "6px",
  },
});

const ButtonLabel = chakra(Text, {
  baseStyle: {
    position: "absolute",
    textAlign: "center",
    color: "white",
    fontFamily: "Electrolize",
    fontSize: 30,
  },
});

export default ViewGDDButton;
