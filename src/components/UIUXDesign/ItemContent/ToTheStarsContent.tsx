import { chakra, Text, Image, Spinner, HStack, Center } from "@chakra-ui/react";

/**
 * Content that is displayed in the UI / UX Design page
 * when To The Stars is selected
 */
const ToTheStarsContent = () => {
  const imagePath = "/assets/images/ui-ux-design/designs/to-the-stars/";

  return (
    <>
      <AppText textAlign="left" fontSize="30px">
        Overview
      </AppText>
      <AppText fontSize="20px">
        The following is a project where I designed a space flight booking
        mobile app called 'To The Stars'. The app allows users to browse flights
        between the different planets, moons, and dwarf planets of our solar
        system and book flights between them. The app also allows users to
        research the different celestial bodies in our solar system, to pique
        their curiosity as to where they might want to travel to.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Problem Brief
      </AppText>
      <AppText fontSize="20px">
        An up and coming start-up called 'To The Stars' need designs for a
        mobile application to facilitate their core business model, which is to
        book flights on different star craft between the celestial bodies of our
        solar system. The app must allow the user to see all the different
        celestial bodies of our solar system, including planets, moons, and
        dwarf planets, and enable them to a book a flight once they have decided
        on one. This booking must entail the full process one goes through for a
        regular flight booking, including the type of flight, destination
        selection, seat allocation, and receiving a boarding pass.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Design Overview
      </AppText>
      <AppText fontSize="20px">
        In total, eight screens were designed, representing a primary and
        secondary flow that a user might take whilst using the app. The primary
        flow involves booking a flight by first selecting a to and from
        destination, as well as all relevant ancilliary values, such as if its a
        return trip, the desired dates, and the cabin class. Following this, the
        user is presented with all the hypothetical flights that match their
        inputs. Once a flight is selected, the available seats are presented to
        them for their choosing. Once a seat has been chosen a boarding pass,
        complete with a QR code, is presented to them, to confirm their flight.
        The secondary flow of the application involves the user being able to
        explore different celestial objects in our solar system, and to learn
        more about each location from its dedicated informational page.
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Design Inspiration
      </AppText>
      <AppText fontSize="20px">
        The inspiration for the design of the app was a combination of a space
        exploration / informational application and a typical flight booking
        application. Various space exploration / informational apps typically
        include dark colour themes which can sometimes solely incorporate black
        as their primary colour, as they use different astronomical phenomena,
        such as nebulas, galaxies, and planets, to provide colour and vibrancy
        to the colour scheme. This colour scheme is usually accompanied by a
        white typeface, which is usually either slender to take inspiration from
        science fiction, or an angled sans font drawing inspiration from older
        texts and sources on the subject of space. Secondary colours are
        typically not used in favour of using underlines or outlines to signify
        buttons or other interactable content.
      </AppText>
      <AppText fontSize="20px">
        Typical flight booking ables take a more standard design approach,
        usually having a primary colour (which can be a strong white or black
        variant), a secondary vibrant colour, like that found on the colour
        wheel, and a highlight, which is usually the inverse of the primary
        colour. A standard flat vector style is applied to the different
        components of the UI, with different shades of the secondary colour
        being used in case there are contrasting issues. I found it quite an
        interesting challenge to combine these two conflicting styles. I
        redesigned the layout a few times with different typefaces, colour
        schemes, and component designs, to try and strike a balance between the
        minimalist standardisation of the travel app inspiration, with the
        ethereal, epicness style from the space informational app inspiration.
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Colour Scheme
      </AppText>
      <AppText fontSize="20px">
        To strike a balance between the two styles, I decided to use a darker
        blue as the primary colour, to align with the styles of the space
        informational app theme, and a lighter purple colour for the secondary
        to reflect a modern minimalistic vector app style. I found that the two
        completed each other well, and were able to convey the moods of both
        inspirations harmoniously. For highlights, white was used, as black was
        too dark for contrasting purposes. Below are the hexcodes for the two
        main colours used.
      </AppText>
      <HStack mt="40px" justifyContent="space-evenly">
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#00011A"
          border="1px solid white"
        >
          <Text color="white" fontFamily="Electrolize">
            00011A
          </Text>
        </Center>
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#3F1376"
          border="1px solid white"
        >
          <Text color="white" fontFamily="Electrolize">
            3F1376
          </Text>
        </Center>
      </HStack>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        App Flow
      </AppText>
      <AppText fontSize="20px">
        As mentioned previously, there are two main flows for the app. The first
        being the booking of a ticket between two destinations, and the second
        being the exploration of the different celestial objects in our solar
        system. The following was a rough diagram developed during the ideation
        phase that visually represents these two flows, and how they work
        together.
      </AppText>

      <Center
        bg="#ffffff40"
        mt="40px"
        padding="30px"
        borderRadius="10px"
        w="60%"
        h="700px"
      >
        <Image
          src={imagePath + "App Flow Chart.png"}
          fallback={<Spinner size="xl" color="white" />}
          h="100%"
        />
      </Center>
      <AppText textAlign="left" fontSize="30px">
        Designs
      </AppText>
      <ExampleRow>
        <Image
          src={imagePath + "Login Page.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
        />
        <AppText fontSize="20px" w="40%">
          This is the page that the user would see once they initially load the
          app. The design is minimalistic, featuing only the title, subtitle,
          and the button to start using the app. The layout is dominated by the
          image of the red star, which represents the enormity of the objects in
          our solar system compared to us, and also showcases the beauty of such
          celestial objects.
        </AppText>
      </ExampleRow>

      <ExampleRow>
        <AppText fontSize="20px" w="40%">
          The home page is what the user sees once they log into the app. They
          are initially greeted with their profile picture, their name, and an
          overview of their statistical usage of the app, including their flyer
          points, which are used for rewards, and a summary of where they have
          flown to using the app. Following this are the two primary calls to
          action for the app, as highlighted by their use of the secondary
          colour. These are 'Book Flights', which allows the user to book their
          flight, and 'Explore' which allows the user to view the different
          celestial objects in our solar system. After this is a summary of the
          user's upcoming flights, including their destinations, arrival
          times/dates, cost, and who they are flying with. The remainder of
          their profile is promotions that are available with the app.
        </AppText>
        <Image
          src={imagePath + "Home Page.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
        />
      </ExampleRow>

      <ExampleRow>
        <Image
          src={imagePath + "Explore Page.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
        />
        <AppText fontSize="20px" w="40%">
          This page represents the start of the secondary flow within the app,
          and allows the user to search through all the celestial objects within
          our solar system. The objects are divided into three categories;
          Planets, Moons, and Dwarf Planets. Each celestial object contains a
          preview, which includes a visual representation of the object, its
          accumulative rating by users across the app, information above its
          living conditions, an image of the surface, and a bookmark button
          which enables the user to save this destination for later viewing.
        </AppText>
      </ExampleRow>

      <ExampleRow>
        <AppText fontSize="20px" w="40%">
          Once a user selects a celestial object from the above page, this is
          what they see. Various content is available to the user, including a
          text overview of the conditions and history of the object, a selection
          of top destinations to visit, a list of upcoming events that are
          occuring at the destination, and all the written reviews across the
          app for the destination. From here, they may also select the
          destination they are viewing, to be automatically taken to the Book
          Flights page with the destination preselected, to begin the process of
          finding a flight to this destination.
        </AppText>
        <Image
          src={imagePath + "Celestial Object Page.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
        />
      </ExampleRow>

      <ExampleRow>
        <Image
          src={imagePath + "Book Flight Page.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
        />
        <AppText fontSize="20px" w="40%">
          This page represents the primary action that a user would take in To
          The Stars. From here the user can begin the process of booking a space
          flight. They initially select two destinations across the solar system
          that they would like to travel to. Following this, they provide
          details that are common to a normal commercial flight, including
          whether or not it is a round trip, their preferred departure / arrive
          dates, their cabin class, and how many tickets that are needed to
          book.
        </AppText>
      </ExampleRow>

      <ExampleRow>
        <AppText fontSize="20px" w="40%">
          This page displays all the flights available that fit the criteria set
          by the user on the previous page. The page includes filtering and
          sorting functionality. The details of each flight that are previewed
          to the user include the flight provider, departure and arrival times,
          the flight number, and the cost of the ticket. Additional details are
          available to the user should they choose to view them.
        </AppText>
        <Image
          src={imagePath + "Select Flight Page.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
        />
      </ExampleRow>

      <ExampleRow>
        <Image
          src={imagePath + "Select Seat Page.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
        />
        <AppText fontSize="20px" w="40%">
          Once the user has choosen their desired flight, they are then able to
          choose their seats on the flight. The seats and their status is
          displayed graphically, and once the user has chosen their seat,
          aspects of the seat are displayed to them before they decide to
          confirm their selection.
        </AppText>
      </ExampleRow>

      <ExampleRow>
        <AppText fontSize="20px" w="40%">
          If the user is happy with their seat, and decided to complete their
          purchase, their boarding pass is rendered for them. The boarding pass
          displays all the information that was provided at each step of the
          process, as well as a QR code for them to scan in once they board
          their flight.
        </AppText>
        <Image
          src={imagePath + "Boarding Pass Page.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="600px"
        />
      </ExampleRow>
      <AppText textAlign="left" fontSize="30px">
        All Designs
      </AppText>
      <ExampleRow>
        {[
          "Login Page.png",
          "Home Page.png",
          "Explore Page.png",
          "Celestial Object Page.png",
        ].map((item) => {
          return (
            <Image
              src={imagePath + item}
              fallback={<Spinner size="xl" color="white" />}
              w="20%"
            />
          );
        })}
      </ExampleRow>
      <ExampleRow>
        {[
          "Book Flight Page.png",
          "Select Flight Page.png",
          "Select Seat Page.png",
          "Boarding Pass Page.png",
        ].map((item) => {
          return (
            <Image
              src={imagePath + item}
              fallback={<Spinner size="xl" color="white" />}
              w="20%"
            />
          );
        })}
      </ExampleRow>
    </>
  );
};

const ExampleRow = chakra(HStack, {
  baseStyle: {
    mt: "60px",
    w: "100%",
    justifyContent: "space-evenly",
  },
});

const AppText = chakra(Text, {
  baseStyle: {
    color: "white",
    fontFamily: "Electrolize",
    marginTop: "40px",
    w: "100%",
  },
});

export default ToTheStarsContent;
