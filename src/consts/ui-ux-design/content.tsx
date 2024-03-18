import KicksContent from "../../components/UIUXDesign/ItemContent/KicksContent";
import PulseContent from "../../components/UIUXDesign/ItemContent/PulseContent";
import ToTheStarsContent from "../../components/UIUXDesign/ItemContent/ToTheStarsContent";
import { UIUXDesignViewed } from "../../contexts/UIUXDesignContext";

export const content: Record<string, any> = {
  [UIUXDesignViewed.ToTheStars]: {
    title: "To The Stars",
    content: <ToTheStarsContent />,
    background: "to-the-stars.jpg",
  },
  [UIUXDesignViewed.Pulse]: {
    title: "PULSE",
    content: <PulseContent />,
    background: "pulse.jpg",
  },
  [UIUXDesignViewed.Kicks]: {
    title: "KICKS",
    content: <KicksContent />,
    background: "kicks.jpg",
  },
};
