import {
  SetStateAction,
  Dispatch,
  createContext,
  ReactNode,
  useState,
  useContext,
} from "react";

enum WorldbuildingItemViewed {
  None = "None",
  CrystalWorld = "CrystalWorld",
}

type NotNoneWorldbuildingItem = Omit<
  WorldbuildingItemViewed,
  WorldbuildingItemViewed.None
>;

interface IWorldbuildingContext {
  worldbuildingItemViewed: WorldbuildingItemViewed;
  setWorldBuildingItemViewed: Dispatch<SetStateAction<WorldbuildingItemViewed>>;
  transitionDuration: number;
  viewingWorldBuildingItem: boolean;
  whichWorldbuildingItem: NotNoneWorldbuildingItem;
  setWhichWorldBuildingItem: Dispatch<SetStateAction<NotNoneWorldbuildingItem>>;
}

const WorldbuildingContext = createContext<IWorldbuildingContext>(
  {} as IWorldbuildingContext
);

const WorldbuildingContextProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [worldbuildingItemViewed, setWorldBuildingItemViewed] = useState(
    WorldbuildingItemViewed.None
  );

  const [whichWorldbuildingItem, setWhichWorldBuildingItem] =
    useState<NotNoneWorldbuildingItem>(WorldbuildingItemViewed.CrystalWorld);

  const viewingWorldBuildingItem =
    worldbuildingItemViewed !== WorldbuildingItemViewed.None;

  const transitionDuration = 1;

  return (
    <WorldbuildingContext.Provider
      value={{
        worldbuildingItemViewed,
        setWorldBuildingItemViewed,
        transitionDuration,
        viewingWorldBuildingItem,
        whichWorldbuildingItem,
        setWhichWorldBuildingItem,
      }}
    >
      {children}
    </WorldbuildingContext.Provider>
  );
};

const useWorldbuildingContext = () => useContext(WorldbuildingContext);

export {
  WorldbuildingContextProvider,
  useWorldbuildingContext,
  WorldbuildingItemViewed,
};
