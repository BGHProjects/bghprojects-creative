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

const transitionDuration = 1;

interface IThanosSignatureShoe {
  concept: Concept;
}

const ThanosSignatureShoeContent = ({ concept }: IThanosSignatureShoe) => {
  const viewing = concept === Concept.ThanosSignatureShoe;

  const content = [
    <VStack alignItems="center" mt="100px" w="100%">
      <Text fontSize="24" color="white" fontFamily="Electrolize">
        Initial Designs
      </Text>
      <HStack justifyContent="center" mt="0px" w="100%">
        <Image
          src="/assets/images/concept-art/thanos-signature-shoe/initial-1.png"
          width="40%"
        />
      </HStack>
    </VStack>,
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
          <AppFont fontSize="36">Thanos Signature Shoe (In Progress)</AppFont>
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

export default ThanosSignatureShoeContent;
