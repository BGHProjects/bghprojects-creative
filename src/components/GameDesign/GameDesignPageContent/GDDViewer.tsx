import {
  Center,
  Flex,
  HStack,
  Text,
  chakra,
  Image,
  Spinner,
} from "@chakra-ui/react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useGameDesignContext } from "../../../contexts/GameDesignContext";
import GDDPageButton from "./GDDPageButton";
import { lowerCase } from "lodash";

/**
 * Component that renders a viewable Game Design Document
 * in the selected Game Design game's section
 */
const GDDViewer = () => {
  const { gddPageNumber, setGDDPageNumber, whichGameDesign, whichImages } =
    useGameDesignContext();

  const images = whichImages[whichGameDesign as string];

  return (
    <ContentContainer>
      <BackgroundBlur />
      <Center position="relative" h="700px" w="500px">
        <Center position="absolute" boxSize="100%">
          <Image
            src={`/assets/images/game-design/gdds/${lowerCase(
              whichGameDesign as string
            )}/${images[gddPageNumber - 1]}`}
            fallback={<Spinner size="xl" color="white" />}
          />
        </Center>
      </Center>

      <HStack w="60%" justifyContent={"space-evenly"} mt="20px">
        <GDDPageButton
          which="prev"
          action={() => {
            setGDDPageNumber(Math.max(1, gddPageNumber - 1));
          }}
        />
        <Text color="white" fontFamily="Electrolize" fontSize="24">
          {gddPageNumber} of {images.length}
        </Text>
        <GDDPageButton
          which="next"
          action={() => {
            setGDDPageNumber(Math.min(images.length, gddPageNumber + 1));
          }}
        />
      </HStack>
    </ContentContainer>
  );
};

const BackgroundBlur = chakra(Flex, {
  baseStyle: {
    position: "absolute",
    boxSize: "100%",
    background: "rgba(200,200,200,0.1)",
    filter: "blur(10px)",
  },
});

const ContentContainer = chakra(Flex, {
  baseStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    my: "40px",
    py: "50px",
    position: "relative",
    flexDir: "column",
  },
});

export default GDDViewer;
