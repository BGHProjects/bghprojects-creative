import { chakra, Text, Image, Spinner, HStack } from "@chakra-ui/react";

const BraveborneCoversContent = () => {
  const imagePath = "/assets/images/graphic-design/designs/braveborne-covers/";

  return (
    <>
      <AppText textAlign="left" fontSize="30px">
        Overview
      </AppText>
      <AppText fontSize="20px">
        The following is a project where I designed covers for a fictional
        fantasy / horror novel series.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Problem Brief
      </AppText>
      <AppText fontSize="20px">
        For the 10th anniversary of Morgan Devereux's fantasy / horror novel
        series, the Braveborne Saga, all five of the books are going to released
        with latest edition artworks and cover content. Each book requires a new
        front and back cover, as well as a spine design. Each book must indicate
        that it is the 10th anniverasary of the series.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Design Overview
      </AppText>
      <AppText fontSize="20px">
        In total 15 designs were iterated, including a front cover, back cover,
        and a spine for each of the five books, as detailed in the Problem
        Brief. There were various common designs aspects across all five books,
        in order to demonstrate the relationship between all of the books. In
        regards to the front covers, the cover was largely dominated by the
        cover's image, followed by the book's title and the author's name.
        Outside of this, a small red banner describing that this is a 10th
        anniversary edition was added, as to contrast and draw the eye from the
        remainder of the content, whilst allowing plenty of real estate for the
        more important contents of the cover. The spine also contains, the name
        of the book, author's name, 10 anniversary banner, and the placeholder
        publishing logo.
      </AppText>
      <AppText fontSize="20px">
        The back cover contains a written indication of which book in the series
        the current book represents, followed by a brief headline and two short
        paragraphs of synopsis for the novel. In addition to this, two quotes
        critically acclaiming the book are included, as well as a barcode and
        placeholder publisher logo. The colour scheme for the typeface used, as
        well as the images used in the cover image is meant to reflect the
        series's transition from fantasy into horror, with brighter and more
        pleasent content used for the earlier entries, followed by darker and
        grimmer colour schemes and imagery for the trailing books. The images
        used in the front covers flows seemlessly into the images used in the
        spine.
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Design Inspiration
      </AppText>
      <AppText fontSize="20px">
        Cover designs from franchises that I've read and enjoyed that are
        dominated by the image subject matter were consulted. Attributes of the
        designs that were noted and referenced include the percentage of space
        dedicated to the name of the book as opposed to the name of the author,
        the colouring of the typography and the variations of typeface used.
      </AppText>
      <ExampleRow mt="40px" h="400px">
        <Image
          src={imagePath + "/design-inspiration/a-storm-of-swords.jpg"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "/design-inspiration/fellowship-of-the-ring.jpg"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px" h="400px">
        <Image
          src={imagePath + "/design-inspiration/order-of-the-phoenix.jpg"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "/design-inspiration/wolves-of-the-calla.jpg"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        AI Generated Images
      </AppText>
      <AppText fontSize="20px">
        The images in this project were generated through text-to-image AI.
        Prompt engineering was required in order to produce the relevant images,
        and several AIs were consulted and used, including the Meta Imagine AI
        and the Bing Image Generator AI. A plethora of different prompts were
        used, and unfortunately weren't recorded to be used in this
        documentation. Some of the common traits and phrases used in the prompt
        engineering include "detailed, crisp, realistic, sharp" in order to
        ensure the quality of the images, and "armoured warrior, knight, battle,
        castle, medieval" and other like terms to produce the required fantasy
        elements.
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Typography
      </AppText>
      <AppText fontSize="20px">
        The decision-making process for the typography to be used involved
        referring to the design inspiration as mentioned above, as well as
        attempting to emulate the cursive nature of common medieval text
        stereotypes. Various typefaces were considered, but ultimately Cinzel
        Decorative was decided upon, due to its slim and cursive nature.
      </AppText>
      <AppText textAlign="center" fontSize="16px">
        Typography Considerations
      </AppText>
      <ExampleRow mt="40px" h="400px">
        <Image
          src={imagePath + "/typeface-considerations/1.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "/typeface-considerations/2.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <AppText textAlign="left" fontSize="30px">
        Book One: The Greed of Ghael
      </AppText>
      <AppText fontSize="20px">
        The first book in the series is firmly a fantasy novel, and introduces
        the reader to the world of the Braveborne saga. As such, the front cover
        image includes a member of House Ghael, themself a Braveborne
        approaching the castle that houses the king of Relegasia. A light and
        unsuspecting colour palette was used.
      </AppText>
      <ExampleRow mt="40px" h="700px">
        <Image
          src={imagePath + "/the-greed-of-ghael/book1-back.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "/the-greed-of-ghael/book1-front.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "/the-greed-of-ghael/book1-spine.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <AppText textAlign="left" fontSize="30px" mt="60px">
        Book Two: The Breaking of Relegasia
      </AppText>
      <AppText fontSize="20px">
        The second book in the series details the civil war that erupts between
        the major parties and factions. In accordance with this, a battle is
        depicted in the covers image, along with a strong colour palette.
      </AppText>
      <ExampleRow mt="40px" h="700px">
        <Image
          src={imagePath + "/the-breaking-of-relegasia/book2-back.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "/the-breaking-of-relegasia/book2-front.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "/the-breaking-of-relegasia/book2-spine.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <AppText textAlign="left" fontSize="30px" mt="60px">
        Book Three: Reign of the Braveborne
      </AppText>
      <AppText fontSize="20px">
        Following from the shock twist of the saga's current antagonist's
        victory, the saga starts to delve into horror themes. To reflect this, a
        procession of House Ghael's forces is used for the cover image. A
        lighter blue hue was used for the typography, in order to properly
        contrast the black and orange colours of House Ghael used in the cover
        image.
      </AppText>
      <ExampleRow mt="40px" h="700px">
        <Image
          src={imagePath + "/reign-of-the-braveborne/book3-back.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "/reign-of-the-braveborne/book3-front.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "/reign-of-the-braveborne/book3-spine.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <AppText textAlign="left" fontSize="30px" mt="60px">
        Book Four: From Blood and Ashes
      </AppText>
      <AppText fontSize="20px">
        This book represents the saga solidifying its horror themes and
        apocalyptic-like setting. The cover image used is a knight in despair
        amidst a ruinous city. A darker colour palette is used to reflect this
        descension in theme.
      </AppText>
      <ExampleRow mt="40px" h="700px">
        <Image
          src={imagePath + "/from-blood-and-ashes/book4-back.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "/from-blood-and-ashes/book4-front.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "/from-blood-and-ashes/book4-spine.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <AppText textAlign="left" fontSize="30px" mt="60px">
        Book Five: The Great Night Comes
      </AppText>
      <AppText fontSize="20px">
        The final book in the series details the arrival of the apocalyptic
        event that was prophesised at the beginning of the saga. The series has
        now fully transitioned into the horror genre, which is reflected in the
        tenebrous cover image and colour palette.
      </AppText>
      <ExampleRow mt="40px" h="700px">
        <Image
          src={imagePath + "/the-great-night-comes/book5-back.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "/the-great-night-comes/book5-front.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "/the-great-night-comes/book5-spine.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <AppText textAlign="left" fontSize="30px" mt="60px">
        All Front Covers
      </AppText>
      <ExampleRow mt="40px" h="700px">
        <Image
          src={imagePath + "/the-greed-of-ghael/book1-front.png"}
          fallback={<Spinner size="xl" color="white" />}
          w="18%"
        />
        <Image
          src={imagePath + "/the-breaking-of-relegasia/book2-front.png"}
          fallback={<Spinner size="xl" color="white" />}
          w="18%"
        />
        <Image
          src={imagePath + "/reign-of-the-braveborne/book3-front.png"}
          fallback={<Spinner size="xl" color="white" />}
          w="18%"
        />
        <Image
          src={imagePath + "/from-blood-and-ashes/book4-front.png"}
          fallback={<Spinner size="xl" color="white" />}
          w="18%"
        />
        <Image
          src={imagePath + "/the-great-night-comes/book5-front.png"}
          fallback={<Spinner size="xl" color="white" />}
          w="18%"
        />
      </ExampleRow>
      <AppText textAlign="left" fontSize="30px" mt="60px">
        All Spines
      </AppText>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "/the-greed-of-ghael/book1-spine.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "/the-breaking-of-relegasia/book2-spine.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "/reign-of-the-braveborne/book3-spine.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "/from-blood-and-ashes/book4-spine.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "/the-great-night-comes/book5-spine.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
    </>
  );
};

export default BraveborneCoversContent;

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
