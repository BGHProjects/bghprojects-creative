import { chakra, Text, Image, Spinner, HStack, Center } from "@chakra-ui/react";

const VanguardHeroCallContent = () => {
  const imagePath = "/assets/images/ui-ux-design/designs/vanguard-herocall/";

  return (
    <>
      <AppText textAlign="left" fontSize="30px">
        Overview
      </AppText>
      <AppText fontSize="20px">
        The following is a project where I designed a hero request app for a
        fictional superhero team called the Vanguard.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Problem Brief
      </AppText>
      <AppText fontSize="20px">
        The United Nations Security Council has sanctioned certain
        high-importance individuals from across the globe to have the authority
        to requisition members of the international superhero team, the
        Vanguard, at their discretion. The Vanguard and United Nations Security
        Council have detemined that the best way to facilitate this is through a
        mobile applications, exclusive to those authorised by the Security
        Council. You are required to design mockups for said mobile application,
        that allows users to call a member of the Vanguard to their immediate
        location with the push of a single button. They have also requested that
        the app able to display the availability of all the current members of
        the Vanguard, as well as a list of pre-saved locations that the Vanguard
        could be sent to.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Design Overview
      </AppText>
      <AppText fontSize="20px">
        In total, nine screens were designed, incorporating the three core
        pieces of functionality requried by the Problem Brief, including the
        ability to requisition a member of the Vanguard from a single button
        press, displaying the availability of all members of the Vanguard, and a
        list of saved locations they could be deployed to. The simplicity of the
        app's functionality is reflected in its designs, with the primary
        feature of requisitioning through the single button press to be front
        and centre when the application loads, with the other two secondary
        features located literally to the of sides of the app. A flat,
        minialistc design was employed, in order to reflect the simplicity of
        the functionality, and also to reduce mental interpretation of how to
        use the app. Very few button pressed are included, and the different
        features of the app can be access by simply swiping across.
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Colour Scheme
      </AppText>
      <AppText fontSize="20px">
        The primary colour of the Vanguard is orange, with their secondary
        colours being black and white, so this was used for the entirety of the
        app. Various shades of the orange colour, as well as different
        transparencies of black and white were also used for highlighting,
        contrasting, and visual effects purposes.
      </AppText>
      <HStack mt="40px" justifyContent="space-evenly">
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#EF5600"
          border="1px solid white"
        >
          <Text color="white" fontFamily="Electrolize">
            EF5600
          </Text>
        </Center>
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#E38800"
          border="1px solid white"
        >
          <Text color="white" fontFamily="Electrolize">
            E38800
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
      <AppText textAlign="left" fontSize="30px">
        Designs
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Tap Screen Default
      </AppText>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "Tap Screen Default.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
          border="2px solid darkgrey"
          borderRadius="5px"
        />
        <AppText fontSize="20px" maxW="40%">
          The Tap Screen is what the user sees as soon as they open the app.
          Intentionally simplistic, the screen is largely dominated by the
          button at its centre with the Vanguard logo, and the explanatory text
          above it, explaining what it does. At the bottom is a small piece of
          text referencing the app's affiliation with the Vanguard team. There
          are three dots at the top of the page, that indicate to the user that
          other screens are available to them by swiping to the left and right
          of the screen.
        </AppText>
      </ExampleRow>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Tap Screen Pressed
      </AppText>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "Tap Screen Tapped.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
          border="2px solid darkgrey"
          borderRadius="5px"
        />
        <AppText fontSize="20px" maxW="40%">
          This is what the user sees once they tap the button on the Tap Screen.
          The button visually shrinks to cue to the user that it has been
          pressed, and a black and neon polygonal visual effect ripples across
          the screen, to further indicate to the user that they have official
          requisitioned a member of the Vanguard.
        </AppText>
      </ExampleRow>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Hero Searching Screen
      </AppText>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "Hero Searching Screen.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
          border="2px solid darkgrey"
          borderRadius="5px"
        />
        <AppText fontSize="20px" maxW="40%">
          Once the user has tapped the button on the Tap Screen, they are taken
          to a page that displays a map with their current location marked. Down
          the bottom the user to shown the progress of their requisition,
          initially with a text cue, along with a visual representation with
          three dots. The dots indicate finding a hero relative to the user's
          location, the hero travelling to the user, and the hero arriving at
          the user's location. Below this visual indication card is a red button
          enabling the user to cancel the requisition.
        </AppText>
      </ExampleRow>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Hero Found Screen
      </AppText>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "Hero Found Screen.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
          border="2px solid darkgrey"
          borderRadius="5px"
        />
        <AppText fontSize="20px" maxW="40%">
          Once a hero has been found, the sides around the screen will begin to
          glow orange to visually indicate that the hero is inbound to the
          user's position. The text and graphic below will also change to
          reflect this transition. The name of the hero and their picture will
          be displayed to the user, to let them know who has answered their
          call. The map that dominates the screen will also show the hero's
          location relative to the location of the user. An estimated time of
          arrival is calculated based on this relative positioning.
        </AppText>
      </ExampleRow>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Hero Arriving Screen
      </AppText>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "Hero Arriving Screen.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
          border="2px solid darkgrey"
          borderRadius="5px"
        />
        <AppText fontSize="20px" maxW="40%">
          When the hero is arriving to the user's location, the screen will glow
          a much richer shade of orange, and ideally begin to vibrate. The text
          and visual cues below will also update reflecting this change, to
          further inform the user of the progress of their requisition.
        </AppText>
      </ExampleRow>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Hero Calling Screen
      </AppText>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "Hero Calling Screen.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
          border="2px solid darkgrey"
          borderRadius="5px"
        />
        <AppText fontSize="20px" maxW="40%">
          HeroCall also has the capacity to facilitate phone calls between users
          and heroes, allowing communication to and from each party. This
          communicate is handled in-app rather than through the phone's native
          calling ability, for international security purposes. The following is
          the screen that the user would see if their requisitioned hero is
          attempting to contact them through the app.
        </AppText>
      </ExampleRow>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Vanguard Lineup Screen
      </AppText>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "Vanguard Lineup Screen.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
          border="2px solid darkgrey"
          borderRadius="5px"
        />
        <AppText fontSize="18px" maxW="40%">
          The user will see this screen if they swipe left from the Tap Screen.
          This screen displays the currently lineup of the Vanguard, as well as
          their availability, relative to the location of the user. Each hero is
          identified by their superhero name and a picture. Their availbility to
          representing through their framing colour, as well as a text
          description of where they are. The following availability levels are
          as follows; 'Local' (green) meaning within the same city as the user,
          'Interstate' (orange) meaning within the same country but in a
          different state, 'Abroad' (red) meaning on planet Earth but not in the
          same country, 'Interdimensional' (purple) meaning the hero is in a
          different dimension relative to the user, and 'Off-World' (also
          purple) meaning the hero is currently on a different planet. Also note
          the star at the top right corner of Raycaster, which indicates that he
          is the user's current prefered hero to be called.
        </AppText>
      </ExampleRow>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Vanguard Selected Hero Screen
      </AppText>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "Vanguard Selected Hero Screen.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
          border="2px solid darkgrey"
          borderRadius="5px"
        />
        <AppText fontSize="18px" maxW="40%">
          If a user choose to select a hero from the Vanguard Lineup Screen,
          they will be taken to this screen. Here, the user can view the hero in
          more detail, including their list of powers and abilities, their last
          known location, and the usual residence, in order to make a more
          informed decision as to whether or not they should requisition them.
          The user is also able to remove or enable their preference for the
          hero at this screen.
        </AppText>
      </ExampleRow>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Saved Locations Page
      </AppText>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "Saved Locations Screen.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
          border="2px solid darkgrey"
          borderRadius="5px"
        />
        <AppText fontSize="18px" maxW="40%">
          If the user swipes right from the Tap Screen, they will be taking to
          the Saved Locations Page. Here the user can see the list of locations
          they have saved, for future requisition purposes. If a user taps on
          one of these locations, the app will requisition a hero to that
          location immediately. The user is able to search for new locations
          using the search bar at the top. The locations are also presented with
          an icon that the user can select, in case the location has any
          significant meaning to the user.
        </AppText>
      </ExampleRow>
      <AppText textAlign="left" fontSize="30px">
        All Designs
      </AppText>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "Tap Screen Default.png"}
          fallback={<Spinner size="xl" color="white" />}
          border="2px solid darkgrey"
          borderRadius="5px"
          maxHeight="600px"
        />
        <Image
          src={imagePath + "Tap Screen Tapped.png"}
          fallback={<Spinner size="xl" color="white" />}
          border="2px solid darkgrey"
          borderRadius="5px"
          maxHeight="600px"
        />
        <Image
          src={imagePath + "Hero Calling Screen.png"}
          fallback={<Spinner size="xl" color="white" />}
          border="2px solid darkgrey"
          borderRadius="5px"
          maxHeight="600px"
        />
      </ExampleRow>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "Hero Searching Screen.png"}
          fallback={<Spinner size="xl" color="white" />}
          border="2px solid darkgrey"
          borderRadius="5px"
          maxHeight="600px"
        />
        <Image
          src={imagePath + "Hero Found Screen.png"}
          fallback={<Spinner size="xl" color="white" />}
          border="2px solid darkgrey"
          borderRadius="5px"
          maxHeight="600px"
        />
        <Image
          src={imagePath + "Hero Arriving Screen.png"}
          fallback={<Spinner size="xl" color="white" />}
          border="2px solid darkgrey"
          borderRadius="5px"
          maxHeight="600px"
        />
      </ExampleRow>
      <ExampleRow mt="40px">
        <Image
          src={imagePath + "Vanguard Lineup Screen.png"}
          fallback={<Spinner size="xl" color="white" />}
          border="2px solid darkgrey"
          borderRadius="5px"
          maxHeight="600px"
        />
        <Image
          src={imagePath + "Vanguard Selected Hero Screen.png"}
          fallback={<Spinner size="xl" color="white" />}
          border="2px solid darkgrey"
          borderRadius="5px"
          maxHeight="600px"
        />
        <Image
          src={imagePath + "Saved Locations Screen.png"}
          fallback={<Spinner size="xl" color="white" />}
          border="2px solid darkgrey"
          borderRadius="5px"
          maxHeight="600px"
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

export default VanguardHeroCallContent;
