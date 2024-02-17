import { chakra, Text, Image, Spinner, HStack, Center } from "@chakra-ui/react";

const PulseContent = () => {
  const imagePath = "/assets/images/ui-ux-design/designs/pulse/";
  const screenImageHeight = "750px";
  return (
    <>
      <AppText textAlign="left" fontSize="30px">
        Overview
      </AppText>
      <AppText fontSize="20px">
        The following is a project where I designed a mobile app called 'PULSE'.
        The app is a gaming content aggregation app, and is a combination of a
        social media platform and an e-commerce platform. The app allows users
        to link different accounts with gaming platforms to the PULSE app,
        (including Epic Games, Steam, EA Games, etc.), to view all their gaming
        purchases and what is available across every platform from a single
        destination. By linking these accounts, users can not only view their
        purchases, but prices and available of games across the entire gaming
        ecosystem. The app also includes social media element, allowing users to
        view posts from different gaming-related entities, streams from their
        favourite content-creators, and catch and link up to play games with
        their friends.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Problem Brief
      </AppText>
      <AppText fontSize="20px">
        An up and coming start-up called 'PULSE' need proof of concept designs
        for a mobile application to change the landscape of the gaming scene.
        The owners want the application to allow users to connect accounts from
        different gaming platforms, as well as their gaming devices, to
        aggregate their game purchases and libraries within a single
        destination. They also want to include social media functionality,
        incorporating the latest events and posts from any and all entites and
        organisations related to the gaming industry. This also includes
        'friending' other users, and functionality to enable them to see what
        games they are playing and to chat with them. The user should be able to
        purchase games from any existing linked platform from within PULSE, and
        install said games on any linked device.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Design Overview
      </AppText>
      <AppText fontSize="20px">
        In total, seventeen designs were iterated, represented the different
        required functionality as outlined in the Problem Brief. In regards to
        the flow of the app's usage, a user begins using the app by linking
        their existing gaming accounts and devices to the PULSE app. Following
        this, several options are available to the user to use the app. There is
        the social media functionality, such as seeing what games their friends
        are playing, what their favourite streamers are up to, and the latest
        updates from various relevant organisations within the gaming industry.
        There is also the e-commerce functionality, such as seeing what games
        are available across all their linked accounts, and comparing the prices
        across each account. This section of the usability also includes the
        generation of a Games Library, consisting of what the user has already
        purchased, and which account it was installed from, as well as Wishlist,
        in which they can keep track of future releases they would like to
        purchase.
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Colour Scheme
      </AppText>
      <AppText fontSize="20px">
        The app involves the use of several colours for the logos and insignias
        of various gaming organisations, and well as heavy use of images.
        Because of this, a neutral colour scheme was decided upon, to not take
        away from the content that the app is displaying. A darker navy colour
        was decided upon as the main background colour, which is the primary
        colour used within the app. A lighter blend of turquoise and sky blue
        was used as the accent / highlight, to contrast the darkness of the
        navy, but to keep within the same colour channel as to not draw too much
        attention from the other colour-heavy aspects that the app is displaying
        to the user. Beyond this, white was also used as a secondary text
        colour, along with various opacities of white to illustrate hierarchy.
      </AppText>
      <HStack mt="40px" justifyContent="space-evenly">
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#010421"
          border="1px solid white"
        >
          <Text color="white" fontFamily="Electrolize">
            010421
          </Text>
        </Center>
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#00AAFF"
          border="1px solid white"
        >
          <Text color="white" fontFamily="Electrolize">
            00AAFF
          </Text>
        </Center>
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#00FFFF"
          border="1px solid white"
        >
          <Text color="white" fontFamily="Electrolize">
            00FFFF
          </Text>
        </Center>
      </HStack>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Glassmorphism
      </AppText>
      <AppText fontSize="20px">
        The use of glassmorphism is also present within PULSE's UI. This
        rationale for this technique's implementation was because PULSE is
        ultimately is very image-heavy, with images of games, posts, profile
        pictures, logos and other elements being very present and prominent in
        what is displayed to the user, in both the foreground and the
        background. The use of glassmorphism allowed to separate what is
        displayed in the foreground and the background with enough subtely as
        not to draw attention to this 'middle' layer of content. The use of
        glassmorphism combined with fading and gradients helps to ease the
        transition between primary and secondary content.
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        App Flow
      </AppText>
      <AppText fontSize="20px">
        This app doesn't contain too many flows of use, and instead invites the
        user to a very broad sense of use. There are many options available to
        them from the home screen, and as a result the flow of the app appears
        very broad and shallow.
      </AppText>
      <Center
        bg="#ffffff40"
        mt="40px"
        padding="30px"
        borderRadius="10px"
        w="100%"
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
          src={imagePath + "Splash Page.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight={screenImageHeight}
        />
        <AppText fontSize="20px" w="40%">
          This is the page that the user would see once they initially load the
          app. The design is minimalistic, featuing only the title, subtitle,
          and the button to start using the app. When running, the glowing
          turquoise circles would subtly pulsating out, to add a bit of interest
          to the page.
        </AppText>
      </ExampleRow>
      <ExampleRow>
        <AppText fontSize="20px" w="40%">
          During the account creation process, the user would reach this page,
          which is where they link their existing accounts across different
          gaming platforms. The list of all known common existing platforms
          would be initially presented to the user, which a search bar available
          at the top to allow the user to search for other platform options. A
          green tick is displayed within an option that has been successfully
          conntected to PULSE.
        </AppText>
        <Image
          src={imagePath + "Link Accounts.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight={screenImageHeight}
        />
      </ExampleRow>
      <ExampleRow>
        <Image
          src={imagePath + "Link Devices.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight={screenImageHeight}
        />
        <AppText fontSize="20px" w="40%">
          After the user has connected their accounts, they are then prompted to
          connect their available devices. Ideally, an initial list of devices
          would be made available to the user by accessing the phone's Bluetooth
          connectivity or WiFi network, but otherwise a search bar is available
          to the user to find any other devices. As with the previous page, a
          green tick is displayed within an option that has been successfully
          connected to PULSE.
        </AppText>
      </ExampleRow>
      <ExampleRow>
        <AppText fontSize="20px" w="40%">
          Following the successful creation of an account, the user is then
          directed to the Home Page. This page represents the central hub of the
          PULSE app, which the user would visit many times to reach the
          different aspects of functionality within the app. The user's name and
          their current status is displayed at the top. In this example, the
          user is currently playing Destiny 2 on a device that has been linked
          to the PULSE app. All of the options detailed in the App Flow Chart
          are available to be navigated to for the remainder of the page.
          Options beyond what are displayed here are available by swiping
          downwards.
        </AppText>
        <Image
          src={imagePath + "Home Page.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="750px"
        />
      </ExampleRow>
      <ExampleRow>
        <Image
          src={imagePath + "Sales Across All Platforms.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight={screenImageHeight}
        />
        <AppText fontSize="20px" w="40%">
          This is where the user can view the different sales for games across
          all their different linked platform accounts. Towards the top of the
          page, the user can filter by different categories, such as device or
          platform. The page's main content begins with the Featured section, in
          which the game tiles are noticably larger than the rest to draw
          attention to them. Following this, games that are on sale on the
          user's different linked accounts are listed down the page. Each game
          tile shows an image of the game, its title, its current discount, the
          old price crossed out and the new discounted price.
        </AppText>
      </ExampleRow>
      <ExampleRow>
        <AppText fontSize="20px" w="40%">
          Separate from games that are on sale, the user is also able to see any
          new releases across their linked accounts. This page contains
          substantially similar elements as the previous, including a filter,
          Featured section, and lists of games newly released, with their image,
          name, and price.
        </AppText>
        <Image
          src={imagePath + "New Releases.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight="750px"
        />
      </ExampleRow>
      <ExampleRow>
        <Image
          src={imagePath + "Individual Game Page.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight={screenImageHeight}
        />
        <AppText fontSize="20px" w="40%">
          If a player selects a game an individual game, they are presented with
          this screent, which provides them with several details about the game.
          These include the game's rating, pricing, developers, publisher, game
          type, when it was released, as well as information about the game's
          purchase, including how many people have done so, and any friends
          linked to this account that have purchased it. Beyond this, an
          overview of the game and images related to it are available to the
          user to peruse. The primary call to action, being to purchase the
          game, is representing by the contrasting turquoise button near the top
          of the screen.
        </AppText>
      </ExampleRow>
      <ExampleRow>
        <AppText fontSize="20px" w="40%">
          If a user decides to purchase a game they have selected, they are
          presented with a list of prices for that game across different
          platforms and game stores. They have the option to filter by their
          devices and accounts. The different prices are ordered by price by
          default, and are split into the different device types, to help the
          user navigate through the prices. The best price available is further
          highlighted with the app's colour scheme and the use of a border.
        </AppText>
        <Image
          src={imagePath + "Available Prices for Individual Game.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight={screenImageHeight}
        />
      </ExampleRow>
      <ExampleRow>
        <Image
          src={imagePath + "Games Library.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight={screenImageHeight}
        />
        <AppText fontSize="20px" w="40%">
          The user is able to view all the games they have purchased across all
          linked accounts from this page. The user can filter by all the
          aforementioned options at the top of the page. Each game is
          represented by its image and title, with the platform that the game is
          available on also displayed to the user on the top right of the game
          tile.
        </AppText>
      </ExampleRow>
      <ExampleRow>
        <AppText fontSize="20px" w="40%">
          The user can also add unpurchased games from across the app to a
          Wishlist, to keep track of what they would like to play next. Each
          game added to the wishlist detailed is current best price, and the
          option to notify the user when it releases or goes on sale, if it has
          not already, via the bell icon to the right. The primary call to
          action is represented by the "Buy Now" turquoise button towards the
          centre of the game card. Towards the bottom of the page, the user can
          view other games across the platform with the "Discover New" button
        </AppText>
        <Image
          src={imagePath + "Wishlist.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight={screenImageHeight}
        />
      </ExampleRow>
      <ExampleRow>
        <Image
          src={imagePath + "Newsfeed 1.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight={screenImageHeight}
        />
        <AppText fontSize="20px" w="40%">
          Moving onto the social media aspect of PULSE, a Newsfeed of different
          posts is available the user. Each post details who made it, when it
          was posted, a short descrption, an accompanying image, and its
          relevant social media feedback, including likes, notifications, shares
          and comments. The different posts that the user would see would be
          constructed algorithmically, based on their linked accounts, devices,
          purchases, and what is prominent in the gaming ecosphere at the time.
        </AppText>
      </ExampleRow>
      <ExampleRow>
        <AppText fontSize="20px" w="40%">
          If the user sees an event displayed in the Newsfeed they are
          interested in, they have the option to add it to their Upcoming
          Events. This page details future events that the user is interested
          in, ordered chronologically. Each event card includes the date of the
          event on the far left, its image and title, the time and location, as
          well as any linked friends that are also interested in the event. The
          user has the option to receive phone notifications about updates to
          the event via the bell icon on the far right.
        </AppText>
        <Image
          src={imagePath + "Upcoming Events.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight={screenImageHeight}
        />
      </ExampleRow>
      <ExampleRow>
        <Image
          src={imagePath + "Upcoming Event Page.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight={screenImageHeight}
        />
        <AppText fontSize="20px" w="40%">
          A user can see more details about an upcoming event by tapping it from
          the previous page and viewing it on this page. This page offers more
          details about the event, including who organised it, the public
          response to it, and whether or not any friend's linked to this account
          are also interested in it. The page further details the event which a
          description and a media gallery. The page includes primary calls to
          action, including sharing the event on the user's own feed, as well as
          sharing it to a friend.
        </AppText>
      </ExampleRow>
      <ExampleRow>
        <AppText fontSize="20px" w="40%">
          The user can also view the activity of various personalities or
          entities they are interested in on the Following page. This page lists
          all other non-friend users the user is following. Each user listed
          here shows their activity based off of the colour surrounding the
          profile picture, which includes whether they are active, playing a
          game, or currently streaming. Each option on the list allows the user
          to bookmark that user on the list, send them a notification is that
          user's activity changes, and to navigate to the stream of said user,
          if that user is currently streaming.
        </AppText>
        <Image
          src={imagePath + "Following.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight={screenImageHeight}
        />
      </ExampleRow>
      <ExampleRow>
        <Image
          src={imagePath + "Messages.png"}
          fallback={<Spinner size="xl" color="white" />}
          maxHeight={screenImageHeight}
        />
        <AppText fontSize="20px" w="40%">
          The user can also view all their currently connected friends, the
          messages they have exchange. From this page, the user can search
          through their messages, see which of their friends are online, create
          a new conversation or contribute to an existing one. The status of a
          connected friend is also displayed by their outline, similar to the
          following page. Unread messages are indicated with bold text, their
          placement at the top of the list, and a white circle to the right of
          the conversation card.
        </AppText>
      </ExampleRow>
      <AppText textAlign="left" fontSize="30px">
        All Designs
      </AppText>
      <ExampleRow>
        {[
          "Splash Page.png",
          "Link Accounts.png",
          "Link Devices.png",
          "Home Page.png",
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
          "New Releases.png",
          "Sales Across All Platforms.png",
          "Individual Game Page.png",
          "Available Prices for Individual Game.png",
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
          "Games Library.png",
          "Wishlist.png",
          "Newsfeed 1.png",
          "Newsfeed 2.png",
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
          "Upcoming Events.png",
          "Upcoming Event Page.png",
          "Following.png",
          "Messages.png",
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
        {["Chat Page.png"].map((item) => {
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

export default PulseContent;
