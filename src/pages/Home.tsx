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
      image: "home-logos/controller.svg",
      action: () => handleNavigate("/game-design"),
    },
    {
      text: "Concept Art",
      image: "home-logos/concept-art-logo.svg",
      action: () => alert("Under Construction. Visit again soon."),
    },
    {
      text: "Graphic Design",
      image: "home-logos/graphic-design-logo.svg",
      action: () => handleNavigate("/graphic-design"),
    },
    {
      text: "Generative AI Art",
      image: "home-logos/gen_ai_logo.png",
      action: () => handleNavigate("/gen-ai-art"),
    },
    {
      text: "UI / UX Design",
      image: "home-logos/ui-ux-logo.png",
      action: () => handleNavigate("/ui-ux-design"),
    },
    {
      text: "Creative Coding",
      image: "home-logos/creative-coding.png",
      action: () => handleNavigate("/creative-coding"),
    },
    {
      text: "Worldbuilding",
      image: "home-logos/worldbuilding.png",
      action: () => handleNavigate("/worldbuilding"),
    },
    {
      text: "How I'm Learning",
      image: "home-logos/learning.png",
      action: () => handleNavigate("/how-im-learning"),
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
          templateColumns={"repeat(3,1fr)"}
          templateRows={"repeat(2,1fr)"}
          gap={10}
          w={buttonWidth * buttonScale * buttons.length + containerPadding * 2}
          p={`${containerPadding}px`}
          pt="100px"
          maxW="900px"
          maxH="600px"
          minH={buttonHeight * 2 + 200}
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
