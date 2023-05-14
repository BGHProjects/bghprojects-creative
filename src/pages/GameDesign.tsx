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
          <Center flexDir="column" boxSize="100%">
            <PopUpText
              fullText={["Game Design"]}
              size={60}
              staggerTime={0.02}
            />
            <Grid
              templateColumns={"repeat(2,1fr)"}
              templateRows={"repeat(2,1fr)"}
              gap={10}
              mt="40px"
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
