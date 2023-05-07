import AppButton from "../../AppButton";
import GameDesignButtonContent, {
  IGameDesignButtonContent,
} from "./GameDesignButtonContent";

interface IGameDesignButton extends IGameDesignButtonContent {
  animDelay: number;
  action: () => void;
}

/**
 * Button rendered in the Game Design Screen
 */
const GameDesignButton = ({
  animDelay,
  image,
  text,
  fontFamily,
  action,
}: IGameDesignButton) => {
  return (
    <AppButton
      width={400}
      height={200}
      animDuration={0.2}
      animDelay={animDelay}
      action={action}
    >
      <GameDesignButtonContent
        {...{ image, text, fontFamily, animDelay: animDelay + 0.2 * 5 + 0.2 }}
      />
    </AppButton>
  );
};

export default GameDesignButton;
