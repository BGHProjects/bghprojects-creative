import { Center, Flex, HStack, Text, chakra } from "@chakra-ui/react";
import { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useGameDesignContext } from "../../../contexts/GameDesignContext";
import GDDPageButton from "./GDDPageButton";

/**
 * Component that renders a viewable Game Design Document
 * in the selected Game Design game's section
 */
const GDDViewer = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const { gddPageNumber, setGDDPageNumber } = useGameDesignContext();

  const [numPages, setNumPages] = useState(0);
  const [renderedPageNumber, setRenderedPageNumber] = useState(0);

  const isLoading = renderedPageNumber !== gddPageNumber;

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const { whichGameDesign } = useGameDesignContext();

  return (
    <ContentContainer>
      <BackgroundBlur />
      <Document
        file={`/assets/gdds/${whichGameDesign}.pdf`}
        onLoadError={(err) => console.log(err)}
        onLoadSuccess={onDocumentLoadSuccess as any}
      >
        <Center position="relative" h="700px" w="500px">
          <Center position="absolute" boxSize="100%">
            <Page
              key={renderedPageNumber}
              pageNumber={renderedPageNumber}
              width={500}
              renderTextLayer={false}
              onRenderSuccess={() => setRenderedPageNumber(gddPageNumber)}
            />
          </Center>
          <Center
            opacity={isLoading ? 0 : 1}
            position="absolute"
            boxSize="100%"
          >
            <Page
              key={gddPageNumber}
              pageNumber={gddPageNumber}
              width={500}
              renderTextLayer={false}
              onRenderSuccess={() => setRenderedPageNumber(gddPageNumber)}
            />
          </Center>
        </Center>
      </Document>

      <HStack w="60%" justifyContent={"space-evenly"} mt="20px">
        <GDDPageButton
          which="prev"
          action={() => {
            setGDDPageNumber(Math.max(1, gddPageNumber - 1));
          }}
        />
        <Text color="white" fontFamily="Electrolize" fontSize="24">
          {gddPageNumber} of {numPages}
        </Text>
        <GDDPageButton
          which="next"
          action={() => {
            setGDDPageNumber(Math.min(numPages, gddPageNumber + 1));
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
