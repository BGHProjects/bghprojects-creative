import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import generatePopUpWords from "../helpers/generatePopUpWords";

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
  const item = {
    hidden: {
      y: "200%",
    },
    visible: {
      y: 0,
      transition: { ease: "easeInOut", duration: durationTime },
    },
  };
  const words = generatePopUpWords(text);

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
