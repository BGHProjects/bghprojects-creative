import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";

const textDropDistance = 80;

export interface IHomePageButtonContent {
  justRendered: boolean;
  image: any;
  text: string;
  hovering?: number;
  handleHoverState: (x: number, y: number) => void;
}

const HomePageButtonContent = ({
  justRendered,
  image,
  text,
  hovering,
  handleHoverState,
}: IHomePageButtonContent) => {
  return (
    <>
      <motion.span
        style={{
          fontFamily: "Electrolize",
          fontSize: 24,
          color: "white",
          textAlign: "center",
          position: "absolute",
        }}
        animate={
          {
            y:
              justRendered || !image
                ? 0
                : hovering
                ? [`${textDropDistance}%`, "0%"]
                : ["0%", `${textDropDistance}%`],
            opacity: !image ? 1 : handleHoverState(0, 1),
          } as any
        }
        transition={{
          duration: 0.2,
        }}
      >
        {text}
      </motion.span>
      {image && (
        <motion.div
          style={{
            height: "60%",
            alignItems: "center",
            justifyContent: "center",
          }}
          animate={
            {
              opacity: handleHoverState(1, 0),
            } as any
          }
          transition={{
            ease: "easeInOut",
          }}
        >
          <Image src={image} alt="Button Image" boxSize="100%" />
        </motion.div>
      )}
    </>
  );
};

export default HomePageButtonContent;
