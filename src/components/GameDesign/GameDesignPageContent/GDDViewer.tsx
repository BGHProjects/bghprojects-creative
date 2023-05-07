import { Center, Flex, HStack, Text, chakra } from "@chakra-ui/react";
import { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import GDDPageButton from "./GDDPageButton";
import { useGameDesignContext } from "../../../contexts/GameDesignContext";

/**
 * Component that renders a viewable Game Design Document
 * in the selected Game Design game's section
 */
const GDDViewer = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [renderedPageNumber, setRenderedPageNumber] = useState(0);

  const isLoading = renderedPageNumber !== pageNumber;

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
              onRenderSuccess={() => setRenderedPageNumber(pageNumber)}
            />
          </Center>
          <Center
            opacity={isLoading ? 0 : 1}
            position="absolute"
            boxSize="100%"
          >
            <Page
              key={pageNumber}
              pageNumber={pageNumber}
              width={500}
              renderTextLayer={false}
              onRenderSuccess={() => setRenderedPageNumber(pageNumber)}
            />
          </Center>
        </Center>
      </Document>

      <HStack w="60%" justifyContent={"space-evenly"} mt="20px">
        <GDDPageButton
          which="prev"
          action={() => {
            setPageNumber(Math.max(1, pageNumber - 1));
          }}
        />
        <Text color="white" fontFamily="Electrolize" fontSize="24">
          {pageNumber} of {numPages}
        </Text>
        <GDDPageButton
          which="next"
          action={() => {
            setPageNumber(Math.min(numPages, pageNumber + 1));
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
