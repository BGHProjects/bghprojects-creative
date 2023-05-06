import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppStateContext";

/**
 * Handles the relevant transition variables during
 * when navigating to another page
 */
const useHandleNavigation = () => {
  const navigate = useNavigate();
  const { screenTransitionDuration, setTransitioningScreens } = useAppContext();

  const handleNavigate = <T extends string | number>(pageName: T) => {
    setTransitioningScreens(true);
    setTimeout(() => {
      navigate(pageName as number);
    }, screenTransitionDuration * 1000);
  };

  return { handleNavigate };
};

export default useHandleNavigation;
