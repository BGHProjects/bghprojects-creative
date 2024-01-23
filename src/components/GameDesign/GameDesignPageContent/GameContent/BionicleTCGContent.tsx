import { VStack, Image, Text, HStack, Spinner } from "@chakra-ui/react";

/**
 * Visual content displayed on the Bionicle TCG Game Design section
 */
const BionicleTCGDesignContent = () => {
  const imagePrefix = "/assets/images/game-design/bionicletcg/";
  const imagePaths = [
    imagePrefix + "Brutaka Card.png",
    imagePrefix + "Takanuva.png",
    imagePrefix + "The Archives.png",
    imagePrefix + "Face the Piraka.png",
    imagePrefix + "Kanohi Hau.png",
    imagePrefix + "Kanohi Kraahkan.png",
  ];

  return (
    <VStack>
      {[0, 2, 4].map((i) => (
        <HStack key={i} justifyContent="center" mt="40px" w="100%">
          <Image
            src={imagePaths[i]}
            width="40%"
            fallback={<Spinner size="xl" color="white" />}
          />
          <Image
            src={imagePaths[i + 1]}
            width="40%"
            fallback={<Spinner size="xl" color="white" />}
          />
        </HStack>
      ))}
    </VStack>
  );
};

const BionicleTCGTextContent = () => {
  return (
    <Text color="white" fontFamily="Electrolize" fontSize="20px" mt="40px">
      The BIONICLE Trading Card Game is, as name suggests, a trading card game
      based on the lore and stories of the BIONICLE Lego intellectual property.
      The game involves building and battling different BIONICLE cards, and is
      mainly centered around the combat of this type of card. The target
      audience for the BIONICLE Trading Card Game is primarily trading card game
      enthusiasts, as well as those who are familiar with and a fan of the
      BIONICLE intellectual property from Lego.
    </Text>
  );
};

export { BionicleTCGTextContent, BionicleTCGDesignContent };
