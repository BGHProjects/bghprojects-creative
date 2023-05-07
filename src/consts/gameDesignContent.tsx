import {
  FramTextContent,
  FramDesignContent,
} from "../components/GameDesign/GameDesignPageContent/GameContent/FramDesignContent";
import {
  GoGetEmDesignContent,
  GoGetEmTextContent,
} from "../components/GameDesign/GameDesignPageContent/GameContent/GoGetEmDesignContent";
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
    textIntro: "Intro goes here",
    contentTitle: "Gameplay Footage",
    content: <></>,
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
    textIntro: "Intro goes here",
    contentTitle: "Gameplay Footage",
    content: <></>,
  },
};
