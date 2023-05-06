import { Center, Grid, GridItem } from "@chakra-ui/react";
import GameDesignButton from "../components/GameDesignButton/GameDesignButton";
import PageContainer from "../components/PageContainer";
import PopUpText from "../components/PopUpText";
import ScreenAnimation from "../components/ScreenAnimation";
import ScreenTransition from "../components/ScreenTransition";
import BackButton from "../components/BackButton";

const animDelay = 0.33;

const options = [
  {
    image: "Fram",
    text: "FRAM",
    fontFamily: "Lora",
  },
  {
    image: "MetaRangers",
    text: "METARANGERS",
    fontFamily: "Iceland",
  },
  {
    image: "WorldEngine",
    text: "World Engine",
    fontFamily: "Exo2",
  },
  {
    image: "MMBG",
    text: "GoGetEm",
    fontFamily: "Quicksand",
  },
];

/**
 * Page that holds the content for the Game Design
 * aspect of the portfolio
 */
const GameDesign = () => {
  return (
    <>
      <ScreenTransition />
      <BackButton animDelay={options.length * animDelay + 1} />
      <ScreenTransition />
      <PageContainer>
        <ScreenAnimation />
        <PopUpText fullText={["Game Design"]} size={60} staggerTime={0.02} />
        <Grid
          templateColumns={"repeat(2,1fr)"}
          templateRows={"repeat(2,1fr)"}
          gap={10}
          mt="40px"
        >
          {options.map((option, index) => (
            <GridItem key={option.toString()} w="440px" h="220px">
              <Center boxSize="100%">
                <GameDesignButton animDelay={index * animDelay} {...option} />
              </Center>
            </GridItem>
          ))}
        </Grid>
      </PageContainer>
    </>
  );
};

export default GameDesign;
