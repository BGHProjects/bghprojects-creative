import { Center } from "@chakra-ui/react";
import PopUpText from "../components/PopUpText";
import ScreenAnimation from "../components/ScreenAnimation";
import OptionButton from "../components/OptionButton";

const titleText = ["BGH Projects", "Creative Portfolio"];
/**
 * The initial page that the user lands on
 * when they visit the portfolio
 */
const Home = () => {
  const optionButtonProps = {
    height: 100,
    width: 250,
    fontSize: 24,
  };

  return (
    <Center w="100vw" h="100vh" bg="black" position="relative" flexDir="column">
      <ScreenAnimation />
      <PopUpText fullText={titleText} size={80} staggerTime={0.02} />
      <OptionButton {...{ ...optionButtonProps, text: "Game Design" }} />
    </Center>
  );
};

export default Home;
