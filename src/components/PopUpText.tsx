import { motion } from "framer-motion";
import PopUpPhrase from "./PopUpPhrase";

interface IPopUpText {
  fullText: string[];
  size?: number;
  staggerTime?: number;
  durationTime?: number;
}

/**
 * Component that composes different PopUpPhrase components
 * to gracefully animated multiple lines of text
 *
 * @param fullText The full text to be displayed
 *
 */
const PopUpText = ({
  fullText,
  size = 16,
  staggerTime = 0.025,
  durationTime = 0.85,
}: IPopUpText) => {
  const container = {
    visible: {
      transition: {
        staggerChildren: staggerTime,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      {fullText.map((text) => (
        <PopUpPhrase {...{ text, size, durationTime }} key={text} />
      ))}
    </motion.div>
  );
};

export default PopUpText;
