import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAppContext } from "../contexts/AppStateContext";

/**
 * Visual effect that happens when transitioning
 * between different screens in the app
 */
const ScreenTransition = () => {
  const {
    screenTransitionDuration,
    transitioningScreens,
    setTransitioningScreens,
  } = useAppContext();

  useEffect(() => {
    if (transitioningScreens) {
      setTimeout(() => {
        setTransitioningScreens(false);
      }, screenTransitionDuration * 1000);
    }
  }, [transitioningScreens]);

  return (
    <motion.div
      style={{
        position: "absolute",
        width: "100vw",
        height: "0vh",
        backgroundColor: "rgba(0,0,0,1)",
        zIndex: 3,
      }}
      animate={{
        height: transitioningScreens ? ["0vh", "100vh"] : "0vh",
      }}
      transition={{
        ease: "easeInOut",
        duration: screenTransitionDuration,
      }}
    />
  );
};

export default ScreenTransition;
