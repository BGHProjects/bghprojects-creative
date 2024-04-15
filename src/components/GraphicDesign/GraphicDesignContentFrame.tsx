import { Flex, Image, Text, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useGraphicDesignContext } from "../../contexts/GraphicDesignContext";
import { content } from "../../consts/graphic-design/content";
import GraphicDesignBackButton from "./GraphicDesignBackButton";
import { customScrollBar } from "../../consts/custom-scrollbar";

/**
 * The frame that holds the content that is displayed when a
 * graphic design item is selected on the Graphic Design page
 */
const GraphicDesignContentFrame = () => {
  const { transitionDuration, viewingDesign, whichGraphicDesign } =
    useGraphicDesignContext();

  const gdContent = content[whichGraphicDesign as string];

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
        src={`/assets/images/graphic-design/backgrounds/${gdContent.background}`}
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
        px={{ base: "10px", md: "40px", lg: "40px" }}
        sx={customScrollBar}
      >
        <GraphicDesignBackButton />
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

export default GraphicDesignContentFrame;
