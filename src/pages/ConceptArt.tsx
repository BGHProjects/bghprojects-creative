import { Center, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import BackButton from "../components/BackButton";
import ConceptArtBackButton from "../components/ConceptArt/ConceptArtBackButton";
import ContentTemplate from "../components/ConceptArt/ContentTemplate";
import HomePageButton from "../components/HomePageButton/HomePageButton";
import PageContainer from "../components/PageContainer";
import PopUpText from "../components/PopUpText";
import ScreenAnimation from "../components/ScreenAnimation";
import ScreenTransition from "../components/ScreenTransition";
import electricGuitar from "../consts/conceptArtContent/electricGuitar";
import swords from "../consts/conceptArtContent/swords";

const animDelay = 0.33;

export enum Concept {
  None = "None",
  ElectricGuitar = "ElectricGuitar",
  Swords = "Swords",
  ThanosSignatureShoe = "ThanosSignatureShoe",
}

/**
 * Page that holds the content for the Game Design
 * aspect of the portfolio
 */
const ConceptArt = () => {
  const [conceptSelected, setConceptSelected] = useState(Concept.None);
  const [initialRender, setInitialRender] = useState(true);

  const handleSelectingConcept = (concept: Concept) => {
    setInitialRender(false);
    setConceptSelected(concept);
  };

  const optionButtonProps = {
    height: 120,
    width: 280,
    fontSize: 24,
    animDuration: 0.2,
  };

  const buttons = [
    {
      text: "Electric Guitars",
      image: "electric-guitar.svg",
      action: () => handleSelectingConcept(Concept.ElectricGuitar),
    },
    {
      text: "Swords",
      image: "sword-icon.svg",
      action: () => handleSelectingConcept(Concept.Swords),
    },
    {
      text: "Thanos Signature Shoe",
      image: "thanos-shoe.svg",
      action: () => handleSelectingConcept(Concept.ThanosSignatureShoe),
    },
  ];

  const commonContents = {
    initialRender,
    conceptChosen: conceptSelected,
  };

  const electricGuitarContents = {
    contentDetails: electricGuitar,
    thisConcept: Concept.ElectricGuitar,
    initialImages: [
      "electric-guitars/initial-1.svg",
      "electric-guitars/initial-2.svg",
    ],
    contentTitle: "Electric Guitars",
    ...commonContents,
  };

  const swordsContents = {
    contentDetails: swords,
    thisConcept: Concept.Swords,
    initialImages: ["swords/initial-1.svg", "swords/initial-2.svg"],
    contentTitle: "Swords",
    ...commonContents,
  };

  const thanosSignatureShoeContents = {
    contentDetails: [],
    thisConcept: Concept.ThanosSignatureShoe,
    initialImages: ["thanos-signature-shoe/initial-1.png"],
    contentTitle: "Thanos Signature Shoe (In Progress)",
    ...commonContents,
  };

  const conceptsContents = [
    electricGuitarContents,
    swordsContents,
    thanosSignatureShoeContents,
  ];

  return (
    <>
      <ScreenTransition />
      <BackButton animDelay={buttons.length * animDelay + 1} />
      <PageContainer>
        <ScreenAnimation />

        <Center flexDir="column" boxSize="100%">
          <PopUpText fullText={["Concept Art"]} size={60} staggerTime={0.02} />
          <Grid
            templateColumns={"repeat(2,1fr)"}
            templateRows={"repeat(2,1fr)"}
            gap={10}
            mt="40px"
          >
            {buttons.map((button, index) => (
              <GridItem key={JSON.stringify(button)} w="440px" h="220px">
                <Center boxSize="100%">
                  <HomePageButton
                    {...{
                      ...optionButtonProps,
                      text: button.text,
                      image: `/assets/images/${button.image}`,
                      animDelay: 0.25 * index + 1,

                      action: button.action,
                    }}
                  />
                </Center>
              </GridItem>
            ))}
          </Grid>
        </Center>
        {conceptsContents.map((content) => (
          <ContentTemplate {...content} key={JSON.stringify(content)} />
        ))}
        {conceptSelected !== Concept.None && (
          <ConceptArtBackButton
            action={() => handleSelectingConcept(Concept.None)}
          />
        )}
      </PageContainer>
    </>
  );
};

export default ConceptArt;
