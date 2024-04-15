import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from "react";

enum GraphicDesignViewed {
  None = "None",
  CovenantCurrency = "CovenantCurrency",
  BionicleTCG = "BionicleTCG",
  RenderMagazine = "RenderMagazine",
  BraveborneCovers = "BraveborneCovers",
  HelldiversJersey = "HelldiversJersey",
}

interface IGraphicDesignContext {
  graphicDesignViewed: GraphicDesignViewed;
  setGraphicDesignViewed: Dispatch<SetStateAction<GraphicDesignViewed>>;
  transitionDuration: number;
  viewingDesign: boolean;
  whichGraphicDesign: Omit<GraphicDesignViewed, GraphicDesignViewed.None>;
  setWhichGraphicDesign: Dispatch<
    SetStateAction<Omit<GraphicDesignViewed, GraphicDesignViewed.None>>
  >;
}

const GraphicDesignContext = createContext<IGraphicDesignContext>(
  {} as IGraphicDesignContext
);

const GraphicDesignContextProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [graphicDesignViewed, setGraphicDesignViewed] = useState(
    GraphicDesignViewed.None
  );

  const [whichGraphicDesign, setWhichGraphicDesign] = useState<
    Omit<GraphicDesignViewed, GraphicDesignViewed.None>
  >(GraphicDesignViewed.CovenantCurrency);

  const viewingDesign = graphicDesignViewed !== GraphicDesignViewed.None;

  const transitionDuration = 1;

  return (
    <GraphicDesignContext.Provider
      value={{
        graphicDesignViewed,
        setGraphicDesignViewed,
        transitionDuration,
        viewingDesign,
        whichGraphicDesign,
        setWhichGraphicDesign,
      }}
    >
      {children}
    </GraphicDesignContext.Provider>
  );
};

const useGraphicDesignContext = () => useContext(GraphicDesignContext);

export {
  GraphicDesignContextProvider,
  useGraphicDesignContext,
  GraphicDesignViewed,
};
