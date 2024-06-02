import CrystalWorldContent from "../../components/Worldbuilding/WorldbuildingItemContent/CrystalWorldContent";
import { WorldbuildingItemViewed } from "../../contexts/WorldbuildingContext";

export const content: Record<string, any> = {
  [WorldbuildingItemViewed.CrystalWorld]: {
    title: "Suumnavor (The Crystal World)",
    content: <CrystalWorldContent />,
    background: "crystalworld.jpg",
  },
};
