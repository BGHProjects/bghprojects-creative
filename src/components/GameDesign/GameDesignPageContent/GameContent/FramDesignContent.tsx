import { HStack, VStack, Image, Text } from "@chakra-ui/react";

/**
 * Visual content displayed on the Fram Game Design section
 */
const FramDesignContent = () => {
  return (
    <VStack>
      <HStack justifyContent="center" mt="40px" w="100%">
        <Image
          src="/assets/images/game-design/fram/Default Board.png"
          width="30%"
        />
        <Image
          src="/assets/images/game-design/fram/Orthogonal Movement.png"
          width="30%"
        />
        <Image
          src="/assets/images/game-design/fram/Diagonal Movement.png"
          width="30%"
        />
      </HStack>
      <HStack justifyContent="center" mt="20px" w="100%">
        <Image
          src="/assets/images/game-design/fram/Edge Movement.png"
          width="30%"
        />
        <Image
          src="/assets/images/game-design/fram/Vertex Movement.png"
          width="30%"
        />
      </HStack>
    </VStack>
  );
};

const FramTextContent = () => {
  return (
    <Text color="white" fontFamily="Electrolize" fontSize="20px" mt="40px">
      Fram is a blockchain perfect information abstract strategy game. The
      target audience for Fram are people who are interested in other abstract
      strategy games, people who are interested in gridiron football, or those
      who have an interest in blockchain gaming. The game was inspired by both
      chess and gridiron football, and gameplay incorporates elements of both
      games. <br /> <br /> Fram was conceived as a community-driven game,
      incorporating several aspects that enable the game to grow with the
      community that plays it. A key aspect of Fram as a game is its
      composability and modularity. In contrast to other abstract strategy
      games, players are able to customise the game in a variety of ways,
      including the pieces used, the roles of either player, and the board
      played on. <br /> <br /> Fram is still in the design phase.
    </Text>
  );
};

export { FramDesignContent, FramTextContent };
