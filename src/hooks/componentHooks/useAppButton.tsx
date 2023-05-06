import { useState } from "react";
import { useAppContext } from "../../contexts/AppStateContext";

/**
 * Hook that encapsulates the logic of the
 * App Button component
 */
const useAppButton = (animDelay: number, action: () => void) => {
  const [justRendered, setjustRendered] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(animDelay);

  const { setMouseHovering } = useAppContext();

  const handleMouseEnter = () => {
    setAnimationDelay(0);
    setjustRendered(false);
    setHovering(true);
    setMouseHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setMouseHovering(false);
  };

  const handleClick = () => {
    setMouseHovering(false);
    action();
  };

  const handleHoverState = (
    baseState: any,
    animatedState: any
  ): number | number[] =>
    justRendered
      ? baseState
      : hovering
      ? [baseState, animatedState]
      : [animatedState, baseState];

  return {
    state: {
      justRendered,
      hovering,
      animationDelay,
    },
    functions: {
      handleMouseEnter,
      handleMouseLeave,
      handleHoverState,
      handleClick,
    },
  };
};

export default useAppButton;
