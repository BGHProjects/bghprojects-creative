import { VStack, Image, Text } from "@chakra-ui/react";

const WorldEngineDesignContent = () => {
  const images = [
    "Campaign Mode Front",
    "Creative Menu Right",
    "Campaign Mode Gameplay",
    "Creative Mode Gameplay 1",
    "Race Mode Gameplay",
    "Creative Race Mode Gameplay",
  ];

  return (
    <VStack spacing={10}>
      {images.map((image) => (
        <Image
          key={image}
          src={`/assets/images/game-design/worldengine/${image}.PNG`}
        />
      ))}
    </VStack>
  );
};

const WorldEngineTextContent = () => {
  return (
    <Text color="white" fontFamily="Electrolize" fontSize="20px" mt="40px">
      World Engine is a virtual reality game intended to rehabilitate hand and
      arm burns patients. The game was conceived and built as a proof of concept
      solution to the lack of engagement of hand and arm burns patients in their
      prescribed rehabilitation programs. The mechanics of the game incorporate
      various movements that are required by the patient’s prescribed
      rehabilitation programs, and the outer space theme and setting was chosen
      as a visually engaging environment in which the patient could participate
      in.
    </Text>
  );
};

export { WorldEngineDesignContent, WorldEngineTextContent };
