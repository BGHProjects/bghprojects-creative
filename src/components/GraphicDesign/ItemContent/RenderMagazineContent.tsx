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
        fictional futuristic AI fashion magazine called RENDER.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Problem Brief
      </AppText>
      <AppText fontSize="20px">
        A group of creatives want to commericalise the emerging AI art space.
        They plan to achieve this by releasing a magazine, containing
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
      <AppText textAlign="left" fontSize="30px">
        Contents Page Design
      </AppText>
      <AppText fontSize="20px">
        Two base designs were made for the Contents page; a one-page and
        two-page version, with several alternative layouts for the two-page
        version. I wanted to experiement with the layout of the contents page,
        to differentiate it from other magazines. I iterated having the word
        "Contents" aligned along different parts of the page, instead of just
        the top, for visual appeal. I also decided that although there are
        different relevant parts of the magazine, the "Outputs" section would be
        the focal or main attraction of the magazine, so I decided to put extra
        emphasis on that section on the contents page, for the two page
        versions. I also wanted to continue the heavy usage of images in the
        contents page, rather than rely on lots of text, and reduced the text
        content to simply the names of the sections and the page numbers on
        which they start. I decided to sacrifice the usability of the contents
        for visual appeal, just to experiment and try to redefine what a
        contents page is and what it contains. For the image use, I also
        experiemented with different shapes to house the images instead of just
        standard boxes or squares, with some designs using sharp and angle
        trapezoids and rhombuses, again for experimental and differential visual
        purposes.
      </AppText>
      <AppText textAlign="center" fontSize="20px">
        Two Page Designs
      </AppText>
      {range(9).map((item) => (
        <ExampleRow key={item} mt="20px">
          <Image
            src={imagePath + `contents-pages/two-page/cp2p-${item * 2 + 1}.png`}
            fallback={<Spinner size="xl" color="white" />}
            w="50%"
          />
          <Image
            src={imagePath + `contents-pages/two-page/cp2p-${item * 2 + 2}.png`}
            fallback={<Spinner size="xl" color="white" />}
            w="50%"
          />
        </ExampleRow>
      ))}
      <AppText textAlign="center" fontSize="20px">
        One Page Designs
      </AppText>
      {range(6).map((item) => (
        <ExampleRow key={item} mt="20px">
          <Image
            src={imagePath + `contents-pages/one-page/cp1p-${item * 2 + 1}.png`}
            fallback={<Spinner size="xl" color="white" />}
            h="500px"
          />
          <Image
            src={imagePath + `contents-pages/one-page/cp1p-${item * 2 + 2}.png`}
            fallback={<Spinner size="xl" color="white" />}
            h="500px"
          />
        </ExampleRow>
      ))}
      <AppText textAlign="left" fontSize="30px">
        Article Designs
      </AppText>
      <AppText fontSize="20px">
        For the articles that weren't "Outputs", various different columnal
        layouts were iterated with, to experiment with how the usage of text and
        images could coalesce, as opposed to the image-dominated examples from
        the rest of the designs. As with the contents pages, The backgrounds and
        typography were limited to singular hue colours, as I thought that using
        background imagery, as well as having image focal points, would make the
        articles too visually busy and detracted too far from the emphasised
        content. The "Outputs" articles were all two-page spreads, and solely
        included images and the names of the fictional AI artists (as well as
        page numbers and "Outputs" labels). I decided to limit the image numbers
        to 4, as I found that was a good ratio between different examples to
        show and the resolution available for each image. I experiemented with
        the placement of the artists name for visual interest, including the
        top, bottom, and the center of the spread, which produced results that I
        found interesting. I also found that including the prompt used to
        produce the images proved to be cumbersome to design around, as
        sometimes the prompts were quite detailed and included a lot of text. To
        rectify this, I numbered the images used, so that they could be
        cross-referenced with an index at the back of the magazine which would
        contain the text for the prompts used.
      </AppText>
      <AppText textAlign="center" fontSize="20px">
        Non-Outputs Article Designs
      </AppText>
      {range(2).map((item) => (
        <ExampleRow key={item} mt="20px">
          <Image
            src={imagePath + `articles/other/other-${item * 2 + 1}.png`}
            fallback={<Spinner size="xl" color="white" />}
            h="500px"
          />
          <Image
            src={imagePath + `articles/other/other-${item * 2 + 2}.png`}
            fallback={<Spinner size="xl" color="white" />}
            h="500px"
          />
        </ExampleRow>
      ))}
      <AppText textAlign="center" fontSize="20px">
        Outputs Article Designs
      </AppText>
      {range(2).map((item) => (
        <ExampleRow key={item} mt="20px">
          <Image
            src={imagePath + `articles/outputs/outputs-${item * 2 + 1}.png`}
            fallback={<Spinner size="xl" color="white" />}
            w="50%"
          />
          <Image
            src={imagePath + `articles/outputs/outputs-${item * 2 + 2}.png`}
            fallback={<Spinner size="xl" color="white" />}
            w="50%"
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
