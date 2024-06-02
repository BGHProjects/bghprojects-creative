import { Flex, Image, chakra, Text } from "@chakra-ui/react";
import { content } from "../../consts/worldbuilding/content";
import { useWorldbuildingContext } from "../../contexts/WorldbuildingContext";
import { motion } from "framer-motion";
import { customScrollBar } from "../../consts/custom-scrollbar";
import WorldbuildingBackButton from "./WorldbuildingBackButton";

const WorldbuildingContentFrame = () => {
  const {
    transitionDuration,
    viewingWorldBuildingItem,
    whichWorldbuildingItem,
  } = useWorldbuildingContext();

  const wbContent = content[whichWorldbuildingItem as string];

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
        opacity: viewingWorldBuildingItem ? [0, 1] : [1, 0],
        display: viewingWorldBuildingItem ? "flex" : "none",
      }}
      transition={{
        ease: "easeInOut",
        display: {
          delay: viewingWorldBuildingItem ? 0 : transitionDuration * 2,
        },
        height: {
          delay: transitionDuration,
          duration: transitionDuration,
        },
        delay: viewingWorldBuildingItem ? transitionDuration : 0,
        duration: transitionDuration,
      }}
    >
      <Image
        src={`/assets/images/worldbuilding/items/${wbContent.background}`}
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
        <WorldbuildingBackButton />
        <TitleText>{wbContent.title}</TitleText>
        {wbContent.content}
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

export default WorldbuildingContentFrame;
