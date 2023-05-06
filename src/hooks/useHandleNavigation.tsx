import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppStateContext";

/**
 * Handles the relevant transition variables during
 * when navigating to another page
 *
 * @param pageName The name of the page being navigated to
 */
const useHandleNavigation = () => {
  const navigate = useNavigate();
  const { screenTransitionDuration, setTransitioningScreens } = useAppContext();

  const handleNavigate = (pageName: string) => {
    setTransitioningScreens(true);
    setTimeout(() => {
      navigate(pageName);
    }, screenTransitionDuration * 1000);
  };

  return { handleNavigate };
};

export default useHandleNavigation;
