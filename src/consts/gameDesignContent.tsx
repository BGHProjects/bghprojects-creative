import {
  FramTextContent,
  FramDesignContent,
} from "../components/GameDesign/GameDesignPageContent/GameContent/FramDesignContent";
import {
  GoGetEmDesignContent,
  GoGetEmTextContent,
} from "../components/GameDesign/GameDesignPageContent/GameContent/GoGetEmDesignContent";
import {
  MetaRangersDesignContent,
  MetaRangersTextContent,
} from "../components/GameDesign/GameDesignPageContent/GameContent/MetaRangersContent";
import {
  WorldEngineDesignContent,
  WorldEngineTextContent,
} from "../components/GameDesign/GameDesignPageContent/GameContent/WorldEngineContent";
import {
  FabulaExMachinaTextContent,
  FabulaExMachinaDesignContent,
} from "../components/GameDesign/GameDesignPageContent/GameContent/FabulaExMachinaContent";
import { GameDesignViewed } from "../contexts/GameDesignContext";

export const content: Record<string, any> = {
  [GameDesignViewed.Fram]: {
    title: "FRAM",
    fontFamily: "Lora",
    textIntro: <FramTextContent />,
    contentTitle: "Concept Art / Design",
    content: <FramDesignContent />,
  },
  [GameDesignViewed.MetaRangers]: {
    title: "METARANGERS",
    fontFamily: "Iceland",
    textIntro: <MetaRangersTextContent />,
    contentTitle: "Gameplay Footage",
    content: <MetaRangersDesignContent />,
  },
  [GameDesignViewed.GoGetEm]: {
    title: "GoGetEm",
    fontFamily: "Quicksand",
    textIntro: <GoGetEmTextContent />,
    contentTitle: "Gameplay Screenshots",
    content: <GoGetEmDesignContent />,
  },
  [GameDesignViewed.WorldEngine]: {
    title: "World Engine",
    fontFamily: "Exo2",
    textIntro: <WorldEngineTextContent />,
    contentTitle: "Gameplay Footage",
    content: <WorldEngineDesignContent />,
  },
  [GameDesignViewed.FabulaExMachina]: {
    title: "Fabula Ex Machina",
    fontFamily: "Varela",
    textIntro: <FabulaExMachinaTextContent />,
    contentTitle: "Gameplay Footage",
    content: <FabulaExMachinaDesignContent />,
  },
};
