import { Center, Flex, Image, Text, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { content } from "../../../consts/gameDesignContent";
import { useGameDesignContext } from "../../../contexts/GameDesignContext";
import ViewGDDButton from "../../ViewGDDButton";
import GameDesignBackButton from "../GameDesignBackButton";
import GDDViewer from "./GDDViewer";

/**
 * The content that is displayed when a game is selected
 * on the Game Design Page
 */
const GameDesignGameContent = () => {
  const { transitionDuration, viewingGame, whichGameDesign } =
    useGameDesignContext();

  const gameDesignContent = content[whichGameDesign as string];

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
        opacity: viewingGame ? [0, 1] : [1, 0],
        display: viewingGame ? "flex" : "none",
      }}
      transition={{
        ease: "easeInOut",
        display: {
          delay: viewingGame ? 0 : transitionDuration * 2,
        },
        height: {
          delay: transitionDuration,
          duration: transitionDuration,
        },
        delay: viewingGame ? transitionDuration : 0,
        duration: transitionDuration,
      }}
    >
      <Image
        src={`/assets/images/game-design/backgrounds/${whichGameDesign}.png`}
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
        <GameDesignBackButton />
        <TitleText fontFamily={gameDesignContent.fontFamily}>
          {gameDesignContent.title}
        </TitleText>
        <Center mt="40px">
          <ViewGDDButton />
        </Center>
        <AppText fontSize="20px" mt="40px">
          {gameDesignContent.textIntro}
        </AppText>

        <AppText textAlign="left" fontSize="30px" mt="40px" w="100%">
          Game Design Document
        </AppText>

        <GDDViewer />

        <AppText textAlign="left" fontSize="30px" mt="40px" w="100%">
          {gameDesignContent.contentTitle || null}
        </AppText>
        {gameDesignContent.content || null}
        <Center mt="60px">
          <ViewGDDButton />
        </Center>
      </Flex>
    </motion.div>
  );
};

const TitleText = chakra(Text, {
  baseStyle: {
    color: "white",
    fontSize: { base: "30px", md: "50px", lg: "65px" },
  },
});

const AppText = chakra(Text, {
  baseStyle: {
    color: "white",
    fontFamily: "Electrolize",
  },
});

export default GameDesignGameContent;
