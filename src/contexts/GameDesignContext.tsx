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

  const goGetEmGDDImages: any[] = [];
  const worldEngineGDDImages: any[] = [];
  const metarangersGDDImages: any[] = [];

  const whichImages = {
    [GameDesignViewed.GoGetEm]: goGetEmGDDImages,
    [GameDesignViewed.WorldEngine]: worldEngineGDDImages,
    [GameDesignViewed.MetaRangers]: metarangersGDDImages,
    [GameDesignViewed.Fram]: framGDDImages,
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
