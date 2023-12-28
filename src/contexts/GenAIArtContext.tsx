import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from "react";

enum GenAIArtViewed {
  None = "None",
  HyperSpaceFlux1 = "HyperSpaceFlux1",
  BioCity1 = "BioCity1",
  AnimePowerarmourGuy1 = "AnimePowerarmourGuy1",
  AnimePowerarmourGuy2 = "AnimePowerarmourGuy2",
  AnimePowerarmourGuy3 = "AnimePowerarmourGuy3",
  AnimePrincessSamuraiGirl1 = "AnimePrincessSamuraiGirl1",
  DemonSamurai1 = "DemonSamurai1",
  SauronShoes1 = "SauronShoes1",
  SpaceCathedral1 = "SpaceCathedral1",
  GlassBlackHole = "GlassBlackHole1",
  CelestialDreamWeave = "CelestialDreamWeave",
  AnimeSuperTeam1 = "AnimeSuperTeam1",
  CloudColossus1 = "CloudColossus1",
  CloudColossus2 = "CloudColossus2",
}

interface IGenAIArtContext {
  genAIArtViewed: GenAIArtViewed;
  setGenAIArtViewed: Dispatch<SetStateAction<GenAIArtViewed>>;
  transitionDuration: number;
  viewingArt: boolean;
  whichGenAIArt: Omit<GenAIArtViewed, GenAIArtViewed.None>;
  setWhichGenAIArt: Dispatch<
    SetStateAction<Omit<GenAIArtViewed, GenAIArtViewed.None>>
  >;
}

const GenAIArtContext = createContext<IGenAIArtContext>({} as IGenAIArtContext);

const GenAIArtContextProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [genAIArtViewed, setGenAIArtViewed] = useState(GenAIArtViewed.None);

  const [whichGenAIArt, setWhichGenAIArt] = useState<
    Omit<GenAIArtViewed, GenAIArtViewed.None>
  >(GenAIArtViewed.HyperSpaceFlux1);

  const viewingArt = genAIArtViewed !== GenAIArtViewed.None;

  const transitionDuration = 1;

  return (
    <GenAIArtContext.Provider
      value={{
        genAIArtViewed,
        setGenAIArtViewed,
        transitionDuration,
        viewingArt,
        whichGenAIArt,
        setWhichGenAIArt,
      }}
    >
      {children}
    </GenAIArtContext.Provider>
  );
};

const useGenAIArtContext = () => useContext(GenAIArtContext);

export { GenAIArtContextProvider, useGenAIArtContext, GenAIArtViewed };
