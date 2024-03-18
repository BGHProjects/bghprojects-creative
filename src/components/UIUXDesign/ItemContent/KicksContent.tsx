import { chakra, Text, Image, Spinner, HStack, Center } from "@chakra-ui/react";

const KicksContent = () => {
  const imagePath = "/assets/images/ui-ux-design/designs/kicks/";

  return (
    <>
      <AppText textAlign="left" fontSize="30px">
        Overview
      </AppText>
      <AppText fontSize="20px">
        The following is a project where I iterated designs for a website and a
        webapp for a fictional company called KICKS. KICKS allows users to
        generate designs for different footware using generative AI, which are
        then tailor-made by the company and delivered to the user.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Problem Brief
      </AppText>
      <AppText fontSize="20px">
        A rising start-up called "KICKS" have reached the point where they are
        ready to launch a website and webapp for their project. Their website
        must contain information regarding how the company uses generative AI to
        allow users to design custom shoes, which are then made and delivered by
        the company. The webapp must contain a home page, a page to view designs
        made by the KICKS community, an FAQ page to answer customer enquiries,
        and an avenue for the user to create their own designs. The different
        ways that a user can create a design is through a text prompt, an image
        input, or a selected colour palette. The company needs UI UX mock ups
        for both the website and the webapp, including different outputs that
        can be created with example inputs by users.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Design Overview
      </AppText>
      <AppText fontSize="20px">
        In total, 25 designs were iterated, five for the website and the
        remainder for the webapp. All the designs were made with a computer
        monitor aspect ratio, as mobile responsiveness was not identified in the
        Problem Brief. The website details at a very high level how the company
        works and its impact on customers; being the ability to generate your
        own designs and have them made for you. The webapp explores the
        different methods of generating designs, as mentioned in the Problem
        Brief, which the addition of a "Upload Design" feature, which allows
        users to submit already made designs, to simplfy the process and save
        the company money on image generation expenses. Overall, a very
        minimalist and flat vector design was used, in order to contrast with
        the high detail of the rendered images for the shoes. Most of the
        screens rely heavily on a two column layout, in order to make use of the
        horizontal real estate offered by desktop designs. A common heading and
        subheading combination is also featured heavily, in order for the user
        to easily establish where they are in the app, and what they are able to
        do at that section.
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        Colour Scheme
      </AppText>
      <AppText fontSize="20px">
        A minimalistic colour scheme was employed, which the only major hue
        implemented being a cherry red. White and black were used as the primary
        and secondary colours, in order for the app's UI itself to appear
        secondary in the visual hierarchy to the detailed and vibrantly coloured
        shoes.
      </AppText>
      <HStack mt="40px" justifyContent="space-evenly">
        <Center
          borderRadius="10px"
          boxSize="100px"
          backgroundColor="#FF1A43"
          border="1px solid white"
        >
          <Text color="white" fontFamily="Electrolize">
            FF1A43
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
        Website Designs
      </AppText>
      <AppText fontSize="20px" mb="40px">
        Five different screen designs were iterated for the website, which
        represent the flow of the website itself, with all five iterations
        stacked on top of each other representing the entire website. The splash
        screen contains the "Start Now" call to action button twice,
        representing a pathway to logging into the app and using it. The initial
        and last screens contain a black background, to separate them from the
        other screens, which primarily contain content about the application
        itself. The other three screens use alternations of the cherry red and
        white, and mainly contain simplistic iconography and imagery to
        supplement the high level description of the different features of the
        app.
      </AppText>
      <Image
        src={imagePath + "website/Splash.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        src={imagePath + "website/How It Works.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        src={imagePath + "website/Services.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        src={imagePath + "website/Community.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        src={imagePath + "website/Footer.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <AppText textAlign="left" fontSize="30px">
        Web App Designs
      </AppText>
      <AppText textAlign="left" fontSize="24px" pl="5%">
        App Start
      </AppText>
      <AppText fontSize="20px" mb="40px">
        The app starts at the log in page, allowing the user to sign in with a
        username and password combination, or their Google, Facebook, or
        Microsoft account. When deployed the designs on the left hand side would
        gradually rotate down, so the viewer can have a preview of what to
        expect from the Community designs. From there, they see an overview of
        their Kick points, purchases, their designs that have been used by the
        community, and design from the community that they have used. It also
        allows them to pursue either of the four main parts of functionality for
        the app. These are Create, Community, Purchases, and FAQs.
      </AppText>
      <Image
        src={imagePath + "webapp/Sign In Page.png"}
        fallback={<Spinner size="xl" color="white" />}
      />
      <Image
        src={imagePath + "webapp/Home Page.png"}
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

export default KicksContent;
