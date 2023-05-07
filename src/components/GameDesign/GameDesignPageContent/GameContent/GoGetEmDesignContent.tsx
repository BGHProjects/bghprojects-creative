import { HStack, VStack, Image, Text } from "@chakra-ui/react";

const GoGetEmDesignContent = () => {
  const imagePaths = [
    "/assets/images/game-design/gogetem/ClassicMenu.jpg",
    "/assets/images/game-design/gogetem/LiquidSwipe.jpg",
    "/assets/images/game-design/gogetem/ClassicGameplay.jpg",
    "/assets/images/game-design/gogetem/HuntGameplay.jpg",
    "/assets/images/game-design/gogetem/ChasedownGameplay.jpg",
    "/assets/images/game-design/gogetem/TagTeamGameplay.jpg",
  ];

  return (
    <VStack>
      {[0, 2, 4].map((i) => (
        <HStack key={i} justifyContent="center" mt="40px" w="100%">
          <Image src={imagePaths[i]} width="40%" />
          <Image src={imagePaths[i + 1]} width="40%" />
        </HStack>
      ))}
    </VStack>
  );
};

const GoGetEmTextContent = () => {
  return (
    <Text color="white" fontFamily="Electrolize" fontSize="20px" mt="40px">
      GoGetEm is a minimalist mobile chasing game. The target audience for
      GoGetEm are casual players looking for a simplistic gaming experience that
      is easy to play with a low learning curve. The main gameplay objective,
      which is common across all gameplay modes, is to navigate through a maze
      to reach a target of some kind before an AI opponent does.
      <br /> <br />
      All methods of gameplay are operated by a gamepad-inspired controller
      which allows the player to move up, down, left, and right. GoGetEm
      includes four game modes; Classic, Hunt, Chasedown, and TagTeam, involving
      elements of chasing static goals or dynamic AI opponents in team or single
      player situations. There are over 100 levels of aesthetic content
      available for players to unlock, four difficulty settings to select, and a
      statistical overview of how well the player performs across different game
      modes and difficulty settings.
    </Text>
  );
};

export { GoGetEmDesignContent, GoGetEmTextContent };
