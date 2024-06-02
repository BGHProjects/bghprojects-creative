import { Center, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton";
import ImageButton from "../components/ImageButton";
import PageContainer from "../components/PageContainer";
import PopUpText from "../components/PopUpText";
import ScreenAnimation from "../components/ScreenAnimation";
import ScreenTransition from "../components/ScreenTransition";
import {
  WorldbuildingItemViewed,
  useWorldbuildingContext,
} from "../contexts/WorldbuildingContext";
import WorldbuildingContentFrame from "../components/Worldbuilding/WorldbuildingContentFrame";

const animDelay = 0.33;
const buttonHeight = 150;
const buttonWidth = 300;
const containerPadding = 20;
const buttonScale = 1.2;

/**
 * UI component for the Worldbuilding Page of the portfolio
 * @returns The page for the Worldbuilding projects
 */
const WorldBuilding = () => {
  const {
    setWhichWorldBuildingItem,
    transitionDuration,
    viewingWorldBuildingItem,
    setWorldBuildingItemViewed,
  } = useWorldbuildingContext();

  const handleSetWorldbuildingItemViewed = (
    worldbuildingItem: WorldbuildingItemViewed
  ) => {
    setWhichWorldBuildingItem(worldbuildingItem);
    setWorldBuildingItemViewed(worldbuildingItem);
  };

  const imageLocationPrefix = "/assets/images/worldbuilding/items/";
  const buttons = [
    {
      text: "Suumnavor (The Crystal World)",
      image: imageLocationPrefix + "crystalworld.jpg",
      action: () =>
        handleSetWorldbuildingItemViewed(WorldbuildingItemViewed.CrystalWorld),
    },
  ];

  return (
    <>
      <ScreenTransition />
      <BackButton animDelay={buttons.length} />
      <PageContainer>
        <ScreenAnimation />
        <motion.div
          style={{
            height: "100%",
            width: "100%",
          }}
          animate={{
            opacity: viewingWorldBuildingItem ? [1, 0] : 1,
            display: viewingWorldBuildingItem ? ["flex", "none"] : "flex",
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
                fullText={["Worldbuilding"]}
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
                    <ImageButton
                      width={buttonWidth}
                      height={buttonHeight}
                      text={button.text}
                      image={button.image}
                      animDelay={index * animDelay}
                      action={button.action}
                      textSize={32}
                    />
                  </Center>
                </GridItem>
              ))}
            </Grid>
          </Center>
        </motion.div>
        <WorldbuildingContentFrame />
      </PageContainer>
    </>
  );
};

export default WorldBuilding;
