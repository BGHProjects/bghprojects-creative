import { Center, Grid, GridItem } from "@chakra-ui/react";
import BackButton from "../components/BackButton";
import {
  GraphicDesignViewed,
  useGraphicDesignContext,
} from "../contexts/GraphicDesignContext";
import ScreenTransition from "../components/ScreenTransition";
import PageContainer from "../components/PageContainer";
import ScreenAnimation from "../components/ScreenAnimation";
import { motion } from "framer-motion";
import PopUpText from "../components/PopUpText";
import HomePageButton from "../components/HomePageButton/HomePageButton";
import GraphicDesignContentFrame from "../components/GraphicDesign/GraphicDesignContentFrame";

const animDelay = 0.33;
const buttonHeight = 100;
const buttonWidth = 250;
const containerPadding = 20;
const buttonScale = 1.2;

/**
 * Page that holds the content for the Graphic Design
 * aspect of the portfolio
 */
const GraphicDesign = () => {
  const {
    setWhichGraphicDesign,
    transitionDuration,
    viewingDesign,
    setGraphicDesignViewed,
  } = useGraphicDesignContext();

  const handleSetGraphicDesignViewed = (graphicOption: GraphicDesignViewed) => {
    setGraphicDesignViewed(graphicOption);
    setWhichGraphicDesign(graphicOption);
  };

  const buttons = [
    {
      text: "Covenant Currency",
      image: "covenant-currency-logo.png",
      action: () =>
        handleSetGraphicDesignViewed(GraphicDesignViewed.CovenantCurrency),
    },
    {
      text: "Bionicle TCG",
      image: "bionicle-tcg-logo.png",
      action: () =>
        handleSetGraphicDesignViewed(GraphicDesignViewed.BionicleTCG),
    },
    {
      text: "RENDER Magazine",
      image: "magazine-icon.png",
      action: () =>
        handleSetGraphicDesignViewed(GraphicDesignViewed.RenderMagazine),
    },
    {
      text: "Braveborne Saga Covers",
      image: "braveborne-logo.png",
      action: () =>
        handleSetGraphicDesignViewed(GraphicDesignViewed.BraveborneCovers),
    },
    {
      text: "Helldivers Jersey",
      image: "helldivers-jersey-logo.png",
      action: () =>
        handleSetGraphicDesignViewed(GraphicDesignViewed.HelldiversJersey),
    },
    {
      text: "NRBA Promo Media",
      image: "nrba-media.png",
      action: () => handleSetGraphicDesignViewed(GraphicDesignViewed.NRBAMedia),
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
                fullText={["Graphic Design"]}
                size={60}
                staggerTime={0.02}
              />
            </Center>

            <Grid
              templateColumns={"repeat(3,1fr)"}
              templateRows={"repeat(2,1fr)"}
              gap={10}
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
                        image: `/assets/images/graphic-design/graphic-design-items/${button.image}`,
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
        <GraphicDesignContentFrame />
      </PageContainer>
    </>
  );
};

export default GraphicDesign;
