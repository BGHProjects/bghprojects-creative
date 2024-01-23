import BionicleTCGContent from "../../components/GraphicDesign/ItemContent/BionicleTCGContent";
import CovenantCurrencyContent from "../../components/GraphicDesign/ItemContent/CovenantCurrencyContent";
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
};
