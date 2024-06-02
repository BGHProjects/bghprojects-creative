import { Center, Image, ChakraProps, Text } from "@chakra-ui/react";
import AppButton from "./AppButton";
import { motion } from "framer-motion";

const commonStyles = {
  boxSize: "100%",
  borderRadius: "6px",
  position: "absolute",
};

interface ImageButtonProps {
  animDelay: number;
  image: string;
  text: string;
  height: number;
  width: number;
  action: () => void;
  textSize?: number;
}

/**
 * UI component for a button that has a darkened image behind it
 */
const ImageButton = ({
  animDelay,
  image,
  text,
  height,
  width,
  action,
  textSize = 40,
}: ImageButtonProps) => {
  return (
    <AppButton
      width={width}
      height={height}
      animDuration={0.2}
      animDelay={animDelay}
      action={action}
    >
      <Center position="relative" boxSize="100%">
        <Image
          src={image}
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
            delay: 1 + animDelay,
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
              fontFamily="Electrolize"
              fontSize={textSize}
            >
              {text}
            </Text>
          </Center>
        </motion.div>
      </Center>
    </AppButton>
  );
};

export default ImageButton;
