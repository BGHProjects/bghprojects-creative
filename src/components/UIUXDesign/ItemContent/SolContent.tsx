import { chakra, Text, Image, Spinner, HStack, Center } from "@chakra-ui/react";

const SolContent = () => {
  const imagePath = "/assets/images/ui-ux-design/designs/sol/";

  const colours = ["00BB13", "F16600", "179EFF", "9900E1"];

  return (
    <>
      <AppText textAlign="left" fontSize="30px">
        Overview
      </AppText>
      <AppText fontSize="20px">
        The following is a project where I designed menu UI for a fictional
        early development science fiction first person shooter video game called
        Sol.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Problem Brief
      </AppText>
      <AppText fontSize="20px">
        A nascent game studio is currently developing their first AAA title, a
        science fiction first person shooter called Sol. The game is still in
        the conceptual phase, with a lot of the major game mechanics and design
        elements still currently being worked on by the team. As part of this
        design process, the game studio would like rough, early UI designs for
        the initial parts of the game, in order to assess the iteration of the
        game at the current stage, and make further significant decisions. The
        studio has requested a landing page, a page where the user can select
        one of the four playable factions (Solguard, Malvanion Dominion,
        Andromeda Alliance, Instruments of Iotha), a class selection page for
        each of the factions, and rough concepts for different aspects of the
        loadout menu available to each class. Each class has a primary,
        secondary and possible a special weapon, along with three equippable
        abilities. Each class should also have its own rank, exp accrued, and
        current level. Other elements to be displayed can be added as you wish.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Design Overview
      </AppText>
      <AppText fontSize="20px">
        In total, 38 designs were iterated, including a landing page, class
        selection page, four faction description pages, four class selection
        plus a base selection page for each faction, as well as a loadout menu,
        primary weapon selection menu, and ability tree concept per faction. The
        progression through the designs is quite straight forward; once the
        player begins the game they choose a faction, then a class, then they
        are free to customise that class accordingly. Several of the designs
        incorporate a two column structure, whilst others have a slightly more
        complicated layout depending on the content of the page. The content of
        most of the designs is left aligned, with each page title being aligned
        to the left as well and the content of the rest of the design proceeding
        rightwards, in order to follow the natural direction of reading text for
        most English or European language natives.
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Colour Scheme
      </AppText>
      <AppText fontSize="20px">
        Since each faction had its own distinction primary colour, the majority
        of the UI used a neutral colour scheme that could accommodate primary
        colours from all across the spectrum. This included heavy use of white
        and black, and transparent version of the two. The colours used for each
        faction are green for the Solguard, orange for the Malvanion Dominion,
        blue for the Andromeda Alliance, and purple for the Instruments of
        Iotha.
      </AppText>
      <HStack mt="40px" justifyContent="space-evenly">
        {colours.map((colour) => (
          <Center
            borderRadius="10px"
            boxSize="100px"
            backgroundColor={`#${colour}`}
            border="1px solid white"
          >
            <Text color="white" fontFamily="Electrolize">
              {colour}
            </Text>
          </Center>
        ))}
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
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#FFFFFF"
          border="1px solid white"
        >
          <Text color="black" fontFamily="Electrolize">
            FFFFFF
          </Text>
        </Center>
      </HStack>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Difficulty with Assets
      </AppText>
      <AppText fontSize="20px">
        It is important to note that a majority of the assets used for the
        project were generated using AI, specifically the Bing AI Image
        Generator, and the Meta AI Imagine Image Generator. The type of content
        that was required for this project (weapon designed) was frequently
        refused to be displayed by the AIs, so in its place content from other
        science fiction properties was used, including Apex Legends and Halo, as
        well as designs from the internet. This project does not intend to
        breach any copyright from that content, nor does it claim any ownership
        of it. It is simply being used for the purpose of a design portfolio.
      </AppText>
      <AppText fontSize="20px">
        It is also relevant to note that it proved difficult to create designs
        that were not cut off at the boundaries of the images, or to place items
        that were shown from the correct angle. In order to compensate for this,
        some images were placed in a way that is deliberately cut off by the
        frame of the UI component that housed it, but sometimes this was not
        always possible. Some images were also rotated and placed in a certain
        configuration as to visually alleviate this issue, sometimes
        ineffectively. Please take note of this when persuing the designs.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Designs
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Landing Page / Faction Selection
      </AppText>
      <AppText fontSize="20px">
        As discussed above, the game starts at a landing page, that is simply a
        large solar eclipse, to align with the theme of the game's story, being
        the star in our solar system. From there the used is presented with the
        four factions which they can choose from, which includes an image of
        some example classes, the name, and the insignia of the faction.
      </AppText>
      <Image
        mt="40px"
        src={imagePath + "/SOL Splash Screen.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={imagePath + "/SOL Faction Choosing Screen.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Faction Description
      </AppText>
      <AppText fontSize="20px">
        Each faction Description page contains a brief text description of the
        lore of the faction, along with the faction's insignia. Following on
        from this, as described above, the user selects one of four classes from
        that faction to play as, then is able to peruse the loadout menu for
        that class.
      </AppText>
      <Image
        mt="40px"
        src={imagePath + "/SOL Solguard Faction Selection.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={imagePath + "/SOL Malvanion Faction Selection.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={imagePath + "/SOL Andromeda Alliance Faction Selection.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={imagePath + "/SOL Instruments of Iotha Faction Selection.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Solguard Designs
      </AppText>
      <Image
        mt="40px"
        src={imagePath + "/Solguard/SOL Solguard Class Selection Ranger.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={imagePath + "/Solguard/SOL Solguard Class Selection Shadow.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={imagePath + "/Solguard/SOL Solguard Class Selection Commando.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={imagePath + "/Solguard/SOL Solguard Class Selection Vanguard.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={imagePath + "/Solguard/SOL Solguard Ranger Loadout Menu.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={imagePath + "/Solguard/SOL Solguard Primary Weapon Menu.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={imagePath + "/Solguard/SOL Solguard Abilities Menu.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Malvanion Dominion Designs
      </AppText>
      <Image
        mt="40px"
        src={
          imagePath +
          "/MalvanionDominion/SOL Malvanion Dominion Class Selection Hound.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/MalvanionDominion/SOL Malvanion Dominion Class Selection Panther.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/MalvanionDominion/SOL Malvanion Dominion Class Selection Ogre.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/MalvanionDominion/SOL Malvanion Dominion Class Selection Chimera.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/MalvanionDominion/SOL Malvanion Dominion Panther Loadout Menu.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/MalvanionDominion/SOL Malvanion Dominion Primary Weapon Menu.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/MalvanionDominion/SOL Malvanion Dominion Abilities Menu.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Andromeda Alliance Designs
      </AppText>
      <Image
        mt="40px"
        src={
          imagePath +
          "/AndromedaAlliance/SOL Andromeda Alliance Class Selection Defender.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/AndromedaAlliance/SOL Andromeda Alliance Class Selection Benefactor.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/AndromedaAlliance/SOL Andromeda Alliance Class Selection Liberator.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/AndromedaAlliance/SOL Andromeda Alliance Class Selection Saviour.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/AndromedaAlliance/SOL Andromeda Alliance Liberator Loadout Menu.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/AndromedaAlliance/SOL Andromeda Alliance Primary Weapon Menu.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/AndromedaAlliance/SOL Andromeda Alliance Abilities Menu.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Instruments of Iotha Designs
      </AppText>
      <Image
        mt="40px"
        src={
          imagePath +
          "/InstrumentsOfIotha/SOL Instruments of Iotha Class Selection Votary.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/InstrumentsOfIotha/SOL Instruments of Iotha Class Selection Preceptor.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/InstrumentsOfIotha/SOL Instruments of Iotha Class Selection Paladin.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/InstrumentsOfIotha/SOL Instruments of Iotha Class Selection Exemplar.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/InstrumentsOfIotha/SOL Instruments of Iotha Exemplar Loadout Menu.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/InstrumentsOfIotha/SOL Instruments of Iotha Primary Weapon Menu.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        mt="40px"
        src={
          imagePath +
          "/InstrumentsOfIotha/SOL Instruments of Iotha Abilities Menu.png"
        }
        fallback={<Spinner size="xl" color="white" />}
      />
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

export default SolContent;
