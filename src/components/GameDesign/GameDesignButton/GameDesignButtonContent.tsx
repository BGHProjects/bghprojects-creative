import { Center, ChakraProps, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export interface IGameDesignButtonContent {
  image: string;
  text: string;
  fontFamily?: string;
  animDelay: number;
}

/**
 * The content that is displayed inside of the
 * Game Design Button
 */
const GameDesignButtonContent = ({
  image,
  text,
  fontFamily,
  animDelay,
}: IGameDesignButtonContent) => {
  const commonStyles = {
    boxSize: "100%",
    borderRadius: "6px",
    position: "absolute",
  };

  return (
    <Center position="relative" boxSize="100%">
      <Image
        src={`../../../assets/images/game-design/backgrounds/${image}.png`}
        objectFit="cover"
        objectPosition="center"
        {...(commonStyles as Omit<ChakraProps, never>)}
      />
      <motion.div
        style={{
          height: "100%",
          width: "100%",
          opacity: 0,
          position: "absolute",
        }}
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          delay: animDelay,
        }}
      >
        <Center
          backgroundColor="rgba(0,0,0,0.4)"
          {...(commonStyles as Omit<ChakraProps, never>)}
        >
          <Text
            position="absolute"
            textAlign="center"
            color="white"
            fontFamily={fontFamily || "Electrolize"}
            fontSize={50}
          >
            {text}
          </Text>
        </Center>
      </motion.div>
    </Center>
  );
};

export default GameDesignButtonContent;
