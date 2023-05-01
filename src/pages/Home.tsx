import { Center } from "@chakra-ui/react";
import PopUpText from "../components/PopUpText";
import ScreenAnimation from "../components/ScreenAnimation";

const titleText = ["BGH Projects", "Creative Portfolio"];
/**
 * The initial page that the user lands on
 * when they visit the portfolio
 */
const Home = () => {
  return (
    <Center w="100vw" h="100vh" bg="black" position="relative">
      <ScreenAnimation />
      <PopUpText fullText={titleText} size={80} staggerTime={0.02} />
    </Center>
  );
};

export default Home;
