import { Center, Grid, GridItem } from "@chakra-ui/react";
import GameDesignButton from "../components/GameDesign/GameDesignButton/GameDesignButton";
import PageContainer from "../components/PageContainer";
import PopUpText from "../components/PopUpText";
import ScreenAnimation from "../components/ScreenAnimation";
import ScreenTransition from "../components/ScreenTransition";
import BackButton from "../components/BackButton";
import { motion } from "framer-motion";
import GameDesignGameContent from "../components/GameDesign/GameDesignPageContent/GameDesignGameContent";
import {
  GameDesignViewed,
  useGameDesignContext,
} from "../contexts/GameDesignContext";

const animDelay = 0.33;

const options = [
  {
    image: "WorldEngine",
    text: "World Engine",
    fontFamily: "Exo2",
    gameDesign: GameDesignViewed.WorldEngine,
  },
  {
    image: "MetaRangers",
    text: "METARANGERS",
    fontFamily: "Iceland",
    gameDesign: GameDesignViewed.MetaRangers,
  },
  {
    image: "GoGetEm",
    text: "GoGetEm",
    fontFamily: "Quicksand",
    gameDesign: GameDesignViewed.GoGetEm,
  },
  {
    image: "Fram",
    text: "FRAM",
    fontFamily: "Lora",
    gameDesign: GameDesignViewed.Fram,
  },
  {
    image: "FabulaExMachina",
    text: "Fabula Ex Machina",
    fontFamily: "Varela",
    gameDesign: GameDesignViewed.FabulaExMachina,
  },
  {
    image: "BionicleTCG",
    text: "BIONICLE TCG",
    fontFamily: "Vollkorn",
    gameDesign: GameDesignViewed.BionicleTCG,
  },
];

/**
 * Page that holds the content for the Game Design
 * aspect of the portfolio
 */
const GameDesign = () => {
  const {
    setWhichGameDesign,
    transitionDuration,
    viewingGame,
    setGameDesignViewed,
  } = useGameDesignContext();

  const handleSetGameDesignViewed = (gameOption: GameDesignViewed) => {
    setGameDesignViewed(gameOption);
    setWhichGameDesign(gameOption);
  };

  return (
    <>
      <ScreenTransition />
      <BackButton animDelay={options.length * animDelay + 1} />
      <PageContainer>
        <ScreenAnimation />
        <motion.div
          style={{
            height: "100%",
            width: "100%",
          }}
          animate={{
            opacity: viewingGame ? [1, 0] : 1,
            display: viewingGame ? ["flex", "none"] : "flex",
          }}
          transition={{
            ease: "easeInOut",
            duration: transitionDuration,
            display: {
              delay: transitionDuration,
            },
          }}
        >
          <Center flexDir="column" boxSize="100%" zIndex={1}>
            <Center w="100%" h="40%">
              <PopUpText
                fullText={["Game Design"]}
                size={60}
                staggerTime={0.02}
              />
            </Center>

            <Grid
              templateColumns={"repeat(2,1fr)"}
              templateRows={"repeat(2,1fr)"}
              gap={10}
              p="20px"
              mt="40px"
              maxH="60%"
              overflowY="auto"
              sx={{
                "&::-webkit-scrollbar": {
                  w: "1",
                  mr: "10",
                },
                "&::-webkit-scrollbar-track": {
                  w: "6",
                },
                "&::-webkit-scrollbar-thumb": {
                  borderRadius: "10",
                  bg: "white",
                },
              }}
            >
              {options.map((option, index) => (
                <GridItem key={JSON.stringify(option)} w="440px" h="220px">
                  <Center boxSize="100%">
                    <GameDesignButton
                      animDelay={index * animDelay}
                      {...option}
                      action={() =>
                        handleSetGameDesignViewed(option.gameDesign)
                      }
                    />
                  </Center>
                </GridItem>
              ))}
            </Grid>
          </Center>
        </motion.div>
        <GameDesignGameContent />
      </PageContainer>
    </>
  );
};

export default GameDesign;
