import { Flex, Image, Text, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useUIUXDesignContext } from "../../contexts/UIUXDesignContext";
import { content } from "../../consts/ui-ux-design/content";
import UIUXDesignBackButton from "./UIUXDesignBackButton";

/**
 * The frame that holds the content that is displayed when a
 * UI UX design item is selected on the UIUX Design page
 */
const UIUXDesignContentFrame = () => {
  const { transitionDuration, viewingDesign, whichUIUXDesign } =
    useUIUXDesignContext();

  const gdContent = content[whichUIUXDesign as string];

  return (
    <motion.div
      style={{
        height: "100vh",
        width: "60vw",
        minWidth: "600px",
        backgroundColor: "black",
        zIndex: 0,
        position: "absolute",
        display: "none",
        top: "0%",
        opacity: 0,
      }}
      animate={{
        opacity: viewingDesign ? [0, 1] : [1, 0],
        display: viewingDesign ? "flex" : "none",
      }}
      transition={{
        ease: "easeInOut",
        display: {
          delay: viewingDesign ? 0 : transitionDuration * 2,
        },
        height: {
          delay: transitionDuration,
          duration: transitionDuration,
        },
        delay: viewingDesign ? transitionDuration : 0,
        duration: transitionDuration,
      }}
    >
      <Image
        src={`/assets/images/ui-ux-design/backgrounds/${gdContent.background}`}
        boxSize="100%"
        objectFit="cover"
        objectPosition="center"
        position="absolute"
      />
      <Flex
        boxSize="100%"
        position="absolute"
        bg="rgba(0,0,0,0.8)"
        flexDir="column"
        alignItems="center"
        pt="40px"
        pb="100px"
        overflow="auto"
        px={{ base: "10px", md: "40px", lg: "70px" }}
        sx={{
          "&::-webkit-scrollbar": {
            w: "2",
            mr: "10",
          },
          "&::-webkit-scrollbar-track": {
            w: "3",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "10",
            bg: "white",
          },
        }}
      >
        <UIUXDesignBackButton />
        <TitleText>{gdContent.title}</TitleText>
        {gdContent.content}
      </Flex>
    </motion.div>
  );
};

const TitleText = chakra(Text, {
  baseStyle: {
    color: "white",
    fontFamily: "Electrolize",
    fontSize: { base: "30px", md: "50px", lg: "65px" },
  },
});

export default UIUXDesignContentFrame;