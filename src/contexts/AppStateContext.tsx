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
}

const AppStateContext = createContext<IAppStateContext>({} as IAppStateContext);

const AppStateContextProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [mouseHovering, setMouseHovering] = useState(false);

  return (
    <AppStateContext.Provider value={{ mouseHovering, setMouseHovering }}>
      {children}
    </AppStateContext.Provider>
  );
};

const useAppContext = () => useContext(AppStateContext);

export { AppStateContextProvider, useAppContext };
