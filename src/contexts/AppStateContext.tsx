import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IAppStateContext {
  mouseHovering: boolean;
  setMouseHovering: Dispatch<SetStateAction<boolean>>;
  screenTransitionDuration: number;
  transitioningScreens: boolean;
  setTransitioningScreens: Dispatch<SetStateAction<boolean>>;
}

const AppStateContext = createContext<IAppStateContext>({} as IAppStateContext);

const AppStateContextProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [mouseHovering, setMouseHovering] = useState(false);
  const [transitioningScreens, setTransitioningScreens] = useState(false);
  const screenTransitionDuration = 1;

  return (
    <AppStateContext.Provider
      value={{
        mouseHovering,
        setMouseHovering,
        screenTransitionDuration,
        transitioningScreens,
        setTransitioningScreens,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

const useAppContext = () => useContext(AppStateContext);

export { AppStateContextProvider, useAppContext };
