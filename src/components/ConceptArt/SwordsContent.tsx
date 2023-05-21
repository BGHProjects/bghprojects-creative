import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Center,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Concept } from "../../pages/ConceptArt";
import DisplayImageRow from "../DisplayImageRow";

const transitionDuration = 1;

interface ISwordsContent {
  concept: Concept;
}

const SwordsContent = ({ concept }: ISwordsContent) => {
  const viewing = concept === Concept.Swords;

  const contentDetails = [
    {
      imagePath: "concept-art/swords/row1/Sword Row 1 - Variant",
      noOfItems: 4,
      height: "70%",
    },
    {
      imagePath: "concept-art/swords/row2/Sword Row 2 - Variant",
      noOfItems: 5,
      height: "70%",
    },
    {
      imagePath: "concept-art/swords/row3/Sword Row 3 - Variant",
      noOfItems: 5,
      height: "70%",
    },
    {
      imagePath: "concept-art/swords/row4/Sword Row 4 - Variant",
      noOfItems: 4,
      height: "70%",
    },
    {
      imagePath: "concept-art/swords/row5/Sword Row 5 - Variant",
      noOfItems: 4,
      height: "70%",
    },
  ];

  const contentActual = () =>
    contentDetails.map((detail) => <DisplayImageRow {...detail} />);

  const content = [
    <VStack alignItems="center" mt="100px" w="100%">
      <Text fontSize="24" color="white" fontFamily="Electrolize">
        Initial Designs
      </Text>
      <HStack justifyContent="center" mt="0px" w="100%">
        <Image
          src="/assets/images/concept-art/swords/initial-1.svg"
          width="40%"
        />
        <Image
          src="/assets/images/concept-art/swords/initial-2.svg"
          width="40%"
        />
      </HStack>
    </VStack>,
    ...contentActual(),
  ];

  return (
    <motion.div
      style={{
        height: "100vh",
        width: "100vw",
        display: "none",
        position: "absolute",
        top: "0%",
        opacity: 0,
        zIndex: 2,
        flexDirection: "column",
      }}
      animate={{
        opacity: viewing ? [0, 1] : [1, 0],
        display: viewing ? "flex" : "none",
      }}
      transition={{
        ease: "easeInOut",
        display: {
          delay: viewing ? 0 : transitionDuration,
        },
        height: {
          delay: transitionDuration,
          duration: transitionDuration,
        },
        delay: viewing ? transitionDuration : 0,
        duration: transitionDuration,
      }}
    >
      <Flex
        minHeight="100vh"
        minWidth="100vw"
        overflowY="auto"
        overflowX="hidden"
        flexDir="column"
        sx={{
          "&::-webkit-scrollbar": {
            w: "2",
            mr: "10",
          },
          "&::-webkit-scrollbar-track": {
            w: "3",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "10",
            bg: "white",
          },
        }}
      >
        <AbsoluteContent top="40px">
          <AppFont fontSize="36">Swords</AppFont>
        </AbsoluteContent>

        <AbsoluteContent top="85%" flexDir="column">
          <AppFont fontSize="24">Scroll Down</AppFont>
          <ChevronDownIcon boxSize={7} color="white" />
        </AbsoluteContent>

        {content.map((item) => (
          <ContentItemContainer key={item.toString()}>
            {item}
          </ContentItemContainer>
        ))}
      </Flex>
    </motion.div>
  );
};

const ContentItemContainer = chakra(Center, {
  baseStyle: {
    minHeight: "100vh",
    minWidth: "100vw",
    bgGradient: "linear(to-r, #7D7D7D, #C6C6C6)",
  },
});

const AppFont = chakra(Text, {
  baseStyle: {
    fontFamily: "Electrolize",
    color: "white",
  },
});

const AbsoluteContent = chakra(Center, {
  baseStyle: {
    w: "100%",
    h: "fit-content",
    py: "50px",
    position: "absolute",
  },
});

export default SwordsContent;
