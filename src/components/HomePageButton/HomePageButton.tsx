import AppButton from "../AppButton";
import HomePageButtonContent from "./HomePageButtonContent";

interface IHomePageButton {
  width: number;
  height: number;
  animDuration: number;
  animDelay: number;
  action: () => void;
  image: any;
  text: string;
}

/**
 * Button that is displayed in the Home page menu
 */
const HomePageButton = ({
  width,
  height,
  animDuration,
  animDelay,
  action,
  image,
  text,
}: IHomePageButton) => {
  return (
    <AppButton
      width={width}
      height={height}
      animDuration={animDuration}
      animDelay={animDelay}
      action={action}
    >
      <HomePageButtonContent
        justRendered={false}
        image={image}
        text={text}
        handleHoverState={() => {}}
      />
    </AppButton>
  );
};

export default HomePageButton;
