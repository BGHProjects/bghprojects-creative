import { Center, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton";
import GenAIArtItemButton from "../components/GenAIArt/GenAIArtItemButton";
import PageContainer from "../components/PageContainer";
import PopUpText from "../components/PopUpText";
import ScreenAnimation from "../components/ScreenAnimation";
import ScreenTransition from "../components/ScreenTransition";
import {
  GenAIArtViewed,
  useGenAIArtContext,
} from "../contexts/GenAIArtContext";
import { content } from "../consts/gen-ai-art/content";
import GenAIArtContentFrame from "../components/GenAIArt/GenAIArtContentFrame";

const animDelay = 0.05;

const GenAIArt = () => {
  const {
    setWhichGenAIArt,
    transitionDuration,
    viewingArt,
    setGenAIArtViewed,
  } = useGenAIArtContext();

  const handleSetGenAIArtViewed = (artOption: GenAIArtViewed) => {
    setGenAIArtViewed(artOption);
    setWhichGenAIArt(artOption);
  };

  return (
    <>
      <ScreenTransition />
      <BackButton animDelay={content.length * animDelay + 1} />
      <PageContainer>
        <ScreenAnimation />
        <motion.div
          style={{
            height: "100%",
            width: "100%",
          }}
          animate={{
            opacity: viewingArt ? [1, 0] : 1,
            display: viewingArt ? ["flex", "none"] : "flex",
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
                fullText={["Generative AI Art"]}
                size={60}
                staggerTime={0.02}
              />
            </Center>

            <Flex
              wrap="wrap"
              mt="40px"
              maxH="60%"
              minH="30%"
              overflowY="auto"
              width="62vw"
              minWidth="600px"
              gap="0px"
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
              {Object.entries(content).map((option, index) => {
                return (
                  <GenAIArtItemButton
                    key={JSON.stringify(option[0])}
                    {...option[1]}
                    action={() => {
                      handleSetGenAIArtViewed(option[1].artOption);
                    }}
                    animDuration={0.1}
                    animDelay={index * animDelay}
                  />
                );
              })}
            </Flex>
          </Center>
        </motion.div>
        <GenAIArtContentFrame />
      </PageContainer>
    </>
  );
};

export default GenAIArt;
