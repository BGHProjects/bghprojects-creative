import AppButton from "../AppButton";
import GameDesignButtonContent, {
  IGameDesignButtonContent,
} from "./GameDesignButtonContent";

interface IGameDesignButton extends IGameDesignButtonContent {
  animDelay: number;
}

/**
 * Button rendered in the Game Design Screen
 */
const GameDesignButton = ({
  animDelay,
  image,
  text,
  fontFamily,
}: IGameDesignButton) => {
  return (
    <AppButton
      width={400}
      height={200}
      animDuration={0.2}
      animDelay={animDelay}
      action={() => {}}
    >
      <GameDesignButtonContent
        {...{ image, text, fontFamily, animDelay: animDelay + 0.2 * 5 + 0.2 }}
      />
    </AppButton>
  );
};

export default GameDesignButton;
