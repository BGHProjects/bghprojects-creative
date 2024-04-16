import { motion } from "framer-motion";
import { ReactElement, cloneElement } from "react";
import useAppButton from "../hooks/componentHooks/useAppButton";
import buttonStyle from "../helpers/buttonStyle";
import { Center } from "@chakra-ui/react";

export interface IAppButton {
  width: number;
  height: number;
  animDuration: number;
  animDelay?: number;
  action: () => void;
  children?: ReactElement | ReactElement[];
}

const AppButton = ({
  width,
  height,
  animDelay = 0,
  animDuration,
  action,
  children,
}: IAppButton) => {
  const { state, functions } = useAppButton(animDelay, action);
  const { justRendered, hovering, animationDelay } = state;
  const { handleMouseEnter, handleMouseLeave, handleHoverState, handleClick } =
    functions;

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ ...buttonStyle(width, height) } as any}
      animate={{
        y: [200, 0],
        opacity: [0, 1],
        width: [0, width],
        height: [0, height],
        scale: handleHoverState(1, 1.1),
      }}
      transition={{
        ease: "easeInOut",
        duration: animDuration,
        delay: animationDelay,
        scale: {
          duration: animDuration,
          delay: animationDelay,
        },
        y: {
          duration: animDuration * 3,
          delay: animationDelay,
        },
        width: {
          delay: animDuration * 5 + animationDelay,
          duration: animDuration * 1.5,
        },
        height: {
          delay: animDuration * 3 + animationDelay,
          duration: animDuration * 1.5,
        },
      }}
    >
      <Center boxSize="100%" bg="rgba(0,0,0,0.5)" borderRadius="10px">
        {cloneElement(children as ReactElement, {
          justRendered,
          hovering,
          handleHoverState,
        })}
      </Center>
    </motion.div>
  );
};

export default AppButton;
