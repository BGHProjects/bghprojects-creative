import { Center, Grid, GridItem } from "@chakra-ui/react";
import BackButton from "../components/BackButton";
import {
  UIUXDesignViewed,
  useUIUXDesignContext,
} from "../contexts/UIUXDesignContext";
import ScreenTransition from "../components/ScreenTransition";
import PageContainer from "../components/PageContainer";
import ScreenAnimation from "../components/ScreenAnimation";
import { motion } from "framer-motion";
import PopUpText from "../components/PopUpText";
import HomePageButton from "../components/HomePageButton/HomePageButton";
import UIUXDesignContentFrame from "../components/UIUXDesign/UIUXDesignContentFrame";
import { customScrollBar } from "../consts/custom-scrollbar";

const animDelay = 0.33;
const buttonHeight = 100;
const buttonWidth = 250;
const containerPadding = 20;
const buttonScale = 1.2;

/**
 * Page that holds the content for the UI UX Design
 * aspect of the portfolio
 */
const UIUXDesign = () => {
  const {
    setWhichUIUXDesign,
    transitionDuration,
    viewingDesign,
    setUIUXDesignViewed,
  } = useUIUXDesignContext();

  const handleSetUIUXDesignViewed = (UIUXOption: UIUXDesignViewed) => {
    setUIUXDesignViewed(UIUXOption);
    setWhichUIUXDesign(UIUXOption);
  };

  const buttons = [
    {
      text: "To The Stars",
      image: "to-the-stars-logo.png",
      action: () => handleSetUIUXDesignViewed(UIUXDesignViewed.ToTheStars),
    },
    {
      text: "PULSE",
      image: "pulse-logo.png",
      action: () => handleSetUIUXDesignViewed(UIUXDesignViewed.Pulse),
    },
    {
      text: "KICKS",
      image: "kicks-logo.png",
      action: () => handleSetUIUXDesignViewed(UIUXDesignViewed.Kicks),
    },
    {
      text: "Sol FPS Loadout Menu",
      image: "sol-logo.png",
      action: () => handleSetUIUXDesignViewed(UIUXDesignViewed.Sol),
    },
    {
      text: "Vanguard HeroCall",
      image: "vanguard-herocall-logo.png",
      action: () =>
        handleSetUIUXDesignViewed(UIUXDesignViewed.VanguardHeroCall),
    },
  ];

  const optionButtonProps = {
    height: buttonHeight,
    width: buttonWidth,
    fontSize: 24,
    animDuration: 0.2,
  };

  return (
    <>
      <ScreenTransition />
      <BackButton animDelay={buttons.length * animDelay + 1} />
      <PageContainer>
        <ScreenAnimation />
        <motion.div
          style={{
            height: "100%",
            width: "100%",
          }}
          animate={{
            opacity: viewingDesign ? [1, 0] : 1,
            display: viewingDesign ? ["flex", "none"] : "flex",
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
                fullText={["UI / UX Design"]}
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
                buttonWidth * buttonScale * buttons.length +
                containerPadding * 2
              }
              p={`${containerPadding}px`}
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
                        image: `/assets/images/ui-ux-design/ui-ux-design-items/${button.image}`,
                        animDelay: 0.25 * index + 1,
                        action: button.action,
                      }}
                    />
                  </Center>
                </GridItem>
              ))}
            </Grid>
          </Center>
        </motion.div>
        <UIUXDesignContentFrame />
      </PageContainer>
    </>
  );
};

export default UIUXDesign;
