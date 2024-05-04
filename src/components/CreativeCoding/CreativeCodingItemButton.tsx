import { Center, Image, ChakraProps, Text, Link } from "@chakra-ui/react";
import AppButton from "../AppButton";
import { motion } from "framer-motion";

interface ICreativeCodingItemButton {
  animDelay: number;
  image: string;
  text: string;
  link: string;
  height: number;
  width: number;
}

/**
 * Button that is displayed for each item
 * in the Creative Coding section of the portfolio
 */
const CreativeCodingItemButton = ({
  animDelay,
  image,
  text,
  link,
  height,
  width,
}: ICreativeCodingItemButton) => {
  const commonStyles = {
    boxSize: "100%",
    borderRadius: "6px",
    position: "absolute",
  };

  return (
    <Link href={link} isExternal cursor="none">
      <AppButton
        width={width}
        height={height}
        animDuration={0.2}
        animDelay={animDelay}
        action={() => null}
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
                fontSize={40}
              >
                {text}
              </Text>
            </Center>
          </motion.div>
        </Center>
      </AppButton>
    </Link>
  );
};

export default CreativeCodingItemButton;
