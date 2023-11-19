import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from "react";

enum GameDesignViewed {
  None = "None",
  Fram = "Fram",
  MetaRangers = "MetaRangers",
  WorldEngine = "WorldEngine",
  GoGetEm = "GoGetEm",
  FabulaExMachina = "FabulaExMachina",
}

interface IGameDesignContext {
  gameDesignViewed: GameDesignViewed;
  setGameDesignViewed: Dispatch<SetStateAction<GameDesignViewed>>;
  transitionDuration: number;
  viewingGame: boolean;
  whichGameDesign: Omit<GameDesignViewed, GameDesignViewed.None>;
  setWhichGameDesign: Dispatch<
    SetStateAction<Omit<GameDesignViewed, GameDesignViewed.None>>
  >;
  gddPageNumber: number;
  setGDDPageNumber: Dispatch<SetStateAction<number>>;
  whichImages: Record<string, any[]>;
}

const GameDesignContext = createContext<IGameDesignContext>(
  {} as IGameDesignContext
);

const GameDesignContextProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [gameDesignViewed, setGameDesignViewed] = useState(
    GameDesignViewed.None
  );

  const [whichGameDesign, setWhichGameDesign] = useState<
    Omit<GameDesignViewed, GameDesignViewed.None>
  >(GameDesignViewed.WorldEngine);

  const [gddPageNumber, setGDDPageNumber] = useState(1);

  const viewingGame = gameDesignViewed !== GameDesignViewed.None;

  const transitionDuration = 1;

  const framGDDImages: any[] = [
    "Title Page.png",
    "Contents.png",
    "Executive Summary.png",
    "Game Overview 1.png",
    "Game Overview 2.png",
    "Game Overview 3.png",
    "Game Overview 4.png",
    "Game Overview 5.png",
    "Game Overview 6.png",
    "Game Overview 7.png",
    "Game Overview 8.png",
    "Game Overview 9.png",
    "Game Overview 10.png",
    "Game Overview 11.png",
    "Game Overview 12.png",
    "Web3 1.png",
    "Web3 2.png",
    "Web3 3.png",
    "Web3 4.png",
    "Web3 5.png",
  ];

  const goGetEmGDDImages: any[] = [
    "TitlePage.png",
    "ContentsPage.png",
    "ExecutiveSummary.png",
    "GameplayMechanics.png",
    "GameplayModes1.png",
    "GameplayModes2.png",
    "GameplayProgression1.png",
    "GameplayProgression2.png",
    "GameplayStatistics.png",
    "UIDesignMenu1.png",
    "UIDesignMenu2.png",
    "UIDesignGameplay1.png",
    "UIDesignGameplay2.png",
    "UIDesignGameplay3.png",
  ];
  const worldEngineGDDImages: any[] = [
    "TitlePage.png",
    "ContentsPage.png",
    "Executive Summary.png",
    "Project Brief.png",
    "Ideation.png",
    "UX Design 1.png",
    "UX Design 2.png",
    "UX Design 3.png",
    "UX Design 4.png",
    "UX Design 5.png",
    "Game Modes 1.png",
    "Game Modes 2.png",
    "Game Modes 3.png",
    "Game Modes 4.png",
    "Game Modes 5.png",
    "Game Modes 6.png",
    "Game Modes 7.png",
    "Game Modes 8.png",
    "Game Modes 9.png",
  ];
  const metarangersGDDImages: any[] = [
    "Title Page.png",
    "Contents Page.png",
    "Executive Summary.png",
    "Gameplay Design 1.png",
    "Gameplay Design 2.png",
    "Gameplay Design 3.png",
    "Gameplay Design 4.png",
    "Gameplay Design 5.png",
    "Gameplay Design 6.png",
    "Gameplay Design 7.png",
    "Gameplay Design 8.png",
    "Gameplay Design 9.png",
    "Gameplay Design 10.png",
    "Gameplay Design 11.png",
    "Gameplay Design 12.png",
    "Gameplay Design 13.png",
    "Gameplay Design 14.png",
    "Gameplay Design 15.png",
    "UIUX Design 1.png",
    "UIUX Design 2.png",
    "UIUX Design 3.png",
    "UIUX Design 4.png",
    "UIUX Design 5.png",
    "UIUX Design 6.png",
    "Web3 1.png",
    "Web3 2.png",
  ];

  const fabulaExMachinaGDDImages: any[] = [
    "Title Page.png",
    "Contents Page.png",
    "Executive Summary.png",
    "Design Philosophy.png",
    "Gameplay.png",
    "Prompt Engineering 1.png",
    "Prompt Engineering 2.png",
  ];

  const whichImages = {
    [GameDesignViewed.GoGetEm]: goGetEmGDDImages,
    [GameDesignViewed.WorldEngine]: worldEngineGDDImages,
    [GameDesignViewed.MetaRangers]: metarangersGDDImages,
    [GameDesignViewed.Fram]: framGDDImages,
    [GameDesignViewed.FabulaExMachina]: fabulaExMachinaGDDImages,
  };

  return (
    <GameDesignContext.Provider
      value={{
        gameDesignViewed,
        setGameDesignViewed,
        transitionDuration,
        viewingGame,
        whichGameDesign,
        setWhichGameDesign,
        gddPageNumber,
        setGDDPageNumber,
        whichImages,
      }}
    >
      {children}
    </GameDesignContext.Provider>
  );
};

const useGameDesignContext = () => useContext(GameDesignContext);

export { GameDesignContextProvider, useGameDesignContext, GameDesignViewed };
