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
  ColourCloudDragons1 = "ColourCloudDragons1",
  PaintedSpaceDemon1 = "PaintedSpaceDemon1",
  ColourfulPaint1 = "ColourfulPaint1",
  VolcanoCity1 = "VolcanoCity1",
  CrazyPalance1 = "CrazyPalace1",
  PaintedPhoenix1 = "PaintedPhoenix1",
  SpaceStorm1 = "SpaceStorm1",
  RomanShoes1 = "RomanShoes1",
  CyberpunkFashionShow1 = "CyberpunkFashionShow1",
  OrnateJapaneseSupercar1 = "OrnateJapaneseSupercar1",
  PlanetSurfaceExplosion1 = "PlanetSurfaceExplosion1",
  BionicleMoviePoster1 = "BionicleMoviePoster1",
  CrystalCity1 = "CrystalCity1",
  AugmentedRealityCity1 = "AugmentedRealityCity1",
  AnimeSuperTeam2 = "AnimeSuperTeam2",
  GeometricDreamscape1 = "GeometricDreamScape1",
  CosmicBrainMapVanGogh1 = "CosmicBrainMapVanGogh1",
  ArmouredVampireDragon1 = "ArmouredVampireDragon1",
  DetailedCyberneticWarrior1 = "DetailedCyberneticWarrior1",
  ArmouredVampireDragon2 = "ArmouredVampireDragon2",
  CyberpunkWarriorGirl1 = "CyberpunkWarriorGirl1",
  CyborgMetalDemon1 = "CyborgMetalDemon1",
  PorcelainCyberpunkModel1 = "PorcelainCyberpunkModel1",
  UndergroundLightCave1 = "UndergroundLightCave1",
  RoyalAlienPriests1 = "RoyalAlienPriests1",
  AlienGodStatue1 = "AlienGodStatue1",
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
