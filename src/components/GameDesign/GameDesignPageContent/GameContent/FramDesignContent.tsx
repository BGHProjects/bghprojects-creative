import { HStack, VStack, Image } from "@chakra-ui/react";

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

export default FramDesignContent;
