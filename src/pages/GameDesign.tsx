import PageContainer from "../components/PageContainer";
import PopUpText from "../components/PopUpText";
import ScreenAnimation from "../components/ScreenAnimation";
import ScreenTransition from "../components/ScreenTransition";

/**
 * Page that holds the content for the Game Design
 * aspect of the portfolio
 */
const GameDesign = () => {
  return (
    <>
      <ScreenTransition />
      <PageContainer>
        <ScreenAnimation />
        <PopUpText fullText={["Game Design"]} size={60} staggerTime={0.02} />
      </PageContainer>
    </>
  );
};

export default GameDesign;
