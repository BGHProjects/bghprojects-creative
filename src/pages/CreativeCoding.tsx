import { Center, Grid, GridItem } from "@chakra-ui/react";
import BackButton from "../components/BackButton";
import PageContainer from "../components/PageContainer";
import ScreenAnimation from "../components/ScreenAnimation";
import ScreenTransition from "../components/ScreenTransition";
import PopUpText from "../components/PopUpText";
import { customScrollBar } from "../consts/custom-scrollbar";
import CreativeCodingItemButton from "../components/CreativeCoding/CreativeCodingItemButton";

const animDelay = 0.33;
const buttonHeight = 180;
const buttonWidth = 350;
const containerPadding = 20;
const buttonScale = 1.2;

/**
 * UI component for the Creative Coding Page of the portfolio
 * @returns The page for the Creative Coding projects
 */
const CreativeCoding = () => {
  const imageLocationPrefix = "/assets/images/creative-coding/";
  const buttons = [
    {
      text: "Slicing Colours",
      image: imageLocationPrefix + "slicing-colours.svg",
      link: "https://slicing-colours.vercel.app/",
    },
  ];

  return (
    <>
      <ScreenTransition />
      <BackButton animDelay={buttons.length} />
      <PageContainer>
        <ScreenAnimation />
        <Center flexDir="column" boxSize="100%" zIndex={1}>
          <Center w="100%" h="40%">
            <PopUpText
              fullText={["Creative Coding"]}
              size={60}
              staggerTime={0.02}
            />
          </Center>

          <Grid
            templateColumns={"repeat(3,1fr)"}
            templateRows={"repeat(2,1fr)"}
            gap={10}
            overflowY="auto"
            sx={customScrollBar}
            w={
              buttonWidth * buttonScale * buttons.length + containerPadding * 2
            }
            p={`${containerPadding}px`}
            maxW="900px"
            maxH="600px"
            minH={buttonHeight * 2 + 200}
            minW={buttonWidth * 2 + 200}
          >
            {buttons.map((button, index) => (
              <GridItem key={JSON.stringify(button)}>
                <Center boxSize="100%">
                  <CreativeCodingItemButton
                    text={button.text}
                    image={button.image}
                    animDelay={(index + 1) * animDelay}
                    link={button.link}
                    height={buttonHeight}
                    width={buttonWidth}
                  />
                </Center>
              </GridItem>
            ))}
          </Grid>
        </Center>
      </PageContainer>
    </>
  );
};

export default CreativeCoding;
