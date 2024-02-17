import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from "react";

enum UIUXDesignViewed {
  None = "None",
  ToTheStars = "ToTheStars",
  Pulse = "Pulse",
}

interface IUIUXDesignContext {
  uiuxDesignViewed: UIUXDesignViewed;
  setUIUXDesignViewed: Dispatch<SetStateAction<UIUXDesignViewed>>;
  transitionDuration: number;
  viewingDesign: boolean;
  whichUIUXDesign: Omit<UIUXDesignViewed, UIUXDesignViewed.None>;
  setWhichUIUXDesign: Dispatch<
    SetStateAction<Omit<UIUXDesignViewed, UIUXDesignViewed.None>>
  >;
}

const UIUXDesignContext = createContext<IUIUXDesignContext>(
  {} as IUIUXDesignContext
);

const UIUXDesignContextProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [uiuxDesignViewed, setUIUXDesignViewed] = useState(
    UIUXDesignViewed.None
  );

  const [whichUIUXDesign, setWhichUIUXDesign] = useState<
    Omit<UIUXDesignViewed, UIUXDesignViewed.None>
  >(UIUXDesignViewed.ToTheStars);

  const viewingDesign = uiuxDesignViewed !== UIUXDesignViewed.None;

  const transitionDuration = 1;

  return (
    <UIUXDesignContext.Provider
      value={{
        uiuxDesignViewed,
        setUIUXDesignViewed,
        transitionDuration,
        viewingDesign,
        whichUIUXDesign,
        setWhichUIUXDesign,
      }}
    >
      {children}
    </UIUXDesignContext.Provider>
  );
};

const useUIUXDesignContext = () => useContext(UIUXDesignContext);

export { UIUXDesignContextProvider, useUIUXDesignContext, UIUXDesignViewed };
