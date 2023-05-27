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
import { useEffect, useRef, useState } from "react";

const transitionDuration = 1;

interface IContentTemplate {
  conceptChosen: Concept;
  thisConcept: Concept;
  contentDetails: any[];
  initialImages: string[];
  contentTitle: string;
  initialRender: boolean;
}

/**
 * Component that renders the content of the selected Concept Art Section
 * @param conceptChosen The concept that the user has chosen from the Concept Art menu
 * @param thisConcept The concept of this instantiated ContentTemplate
 * @param contentDetails What is displayed on this page
 * @param initialImages The initial images that this section is based off of
 * @param contentTitle The title of the section
 * @param initialRender Whether or not this component is in its initial render
 */
const ContentTemplate = ({
  conceptChosen,
  thisConcept,
  contentDetails,
  initialImages,
  contentTitle,
  initialRender,
}: IContentTemplate) => {
  const [viewing, setViewing] = useState(false);

  const thisRef = useRef();

  useEffect(() => {
    setViewing(conceptChosen === thisConcept);
  }, [conceptChosen]);

  const contentActual = () =>
    contentDetails.map((detail) => <DisplayImageRow {...detail} />);

  const content = [
    <VStack alignItems="center" mt="100px" w="100%">
      <Text fontSize="24" color="white" fontFamily="Electrolize">
        Initial Designs
      </Text>
      <HStack justifyContent="center" mt="0px" w="100%">
        {initialImages.map((image) => (
          <Image
            key={image}
            src={`/assets/images/concept-art/${image}`}
            width="40%"
          />
        ))}
      </HStack>
    </VStack>,
    ...contentActual(),
  ];

  return (
    <motion.div
      ref={thisRef as any}
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: "0%",
        opacity: 0,
        zIndex: 2,
        flexDirection: "column",
      }}
      animate={{
        opacity: initialRender ? 0 : viewing ? [0, 1] : 0,
        display: viewing ? "flex" : "none",
      }}
      transition={{
        ease: "easeInOut",
        display: {
          delay: transitionDuration,
        },
        height: {
          delay: transitionDuration,
          duration: transitionDuration,
        },
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
          <AppFont fontSize="36">{contentTitle}</AppFont>
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

export default ContentTemplate;
