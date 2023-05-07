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
      }}
    >
      {children}
    </GameDesignContext.Provider>
  );
};

const useGameDesignContext = () => useContext(GameDesignContext);

export { GameDesignContextProvider, useGameDesignContext, GameDesignViewed };
