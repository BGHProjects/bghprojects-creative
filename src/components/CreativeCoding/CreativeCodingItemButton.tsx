import { Link } from "@chakra-ui/react";
import ImageButton from "../ImageButton";

interface ICreativeCodingItemButton {
  animDelay: number;
  image: string;
  text: string;
  link: string;
  height: number;
  width: number;
}

/**
 * Button that is displayed for each item
 * in the Creative Coding section of the portfolio
 */
const CreativeCodingItemButton = ({
  animDelay,
  image,
  text,
  link,
  height,
  width,
}: ICreativeCodingItemButton) => {
  return (
    <Link href={link} isExternal cursor="none">
      <ImageButton
        animDelay={animDelay}
        image={image}
        text={text}
        height={height}
        width={width}
        action={() => null}
      />
    </Link>
  );
};

export default CreativeCodingItemButton;
