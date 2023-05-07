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

  const viewingGame = gameDesignViewed !== GameDesignViewed.None;

  const transitionDuration = 1;

  return (
    <GameDesignContext.Provider
      value={{
        gameDesignViewed,
        setGameDesignViewed,
        transitionDuration,
        viewingGame,
      }}
    >
      {children}
    </GameDesignContext.Provider>
  );
};

const useGameDesignContext = () => useContext(GameDesignContext);

export { GameDesignContextProvider, useGameDesignContext, GameDesignViewed };
