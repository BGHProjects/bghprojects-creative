import { Center, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useGraphicDesignContext } from "../../contexts/GraphicDesignContext";

/**
 * The frame that holds the content that is displayed when a
 * graphic design item is selected on the Graphic Design page
 */
export const GraphicDesignContentFrame = () => {
  const { transitionDuration, viewingDesign, whichGraphicDesign } =
    useGraphicDesignContext();

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
        src={`/assets/images/game-design/backgrounds/${whichGraphicDesign}.png`}
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
