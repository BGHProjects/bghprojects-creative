import { motion } from "framer-motion";
import { content } from "../../consts/gen-ai-art/content";
import { useGenAIArtContext } from "../../contexts/GenAIArtContext";
import { Flex, Image, chakra, Text, Link, Spinner } from "@chakra-ui/react";
import GenAIArtBackButton from "./GenAIArtBackButton";
import { range } from "lodash";

/**
 * The frame that holds the content that is displayed when
 * a generative AI art item is selected from the Generative AI page
 */
const GenAIArtContentFrame = () => {
  const { transitionDuration, viewingArt, whichGenAIArt } =
    useGenAIArtContext();

  const cont = content[whichGenAIArt as string];

  const TextItem = ({
    title,
    content,
    link,
  }: {
    title: string;
    content: string;
    link?: string;
  }) => {
    return (
      <>
        <AppText textAlign="left" fontSize="20px">
          {title}
        </AppText>
        <AppText fontSize="14px" w="90%">
          {link ? <Link href={link}>{content}</Link> : content}
        </AppText>
      </>
    );
  };

  return (
    <motion.div
      style={{
        height: "100vh",
        width: "60vw",
        minWidth: "600px",
        backgroundColor: "black",
        zIndex: 0,
        position: "absolute",
        display: "none",
        top: "0%",
        opacity: 0,
      }}
      animate={{
        opacity: viewingArt ? [0, 1] : [1, 0],
        display: viewingArt ? "flex" : "none",
      }}
      transition={{
        ease: "easeInOut",
        display: {
          delay: viewingArt ? 0 : transitionDuration * 2,
        },
        height: {
          delay: transitionDuration,
          duration: transitionDuration,
        },
        delay: viewingArt ? transitionDuration : 0,
        duration: transitionDuration,
      }}
    >
      <Image
        src={`/assets/images/gen-ai-art/items/${cont.filePath}/1${cont.ext}`}
        boxSize="100%"
        objectFit="cover"
        objectPosition="center"
        position="absolute"
      />
      <Flex
        boxSize="100%"
        position="absolute"
        bg="rgba(0,0,0,0.8)"
        flexDir="column"
        alignItems="center"
        pt="40px"
        pb="100px"
        overflow="auto"
        px={{ base: "10px", md: "40px", lg: "70px" }}
        sx={{
          "&::-webkit-scrollbar": {
            w: "2",
            mr: "10",
          },
          "&::-webkit-scrollbar-track": {
            w: "3",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "10",
            bg: "white",
          },
        }}
      >
        <GenAIArtBackButton />
        <TextItem title="Prompt" content={cont.prompt} />
        <TextItem title="AI" content={cont.ai} link={cont.link} />
        {cont?.negativePrompt && (
          <TextItem title="Negative Prompt" content={cont.negativePrompt} />
        )}
        {cont?.styles && <TextItem title="Styles" content={cont.styles} />}
        {cont?.baseModel && (
          <TextItem title="Base Model" content={cont.baseModel} />
        )}
        {cont?.sampler && <TextItem title="Sampler" content={cont.sampler} />}
        {cont?.lora1 && <TextItem title="LoRa 1" content={cont.lora1} />}
        {range(cont.len).map((item) => {
          return (
            <Image
              mt="40px"
              src={`/assets/images/gen-ai-art/items/${cont.filePath}/${
                item + 1
              }${cont.ext}`}
              fallback={<Spinner size="xl" color="white" />}
            />
          );
        })}
      </Flex>
    </motion.div>
  );
};

const AppText = chakra(Text, {
  baseStyle: {
    color: "white",
    fontFamily: "Electrolize",
    mt: "10px",
    w: "100%",
  },
});

export default GenAIArtContentFrame;
