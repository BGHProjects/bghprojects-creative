import { chakra, Text, Image, Spinner, HStack, Center } from "@chakra-ui/react";

const HelldiversJerseyContent = () => {
  const imagePath = "/assets/images/graphic-design/designs/helldivers-jersey/";

  return (
    <>
      <AppText textAlign="left" fontSize="30px">
        Overview
      </AppText>
      <AppText fontSize="20px">
        The following is a project where I designed a sporting jersey based on
        the Helldivers video game series.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Problem Brief
      </AppText>
      <AppText fontSize="20px">
        A group of friends looking to enter into their local dodgeball league
        have contacted you asking you to create a design mockup of a jersey for
        the team to wear. The team regularly plays the Helldivers 2 video game,
        so they have asked you to design the jersey based on this video game.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Design Overview
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Colour Scheme
      </AppText>
      <AppText fontSize="20px">
        The decision with regards to the colour scheme was relatively
        straightforward; simply a combination of dark greys, black, and a gold
        colour to reflect the base colour scheme of the playable characters in
        Helldivers 2. There are other primary colours used within the game, such
        as whites, oranges, and sometimes military greens, but it was decided
        that a more simplistic colour palette should be used to create a
        stronger and more recognisable aesthetic.
      </AppText>
      <HStack mt="40px" justifyContent="space-evenly">
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#FFE713"
          border="1px solid white"
        >
          <Text color="black" fontFamily="Electrolize">
            FFE713
          </Text>
        </Center>
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#7C7C7C"
          border="1px solid white"
        >
          <Text color="white" fontFamily="Electrolize">
            7C7C7C
          </Text>
        </Center>
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#1F1F1F"
          border="1px solid white"
        >
          <Text color="white" fontFamily="Electrolize">
            1F1F1F
          </Text>
        </Center>
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#000000"
          border="1px solid white"
        >
          <Text color="white" fontFamily="Electrolize">
            000000
          </Text>
        </Center>
      </HStack>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Subject Matter Research
      </AppText>
      <AppText fontSize="20px">
        Since the problem brief, a variety of different sources were explored.
        Initially, I decided to focus in on ESports gaming team jersey designs,
        given that the brief mentioned that the team members were all avid video
        game players. These were helpful to gain inspiration for different
        graphics that could be used on the jerseys, but ultimately I pivoted
        away from this idea, and instead pursued the aesthetics that are
        available within the Helldivers 2 game. The game itself contains a
        significant amount of aesthetic customisation, mainly revolving around
        the armour that the player wears and the cape that they don. The more I
        continued to explore the armour and cape graphic styles used in the game
        the more I felt that this be the most organic choice for the graphical
        style of the jersey. Based on this, I decided make the basis of the
        jersey design be the armour worn by the playable characters in the game.
      </AppText>
      <AppText textAlign="center" fontSize="16px">
        ESports Gaming Jersey Considerations
      </AppText>
      <ExampleRow mt="40px" h="300px">
        <Image
          src={imagePath + "research/jersey-1.jpg"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "research/jersey-2.jpg"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px" h="300px">
        <Image
          src={imagePath + "research/jersey-3.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "research/jersey-4.jpg"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <AppText textAlign="center" fontSize="16px">
        Helldivers Customisation Considerations
      </AppText>
      <ExampleRow mt="40px" h="400px">
        <Image
          src={imagePath + "research/helldivers-1.webp"}
          fallback={<Spinner size="xl" color="white" />}
          w="40%"
        />
        <Image
          src={imagePath + "research/helldivers-2.jpg"}
          fallback={<Spinner size="xl" color="white" />}
          w="40%"
        />
      </ExampleRow>
      <ExampleRow mt="40px" h="300px">
        <Image
          src={imagePath + "research/helldivers-3.webp"}
          fallback={<Spinner size="xl" color="white" />}
          w="40%"
        />
        <Image
          src={imagePath + "research/helldivers-4.jpg"}
          fallback={<Spinner size="xl" color="white" />}
          w="40%"
        />
      </ExampleRow>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Early Iterations
      </AppText>
      <AppText fontSize="20px">
        Some ESports team inspired designs were iterated initially, to see how
        they would work with the the Helldivers aesthetic. Whilst the use of
        angular and sharp shapes seemed to work well with a basic black
        background and the standard "Helldivers" text logo, as mentioned above,
        it was decided that designs more reflecting the in-game cosmetics should
        be used. This included iterations of the different pieces of armour
        worn, involving heavy use of bulky, hexagonal and strap-like shapes.
      </AppText>
      <ExampleRow mt="40px" h="400px">
        <Image
          src={imagePath + "/initial/jersey-1.png"}
          fallback={<Spinner size="xl" color="white" />}
          w="18%"
        />
        <Image
          src={imagePath + "/initial/jersey-2.png"}
          fallback={<Spinner size="xl" color="white" />}
          w="18%"
        />
        <Image
          src={imagePath + "/initial/jersey-3.png"}
          fallback={<Spinner size="xl" color="white" />}
          w="18%"
        />
        <Image
          src={imagePath + "/initial/jersey-4.png"}
          fallback={<Spinner size="xl" color="white" />}
          w="18%"
        />
        <Image
          src={imagePath + "/initial/jersey-5.png"}
          fallback={<Spinner size="xl" color="white" />}
          w="18%"
        />
      </ExampleRow>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "/initial/shapes-1.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "/initial/shapes-2.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <AppText textAlign="left" fontSize="30px">
        Final Design
      </AppText>
      <AppText fontSize="20px">
        The base outfit worn in the game was used as the foundation for the
        overall jersey design. The front of the jersey was made to reflect the
        armour which involved several bulky hexagon and strap-like shapes. These
        were primarily of dark grey, trimmed with the gold accent colour. I
        attempt to use gradient shading, and light shades of the grey colour to
        display three-dimensional aspects of the armour. The sleeves consisted
        of the shoulder pauldrons of the base armour, which again involved bulky
        angled shapes, with a more prominent gold trim. The back of the jersey
        was designed to reflect the capes that the Helldivers wear in the game,
        more specifically the "Liberty's Herald" variation.
      </AppText>
      <ExampleRow mt="40px" h="600px">
        <Image
          src={imagePath + "/final/Front Centre.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "/final/Back Centre.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px" h="700px">
        <Image
          src={imagePath + "/final/Front Left.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "/final/Back Right.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px" h="700px">
        <Image
          src={imagePath + "/final/Front Right.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "/final/Back Left.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </ExampleRow>
      <ExampleRow mt="40px" h="700px">
        <Image
          src={imagePath + "/final/Right.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
        <Image
          src={imagePath + "/final/Left.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
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

export default HelldiversJerseyContent;
