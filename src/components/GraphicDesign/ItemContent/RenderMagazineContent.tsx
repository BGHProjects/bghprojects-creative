import { chakra, Text, Image, Spinner, HStack } from "@chakra-ui/react";
import { range } from "lodash";

const RenderMagazineContent = () => {
  const imagePath = "/assets/images/graphic-design/designs/render-magazine/";

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
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Typography
      </AppText>
      <AppText fontSize="20px">
        The main influences for the font were science fiction, futurism,
        fashion, and luxuriousness. To cater for this, a slender, simplistic
        font was envisioned as the ideal typography to be used throughout the
        project. Several fonts were considered, including "Aldrich", "Lexend",
        "Exo", and "Federo", but ultimately the "Genos" typography was decided
        upon, as its sleek and innocuous presentation matched the requirements
        described above.
      </AppText>
      <AppText textAlign="center" fontSize="16px">
        Typography Considerations
      </AppText>
      <ExampleRow mt="40px" h="400px">
        <Image
          src={imagePath + "typography-1.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "typography-2.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <AppText textAlign="left" fontSize="30px">
        Cover Designs
      </AppText>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "covers/cover-1.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="700px"
        />
        <AppText fontSize="20px" w="45%" alignSelf="flex-start">
          The cover designs are largely dominated by the image subject matter.
          The magazine title fills roughly the top 20% to 25% of the image, and
          its font colour was largely chosen to constrast, but not detract from,
          the subject image. A couple different designs were experimented with
          for the title text, including just having a filled singular hue, as
          well as an iteration that had a glassmorphism fill and a solid hue
          outline. The latter iteration seems to work well with subject images
          that contained various hues, but sometimes a flat hue was able to
          produce a good result. The cover designs also included headlines and
          subtitle text for various articles contained within the issue, limited
          to four. While experimenting, I found that any more than this seemed
          to detract too much from the cover image. The location of these
          headline/subtitle combinations was entirely dependant on the subject
          matter image, and were usually placed within gaps or vacant spaces in
          said images.
        </AppText>
      </ExampleRow>
      <AppText textAlign="center" fontSize="20px">
        All Cover Designs
      </AppText>
      {range(9).map((item) => (
        <ExampleRow key={item} mt="20px">
          <Image
            src={imagePath + `covers/cover-${2 + item * 2}.png`}
            fallback={<Spinner size="xl" color="white" />}
            h="600px"
          />
          <Image
            src={imagePath + `covers/cover-${2 + item * 2 + 1}.png`}
            fallback={<Spinner size="xl" color="white" />}
            h="600px"
          />
        </ExampleRow>
      ))}
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
