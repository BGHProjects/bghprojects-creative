import { Center, Grid, GridItem } from "@chakra-ui/react";
import HomePageButton from "../components/HomePageButton/HomePageButton";
import PageContainer from "../components/PageContainer";
import PopUpText from "../components/PopUpText";
import ScreenAnimation from "../components/ScreenAnimation";
import ScreenTransition from "../components/ScreenTransition";
import useHandleNavigation from "../hooks/useHandleNavigation";

const buttonHeight = 100;
const buttonWidth = 250;
const containerPadding = 20;
const buttonScale = 1.2;

const titleText = ["BGH Projects", "Creative Portfolio"];
/**
 * The initial page that the user lands on
 * when they visit the portfolio
 */
const Home = () => {
  const optionButtonProps = {
    height: buttonHeight,
    width: buttonWidth,
    fontSize: 24,
    animDuration: 0.2,
  };

  const buttons = [
    {
      text: "Game Design",
      image: "controller.svg",
      action: () => handleNavigate("/game-design"),
    },
    {
      text: "Concept Art",
      image: "concept-art-logo.svg",
      action: () => handleNavigate("/concept-art"),
    },
  ];

  const { handleNavigate } = useHandleNavigation();

  return (
    <>
      <ScreenTransition />
      <PageContainer>
        <ScreenAnimation />
        <PopUpText fullText={titleText} size={80} staggerTime={0.02} />
        <Grid
          templateColumns={"repeat(2,1fr)"}
          templateRows={"repeat(2,1fr)"}
          gap={10}
          w={buttonWidth * buttonScale * buttons.length + containerPadding}
          h={buttonHeight * buttonScale * buttons.length + containerPadding}
          p={`${containerPadding}px`}
          maxW="800px"
          maxH="800px"
        >
          {buttons.map((button, index) => (
            <GridItem key={JSON.stringify(button)}>
              <Center boxSize="100%">
                <HomePageButton
                  {...{
                    ...optionButtonProps,
                    text: button.text,
                    image: `/assets/images/${button.image}`,
                    animDelay: 0.25 * index + 1,
                    action: button.action,
                  }}
                />
              </Center>
            </GridItem>
          ))}
        </Grid>
      </PageContainer>
    </>
  );
};

export default Home;
