import FramDesignContent from "../components/GameDesign/GameDesignPageContent/GameContent/FramDesignContent";
import { GameDesignViewed } from "../contexts/GameDesignContext";

export const content: Record<string, any> = {
  [GameDesignViewed.Fram]: {
    title: "FRAM",
    fontFamily: "Lora",
    textIntro:
      "Fram is a blockchain perfect information abstract strategy game. The target audience for Fram are people who are interested in other abstract strategy games, people who are interested in gridiron football, or those who have an interest in blockchain gaming. The game was inspired by both chess and gridiron football, and gameplay incorporates elements of both games. <br /> <br /> Fram was conceived as a community-driven game, incorporating several aspects that enable the game to grow with the community that plays it. A key aspect of Fram as a game is its composability and modularity. In contrast to other abstract strategy games, players are able to customise the game in a variety of ways, including the pieces used, the roles of either player, and the board played on. <br /> <br /> Fram is still in the design phase.",
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
    textIntro: "Intro goes here",
    contentTitle: "Gameplay Screenshots",
    content: <></>,
  },
  [GameDesignViewed.WorldEngine]: {
    title: "World Engine",
    fontFamily: "Exo2",
    textIntro: "Intro goes here",
    contentTitle: "Gameplay Footage",
    content: <></>,
  },
};
