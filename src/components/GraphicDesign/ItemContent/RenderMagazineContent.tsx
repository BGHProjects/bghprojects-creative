import { chakra, Text, Image, Spinner, HStack, VStack } from "@chakra-ui/react";

const RenderMagazineContent = () => {
  return (
    <>
      <AppText textAlign="left" fontSize="30px">
        Overview
      </AppText>
      <AppText fontSize="20px">
        The following is a project where I designed relevant aspects of a
        fictional futuristic fashion magazine called RENDER.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Problem Brief
      </AppText>
      <AppText fontSize="20px">
        A group of creatives would want to commericalise the emerging AI art
        space. They plan to achieve this by releasing a magazine, containing
        information regarding the latest news in the AI art world, interviews
        with AI prompting artists, emerging developments in machine learning
        models that produce AI models, prompt engineering guides for would-be AI
        artists, and example outputs from the community. The group requires
        designs for cover concepts, as well as Contents pages, and example
        articles that may be found within the magazine. You are free to employ
        any creative decision making regarding layouts and typography that you
        think would present a visually appealling magazine, without taking away
        any visual emphasis from the generated images themselves.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Design Overview
      </AppText>
      <AppText fontSize="20px">
        57 designs were iterated in total, including 19 cover designs, 30
        contents page designs, and 8 article designs. Various constraints were
        implemented for the different types of designs, which are discussed
        below.
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        AI Generated Images
      </AppText>
      <AppText fontSize="20px">
        The designs in this project heavily relied upon AI-generated content.
        This in turn required a significant amount of prompt engineering on my
        behalf. I used dozens of different permutations of prompts to generate
        the different images used, so I didn't bother recording and listing
        every single one here, in order to not bloat the content of this
        section. Some common traits used across the different prompts included
        getting realistic, smooth, non-blurry and detailed images. Many of the
        outputs also included references to fashion, androids, sci-fi, neon
        colouring, and models. Iterations of both shorter, broader prompts and
        detailed, more specific prompts were used to generate different images,
        and mostly proved beneficial in either case. The AI models used to
        generate the images in this project were the Meta Imagine AI generator,
        and the Bing Designer image generator.
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Colour Scheme
      </AppText>
      <AppText fontSize="20px">
        There was no set colour scheme used in the design of RENDER, as to
        accommodate the different styles of images that were generated. Fluro
        and lighter-hued colours were typically used in the typography, as dark
        background colours seemed to contrast the generated images better than
        lighter ones, and these shades also seemed to contrast the best when
        placed over the top of the more detailed images. There were some
        instances were the hue of the typography matched hues in the generated
        images to present, and others were hues were chosen to directly contrast
        them. This decision-making ultimately came down to the image and the
        colour used, and has no broad, universally applied principle.
      </AppText>
    </>
  );
};

const AppText = chakra(Text, {
  baseStyle: {
    color: "white",
    fontFamily: "Electrolize",
    marginTop: "40px",
    w: "100%",
  },
});

const ExampleRow = chakra(HStack, {
  baseStyle: {
    w: "100%",
    justifyContent: "space-evenly",
  },
});

export default RenderMagazineContent;
