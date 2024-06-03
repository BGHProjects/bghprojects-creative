import { Center, Grid, GridItem } from "@chakra-ui/react";
import BackButton from "../components/BackButton";
import PageContainer from "../components/PageContainer";
import ScreenAnimation from "../components/ScreenAnimation";
import ScreenTransition from "../components/ScreenTransition";
import PopUpText from "../components/PopUpText";
import { customScrollBar } from "../consts/custom-scrollbar";
import CreativeCodingItemButton from "../components/CreativeCoding/CreativeCodingItemButton";

const animDelay = 0.33;
const buttonHeight = 150;
const buttonWidth = 300;
const containerPadding = 20;
const buttonScale = 1.2;

const imageLocationPrefix = "/assets/images/writing/";
const buttons = [
  {
    text: "The Roots of Pessimism",
    image: imageLocationPrefix + "roots.jpg",
    link: "https://www.qutglass.com/the-roots-of-pessimism/",
  },
  {
    text: "The Magician",
    image: imageLocationPrefix + "magician.jpg",
    link: "https://www.qutglass.com/issue-9-grit-glitter/#flipbook-df_68464/21/",
  },
  {
    text: "The Symptoms of Suppression",
    image: imageLocationPrefix + "suppression.jpg",
    link: "https://www.qutglass.com/issue-5-paradise/#flipbook-df_68452/35/",
  },
  {
    text: "Between the Covers",
    image: imageLocationPrefix + "covers.jpg",
    link: "https://www.qutglass.com/issue-6-royal/#flipbook-df_68455/33/",
  },
];

/**
 * UI component for the Writing Page of the portfolio
 * @returns The page for the Writing projects
 */
const Writing = () => {
  return (
    <>
      <ScreenTransition />
      <BackButton animDelay={buttons.length} />
      <PageContainer>
        <ScreenAnimation />
        <Center flexDir="column" boxSize="100%" zIndex={1}>
          <Center w="100%" h="40%">
            <PopUpText fullText={["Writing"]} size={60} staggerTime={0.02} />
          </Center>

          <Grid
            templateColumns={"repeat(2,1fr)"}
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
            minW={buttonWidth * 2 + 100}
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

export default Writing;
