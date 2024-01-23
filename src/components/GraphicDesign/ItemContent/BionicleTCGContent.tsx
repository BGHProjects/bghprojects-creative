import { chakra, Text, Image, Spinner, HStack, VStack } from "@chakra-ui/react";

/**
 * Content that is displayed in the Graphic Design page
 * when Bionicle TCG is selected
 */

const BionicleTCGContent = () => {
  const imagePath = "/assets/images/graphic-design/designs/bionicletcg/";

  const bionicleCards = [
    [
      "Toa Lewa Protoype Card.png",
      "Toa Gali Protoype Card.png",
      "Toa Mata Onua.png",
    ],
    [
      "Toa Mata Pohatu.png",
      "Toa Kopaka Protoype Card.png",
      "Toa Tahu Nuva.png",
    ],
    ["Toa Nuva Onua.png", "Toa Gali Nuva.png", "Toa Nuva Lewa.png"],
    ["Toa Nuva Pohatu.png", "Toa Nuva Kopaka.png", "Takanuva.png"],
    ["Tahnok-Kal.png", "Pahrak-Kal.png", "Kohrok-Kal.png"],
    ["Rahkshi Lerahk.png", "Rahkshi Guurahk.png", "Rahkshi Kurahk.png"],
    ["Piraka Zaktan.png", "Piraka Hakann.png", "Piraka Avak.png"],
    ["Piraka Vezok.png", "Piraka Thok.png", "Piraka Reidak.png"],
    ["Toa Inika Matoro.png", "Toa Inika Kongu.png", "Toa Inika Jaller.png"],
    ["Toa Inika Hewkii.png", "Toa Inika Hahli.png", "Toa Inika Nuparu.png"],
    ["Kanohi Dragon.png", "Tahtorak.png", "Kardas Dragon.png"],
    ["Axonn Card.png", "Makuta Teridax.png", "Brutaka Card.png"],
  ];

  const artifactCards = [
    ["Kanohi Avsa.png", "Kanohi Hau.png", "Kanohi Komau.png"],
    ["Kanohi Kadin.png", "Kanohi Kakama.png", "Kanohi Jutlin.png"],
    ["Kanohi Kraahkan.png", "Kanohi Mahiki.png", "Kanohi Matatu.png"],
    ["Kanohi Pakari.png", "Kanohi Suletu.png", "Kanoka Launcher.png"],
    ["Krana Bo.png", "Krana Ja.png", "Krana Vu.png"],
    ["Krana Su.png", "Krana Yo.png", "Krana Ka.png"],
  ];

  const effectCards = [
    [
      "Bohrok Swarm.png",
      "Energised Protodermis Metamorphosis.png",
      "Ga-Koro Kolhii Team.png",
    ],
    ["Ga-Metru.png", "Voya Nui Resistance.png", "The Archives.png"],
    ["Ta-Metru.png", "Le-Metru.png", "Face the Piraka.png"],
  ];

  const ThreeCardRow = ({
    name1,
    name2,
    name3,
  }: {
    name1: string;
    name2: string;
    name3: string;
  }) => {
    return (
      <ExampleRow mb="10px">
        <Image
          src={imagePath + name1}
          fallback={<Spinner size="xl" color="white" />}
          w="30%"
        />
        <Image
          src={imagePath + name2}
          fallback={<Spinner size="xl" color="white" />}
          w="30%"
        />
        <Image
          src={imagePath + name3}
          fallback={<Spinner size="xl" color="white" />}
          w="30%"
        />
      </ExampleRow>
    );
  };

  return (
    <>
      <AppText textAlign="left" fontSize="30px">
        Overview
      </AppText>
      <AppText fontSize="20px">
        The following is a project where I designed playing cards for a
        fictional trading card game based on the "BIONICLE" intellecutal
        property by the LEGO Group.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Problem Brief
      </AppText>
      <AppText fontSize="20px">
        The LEGO Group wants to revive the BIONICLE intellectual property for
        future releases. As part of the marketing campaign to revive the
        franchise, the LEGO Group has decided to expand its audience into the
        card playing community, by releasing a trading card game based on the
        canonical first generation of the BIONICLE franchise. According to the
        design of the game, there are three main card types; Bionicle cards,
        Artifact cards, and Effect cards. These three types of cards have
        several variations and archetypes, as detailed in the game's design
        document. The cards that are to be designed must conform to the rules of
        the game, include imagery relevant to the first generation of the
        BIONICLE franchise, and inspire the current generation to explore the
        world of BIONICLE.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Subject Field Research
      </AppText>
      <AppText fontSize="20px">
        I consulted and explored the various contemporary trading card games
        that were popular at the time of designing. These include Yu-Gi-Oh,
        Pokemon, Magic the Gathering, Final Fantasy TCG, and the One Piece TCG.
        All of these cards were visually dominated by the image-subject matter
        of the card themselves, with aspects of the card relevant to gameplay
        relegated to the outside edges or secondary sections of the cards. I
        noticed that different aspects of gameplay were highlighted using
        different visual techniques. Examples of this include the background
        colour of different Yu-Gi-Oh cards representing different types of
        cards, the outside border of different Pokemon cards reflecting the
        elemental attribute of said card, and the secondary colour of One Piece
        cards representing which crew that card was a part of. Almost all of the
        cards were to be read from top down, with either the name of the card or
        the card's image representing the first point of visual contact with the
        design, with the remainder of the relevant parts of the design being
        located downward from these main points of interest.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Design Overview
      </AppText>
      <AppText fontSize="20px">
        To properly understand the influence of the TCG's game design on the
        graphic design of the cards, I recommend you read the Bionicle TCG Game
        Design aspect of this portfolio, located in the Game Design section from
        the Home Page. As outlined in the Problem Brief, ultimately three
        different cards were designed for; Bionicle cards, Artifact cards, and
        Effect cards. All variations of the cards are visually dominated by the
        outlining border, which has a visually striking colour compared to the
        remainder of the card. This is because the colour-aspect of the Bionicle
        cards is contextually relevant to gameplay, and this avenue represents
        the most obvious way to distinguish between the three different types of
        cards used in the game.
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Bionicle Cards
      </AppText>
      <ExampleRow>
        <AppText fontSize="20px" maxW="40%" alignSelf="flex-start">
          The Bionicle cards represent the primary focus of the game, and as
          such received the most design attention. There were several key
          aspects of the Bionicle cards that had to be immediately identifiable
          when first glancing at the card. These were the "colour" attribute of
          the card, which is represented in the card's border, and the "type"
          attribute, which is represented by the border of the card's effect
          description. These aspects were applied to the largest aspects of the
          card itself, outside of the card art, in order to make their values as
          apparent as possible. Beyond this, the Battle, Block, and Health
          Points were grouped together to be viewed at the bottom of the card,
          to conform to the industry norm of having number values present at the
          bottom of the card. This was to ensure that navigating the card was
          easily translatable to fans of other trading card games.
        </AppText>
        <VStack justifyContent="flex-start" h="100%">
          <AppText textAlign="center" fontSize="20px" w="100%">
            Example Bionicle Card
          </AppText>
          <Image
            src={imagePath + "Toa Tahu Protoype Card.png"}
            fallback={<Spinner size="xl" color="white" />}
            maxHeight="600px"
          />
        </VStack>
      </ExampleRow>

      <AppText textAlign="left" fontSize="24px" pl="5%">
        Artifact Cards
      </AppText>
      <ExampleRow>
        <AppText fontSize="20px" maxW="40%" alignSelf="flex-start">
          Artifact cards are the next most common card in the game. Since a
          majority of these cards will either be Masks or some other form of
          equippable element of the Bionicle franchise, a more subtle colour was
          decided upon to be the card's border. Silver was ultimately decided
          upon as it was bright enough to contrast with the vibrant colours of
          the Bionicle cards, yet its lack of vibrancy did well to contrast with
          the different colours available for the different Kanohi, Krana, and
          other equippable elements from BIONICLE. Since there are fewer
          attributes relevant to gameplay, the remainder of the game is simply
          dominated by the card's effect.
        </AppText>
        <VStack justifyContent="flex-start" h="100%">
          <AppText textAlign="center" fontSize="20px" w="100%">
            Example Artifact Card
          </AppText>
          <Image
            src={imagePath + "Kanohi Avohkii.png"}
            fallback={<Spinner size="xl" color="white" />}
            maxHeight="600px"
          />
        </VStack>
      </ExampleRow>

      <AppText textAlign="left" fontSize="24px" pl="5%">
        Effect Cards
      </AppText>
      <ExampleRow>
        <AppText fontSize="20px" maxW="40%" alignSelf="flex-start">
          Like Artifact cards, a colour was chosen that would differentiate
          Effect cards from the vibrancy of Bionicle cards. A darker purple was
          chosen, as purple is not a common colour amongst the Bionicle
          franchise, and the darker hue would help distinguish those cards from
          Artifact cards. Like Artifact cards, there are very little attributes
          that are relevant to the card, so the remainder of the card is
          dominated by the card's effect's description.
        </AppText>
        <VStack justifyContent="flex-start" h="100%">
          <AppText textAlign="center" fontSize="20px" w="100%">
            Example Effect Card
          </AppText>
          <Image
            src={imagePath + "Face the Piraka.png"}
            fallback={<Spinner size="xl" color="white" />}
            maxHeight="600px"
          />
        </VStack>
      </ExampleRow>
      <AppText textAlign="left" fontSize="30px" mb="40px">
        Bionicle Card Examples
      </AppText>
      {bionicleCards.map((cardSet) => (
        <ThreeCardRow
          key={cardSet.toString()}
          name1={cardSet[0]}
          name2={cardSet[1]}
          name3={cardSet[2]}
        />
      ))}
      <AppText textAlign="left" fontSize="30px" mb="40px" mt="40px">
        Artifact Card Examples
      </AppText>
      {artifactCards.map((cardSet) => (
        <ThreeCardRow
          key={cardSet.toString()}
          name1={cardSet[0]}
          name2={cardSet[1]}
          name3={cardSet[2]}
        />
      ))}
      <AppText textAlign="left" fontSize="30px" mb="40px" mt="40px">
        Effect Card Examples
      </AppText>
      {effectCards.map((cardSet) => (
        <ThreeCardRow
          key={cardSet.toString()}
          name1={cardSet[0]}
          name2={cardSet[1]}
          name3={cardSet[2]}
        />
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

export default BionicleTCGContent;
