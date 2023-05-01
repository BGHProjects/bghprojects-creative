import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IPopUpPhrase {
  text: string;
  size?: number;
  maxWidth?: number;
  durationTime?: number;
}

/**
 * Component that displays an individual phrase
 * with the popup animation
 *
 * @param text The text to be displayed
 * @param size The size of the text to be displayed
 * @param maxWidth The maximum width that the text can span
 * @param durationTime The time it takes for the word to animate
 * @returns
 */
const PopUpPhrase = ({ text, size, maxWidth, durationTime }: IPopUpPhrase) => {
  const splitWords = text.split(" ");
  const words: any[] = [];

  const item = {
    hidden: {
      y: "200%",
    },
    visible: {
      y: 0,
      transition: { ease: "easeInOut", duration: durationTime },
    },
  };

  for (const [, word] of splitWords.entries()) {
    words.push(word.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word: string[]) => {
    return word.push("\u00A0");
  });

  return (
    <Text maxWidth={`${maxWidth}px`} textAlign="center">
      {words.map((_: string, index: number) => {
        return words[index].flat().map((element: string, index: number) => {
          return (
            <motion.span
              style={{
                overflow: "hidden",
                display: "inline-block",
                color: "white",
                fontFamily: "Electrolize",
              }}
              key={index}
            >
              <motion.span
                style={{ display: "inline-block", fontSize: size }}
                variants={item}
              >
                {element}
              </motion.span>
            </motion.span>
          );
        });
      })}
    </Text>
  );
};

export default PopUpPhrase;
