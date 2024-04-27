import { chakra, Text, Image, Spinner, HStack, Center } from "@chakra-ui/react";

const NRBAMediaContent = () => {
  const imagePath = "/assets/images/graphic-design/designs/nrba-media/";

  const designs = [
    "Sydney Sync",
    "Brisbane Blaze",
    "Perth Power",
    "Canberra Cosmics",
  ];

  return (
    <>
      <AppText textAlign="left" fontSize="30px">
        Overview
      </AppText>
      <AppText fontSize="20px">
        The following is a project where I designed some promotional media for a
        fictional robotic basketball league.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Problem Brief
      </AppText>
      <AppText fontSize="20px">
        The newly formed National Robotic Basketball Association (NRBA) is
        looking to kickstart the launch of their inaugural season with a viral
        media campaign across every platform available. You have been contracted
        to produce a piece of promotional material for four of the league's
        teams, that could be used in a video commercial, 2D print, or social
        media post. The media pieces are to include members of the team, the
        team's logo and name, and other visual content related to the theme
        associated with the team.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Design Overview
      </AppText>
      <AppText fontSize="20px">
        In accordance with the brief, four pieces of promotional material were
        iterated. These pieces were made for the following teams, the Sydney
        Sync, the Brisbane Blaze, the Perth Power, and the Canberra Cosmics.
        Each piece contains five members of the team, each have grey,
        transluscent limbs, and a black glass helmet with a thin neon visor over
        their heads. Each piece was made in a square format, for versatility
        purposes.
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Colour Palette
      </AppText>
      <AppText fontSize="20px">
        A primary coloured was assigned to each team, which became the
        foundation of their colour scheme. The assigned colours were as follows:
        blue for the Sydney Sync, red for the Brisbane Blaze, green for the
        Perth Power, and purple for the Canberra Cosmics. Various yellows and
        oranges were also used for the Brisbane Blaze, in order to fit their
        'fire' theme. Beyond this, various shades of those hues, as well as
        usage of black and white, constitued the colour palette for each of the
        teams.
      </AppText>
      <HStack mt="40px" justifyContent="space-evenly">
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#3EE8FF"
          border="1px solid white"
        >
          <Text color="black" fontFamily="Electrolize">
            3EE8FF
          </Text>
        </Center>
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#F80F00"
          border="1px solid white"
        >
          <Text color="white" fontFamily="Electrolize">
            F80F00
          </Text>
        </Center>
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#5AFF61"
          border="1px solid white"
        >
          <Text color="black" fontFamily="Electrolize">
            5AFF61
          </Text>
        </Center>
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#4C00C8"
          border="1px solid white"
        >
          <Text color="white" fontFamily="Electrolize">
            4C00C8
          </Text>
        </Center>
      </HStack>
      <AppText textAlign="left" fontSize="30px">
        Designs
      </AppText>
      {designs.map((design) => (
        <ExampleRow mt="40px" h="800px">
          <Image
            src={imagePath + `/${design} Graphic.png`}
            fallback={<Spinner size="xl" color="white" />}
            h="100%"
          />
        </ExampleRow>
      ))}
      <AppText textAlign="left" fontSize="30px">
        All Designs
      </AppText>
      <ExampleRow mt="40px" w="100%">
        <Image
          src={imagePath + "/Sydney Sync Graphic.png"}
          fallback={<Spinner size="xl" color="white" />}
          w="40%"
        />
        <Image
          src={imagePath + "/Brisbane Blaze Graphic.png"}
          fallback={<Spinner size="xl" color="white" />}
          w="40%"
        />
      </ExampleRow>
      <ExampleRow mt="40px" w="100%">
        <Image
          src={imagePath + "/Perth Power Graphic.png"}
          fallback={<Spinner size="xl" color="white" />}
          w="40%"
        />
        <Image
          src={imagePath + "/Canberra Cosmics Graphic.png"}
          fallback={<Spinner size="xl" color="white" />}
          w="40%"
        />
      </ExampleRow>
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

export default NRBAMediaContent;
