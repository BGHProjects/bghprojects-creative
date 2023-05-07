import { Center, Flex, HStack, Image, Text, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useGameDesignContext } from "../../../contexts/GameDesignContext";
import ViewGDDButton from "../../ViewGDDButton";
import GameDesignBackButton from "../GameDesignBackButton";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import GDDPageButton from "./GDDPageButton";
import { useState } from "react";

/**
 * The content that is displayed when a game is selected
 * on the Game Design Page
 */
const GameDesignGameContent = () => {
  const { transitionDuration, viewingGame } = useGameDesignContext();

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [renderedPageNumber, setRenderedPageNumber] = useState(0);

  const isLoading = renderedPageNumber !== pageNumber;

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

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
        src="/assets/images/game-design/backgrounds/Fram.png"
        boxSize="100%"
        objectFit="cover"
        objectPosition="center"
        position="absolute"
      />
      <Flex
        boxSize="100%"
        position="absolute"
        bg="rgba(0,0,0,0.5)"
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
        <TitleText fontFamily="Lora">FRAM</TitleText>
        <Center mt="40px">
          <ViewGDDButton gdd={"FRAM"} />
        </Center>
        <AppText fontSize="20px" mt="40px">
          Fram is a blockchain perfect information abstract strategy game. The
          target audience for Fram are people who are interested in other
          abstract strategy games, people who are interested in gridiron
          football, or those who have an interest in blockchain gaming. The game
          was inspired by both chess and gridiron football, and gameplay
          incorporates elements of both games.
          <br />
          <br />
          Fram was conceived as a community-driven game, incorporating several
          aspects that enable the game to grow with the community that plays it.
          A key aspect of Fram as a game is its composability and modularity. In
          contrast to other abstract strategy games, players are able to
          customise the game is a variety of ways, including the pieces used,
          the roles of either player, and the board played on.
          <br />
          <br />
          Fram is still in the design phase.
        </AppText>

        <AppText textAlign="left" fontSize="30px" mt="40px" w="100%">
          Game Design Document
        </AppText>

        <Flex
          width="100%"
          justifyContent="center"
          alignItems="center"
          my="40px"
          py="50px"
          position="relative"
          flexDir="column"
        >
          <Flex
            position="absolute"
            boxSize="100%"
            background="rgba(200,200,200,0.1)"
            filter="blur(10px)"
          />
          <Document
            file="/assets/gdds/fram.pdf"
            onLoadError={(err) => console.log(err)}
            onLoadSuccess={onDocumentLoadSuccess as any}
          >
            <Center position="relative" h="700px" w="500px">
              <Center position="absolute" boxSize="100%">
                <Page
                  key={renderedPageNumber}
                  pageNumber={renderedPageNumber}
                  width={500}
                  renderTextLayer={false}
                  onRenderSuccess={() => setRenderedPageNumber(pageNumber)}
                />
              </Center>
              <Center
                opacity={isLoading ? 0 : 1}
                position="absolute"
                boxSize="100%"
              >
                <Page
                  key={pageNumber}
                  pageNumber={pageNumber}
                  width={500}
                  renderTextLayer={false}
                  onRenderSuccess={() => setRenderedPageNumber(pageNumber)}
                />
              </Center>
            </Center>
          </Document>

          <HStack w="60%" justifyContent={"space-evenly"} mt="20px">
            <GDDPageButton
              which="prev"
              action={() => {
                setPageNumber(Math.max(1, pageNumber - 1));
              }}
            />
            <Text color="white" fontFamily="Electrolize" fontSize="24">
              {pageNumber} of {numPages}
            </Text>
            <GDDPageButton
              which="next"
              action={() => {
                setPageNumber(Math.min(numPages, pageNumber + 1));
              }}
            />
          </HStack>
        </Flex>

        <AppText textAlign="left" fontSize="30px" mt="40px" w="100%">
          Concept Art / Design
        </AppText>
        <HStack justifyContent="center" mt="40px" w="100%">
          <Image
            src="/assets/images/game-design/fram/Default Board.png"
            width="30%"
          />
          <Image
            src="/assets/images/game-design/fram/Orthogonal Movement.png"
            width="30%"
          />
          <Image
            src="/assets/images/game-design/fram/Diagonal Movement.png"
            width="30%"
          />
        </HStack>
        <HStack justifyContent="center" mt="20px" w="100%">
          <Image
            src="/assets/images/game-design/fram/Edge Movement.png"
            width="30%"
          />
          <Image
            src="/assets/images/game-design/fram/Vertex Movement.png"
            width="30%"
          />
        </HStack>
        <Center mt="60px">
          <ViewGDDButton gdd={"FRAM"} />
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
