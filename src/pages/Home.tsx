import { Center } from "@chakra-ui/react";
import PopUpText from "../components/PopUpText";
import ScreenAnimation from "../components/ScreenAnimation";
import OptionButton from "../components/OptionButton";

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

  return (
    <Center w="100vw" h="100vh" bg="black" position="relative" flexDir="column">
      <ScreenAnimation />
      <PopUpText fullText={titleText} size={80} staggerTime={0.02} />
      <Center
        w={buttonWidth * buttonScale * totalButtons.length + containerPadding}
        h={buttonHeight * buttonScale * totalButtons.length + containerPadding}
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
            }}
            key={button.toString()}
          />
        ))}
      </Center>
    </Center>
  );
};

export default Home;
