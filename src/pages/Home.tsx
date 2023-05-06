import { Center } from "@chakra-ui/react";
import OptionButton from "../components/OptionButton";
import PageContainer from "../components/PageContainer";
import PopUpText from "../components/PopUpText";
import ScreenAnimation from "../components/ScreenAnimation";
import ScreenTransition from "../components/ScreenTransition";
import useHandleNavigation from "../hooks/useHandleNavigation";

const buttonHeight = 100;
const buttonWidth = 250;
const containerPadding = 20;
const buttonScale = 1.2;

const titleText = ["BGH Projects", "Creative Portfolio"];
/**
 * The initial page that the user lands on
 * when they visit the portfolio
 */
const Home = () => {
  const optionButtonProps = {
    height: buttonHeight,
    width: buttonWidth,
    fontSize: 24,
  };

  const totalButtons = [1];

  const { handleNavigate } = useHandleNavigation();

  return (
    <>
      <ScreenTransition />
      <PageContainer>
        <ScreenAnimation />
        <PopUpText fullText={titleText} size={80} staggerTime={0.02} />
        <Center
          w={buttonWidth * buttonScale * totalButtons.length + containerPadding}
          h={
            buttonHeight * buttonScale * totalButtons.length + containerPadding
          }
          p={`${containerPadding}px`}
          maxW="800px"
          maxH="800px"
        >
          {totalButtons.map((button, index) => (
            <OptionButton
              {...{
                ...optionButtonProps,
                text: "Game Design",
                image: "../../assets/images/controller.svg",
                animDelay: 0.25 * index + 1,
                action: () => handleNavigate("/game-design"),
              }}
              key={button.toString()}
            />
          ))}
        </Center>
      </PageContainer>
    </>
  );
};

export default Home;
