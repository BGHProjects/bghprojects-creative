import BionicleTCGContent from "../../components/GraphicDesign/ItemContent/BionicleTCGContent";
import BraveborneCoversContent from "../../components/GraphicDesign/ItemContent/BraveborneCoversContent";
import CovenantCurrencyContent from "../../components/GraphicDesign/ItemContent/CovenantCurrencyContent";
import HelldiversJerseyContent from "../../components/GraphicDesign/ItemContent/HelldiversJerseyContent";
import NRBAMediaContent from "../../components/GraphicDesign/ItemContent/NRBAMediaContent";
import RenderMagazineContent from "../../components/GraphicDesign/ItemContent/RenderMagazineContent";
import { GraphicDesignViewed } from "../../contexts/GraphicDesignContext";

export const content: Record<string, any> = {
  [GraphicDesignViewed.CovenantCurrency]: {
    title: "Covenant Currency",
    content: <CovenantCurrencyContent />,
    background: "covenant-currency.jpg",
  },
  [GraphicDesignViewed.BionicleTCG]: {
    title: "BIONICLE TCG",
    content: <BionicleTCGContent />,
    background: "BionicleTCG.png",
  },
  [GraphicDesignViewed.RenderMagazine]: {
    title: "RENDER Magazine",
    content: <RenderMagazineContent />,
    background: "render-mag-bg.png",
  },
  [GraphicDesignViewed.BraveborneCovers]: {
    title: "Braveborne Saga Covers",
    content: <BraveborneCoversContent />,
    background: "braveborne-bg.jpg",
  },
  [GraphicDesignViewed.HelldiversJersey]: {
    title: "Helldivers Jersey",
    content: <HelldiversJerseyContent />,
    background: "helldivers-jersey.jpg",
  },
  [GraphicDesignViewed.NRBAMedia]: {
    title: "NRBA Promo Media",
    content: <NRBAMediaContent />,
    background: "nrba-media.jpg",
  },
};
