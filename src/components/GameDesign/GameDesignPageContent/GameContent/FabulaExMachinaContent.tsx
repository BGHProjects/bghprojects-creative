import { VStack, Image, Text } from "@chakra-ui/react";

/**
 * Visual content displayed on the Fabula Ex Machina Game Design section
 */
const FabulaExMachinaDesignContent = () => {
  const images = [
    "MainMenu",
    "IntroPrompt",
    "FirstActPrompt",
    "FullStoryWithPromptsExample",
  ];

  return (
    <VStack spacing={10}>
      {images.map((image) => (
        <Image
          key={image}
          src={`/assets/images/game-design/fabulaexmachina/${image}.PNG`}
        />
      ))}
    </VStack>
  );
};

const FabulaExMachinaTextContent = () => {
  return (
    <Text color="white" fontFamily="Varela" fontSize="20px" mt="40px">
      Fabula Ex Machina is a generative narrative game. The game leverages a
      large language model (LLM) and prompt engineering to utilise AI as a tool
      in the creative writing process. The objective of the game is to write a
      story that combines the player’s own imagination with the generative
      properties of the LLM. <br /> <br /> The target audience for Fabula Ex
      Machina is relatively broad, ranging from creative individuals who want to
      leverage an LLM to assist them in making a creative piece, to those who
      don’t consider themselves creative or skilled in writing enough to write a
      story, but nonetheless have a story they want to tell. The game is
      currently iterated as a reduced proof of concept, to test the capabilities
      of a nascent LLM, as well as how a user might interact with the LLM.
    </Text>
  );
};

export { FabulaExMachinaDesignContent, FabulaExMachinaTextContent };
