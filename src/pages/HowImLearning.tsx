import { motion } from "framer-motion";
import BackButton from "../components/BackButton";
import PageContainer from "../components/PageContainer";
import ScreenAnimation from "../components/ScreenAnimation";
import ScreenTransition from "../components/ScreenTransition";
import {
  Center,
  Text,
  chakra,
  HStack,
  VStack,
  Image,
  Spinner,
  Link,
} from "@chakra-ui/react";
import PopUpText from "../components/PopUpText";
import AppButton from "../components/AppButton";
import { useState } from "react";
import { chunk } from "lodash";
import { customScrollBar } from "../consts/custom-scrollbar";

const HowImLearning = () => {
  const transitionDuration = 1;
  const [viewing, setViewing] = useState("None");

  const buttons = ["Videos", "Books"];

  const books = [
    {
      title: "Refactoring UI",
      author: "Adam Wathan and Steve Schoger",
      cover: "https://covers.openlibrary.org/b/olid/OL31679681M-L.jpg",
    },
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      cover: "https://covers.openlibrary.org/b/isbn/9780465003945-L.jpg",
    },
    {
      title: "Art Fundamentals (2nd Edition)",
      author: "3dtotal Publishing",
      cover: "https://covers.openlibrary.org/b/isbn/8441543267-L.jpg",
    },
    {
      title: "Art: A Visual History",
      author: "Robert Cumming",
      cover: "https://covers.openlibrary.org/b/isbn/0241186102-L.jpg",
    },
    {
      title: "Halo: The Art of Building Worlds",
      author: "Martin Robinson",
      cover: "https://covers.openlibrary.org/b/isbn/9780857685629-L.jpg",
    },
    {
      title: "The Road to Marvel's Avengers: Age of Ultron",
      author: "Marvel Comics",
      cover: "https://covers.openlibrary.org/b/isbn/0785198296-L.jpg",
    },
    {
      title: "The Hobbit An Unexpected Journey Chronicles Art and Design",
      author: "Weta Workshop",
      cover: "https://covers.openlibrary.org/b/isbn/9780062200907-L.jpg",
    },
  ];

  const videos = [
    {
      title: "Web Design 101: Free Full Course Playlist",
      author: "Flex Academy",
      image: "https://i.ytimg.com/vi/j6Ule7GXaRs/maxresdefault.jpg",
      link: "https://www.youtube.com/playlist?list=PLXC_gcsKLD6n7p6tHPBxsKjN5hA_quaPI",
    },
    {
      title: "Understanding Design Playlist",
      author: "Arizona State University",
      image: "https://i.ytimg.com/vi/moRHOI2uIYA/maxresdefault.jpg",
      link: "https://www.youtube.com/playlist?list=PLNrrxHpJhC8kYBmXjTPt9oGxfbDSsyveJ",
    },
    {
      title: "Rapid ReDesigns (RDD) Playlist",
      author: "DesignCourse",
      image: "https://i.ytimg.com/vi/kaOjgBn-xJQ/maxresdefault.jpg",
      link: "https://www.youtube.com/playlist?list=PL0lNJEnwfVVNHr6Rm7EJefYsJQK_xVnRL",
    },
    {
      title: "LATEST DESIGN TUTS Playlist",
      author: "DesignCourse",
      image: "https://i.ytimg.com/vi/0NYQ0PAKwEI/maxresdefault.jpg",
      link: "https://www.youtube.com/playlist?list=PL0lNJEnwfVVM80SBgWyC_1DQqyBYfiXeF",
    },
  ];

  return (
    <>
      <ScreenTransition />
      <BackButton animDelay={1} />
      <PageContainer>
        <ScreenAnimation />
        <motion.div
          style={{
            height: "100%",
            width: "100%",
          }}
          animate={{
            opacity: 1,
            display: "flex",
          }}
          transition={{
            ease: "easeInOut",
            duration: transitionDuration,
            display: {
              delay: transitionDuration,
            },
          }}
        >
          <Center flexDir="column" boxSize="100%" zIndex={1}>
            <PopUpText
              fullText={["How I'm Learning"]}
              size={60}
              staggerTime={0.02}
            />
            <motion.div
              style={{
                width: "100%",
              }}
              animate={{
                opacity: [0, 1],
              }}
              transition={{
                opacity: {
                  delay: 1,
                },
                ease: "easeInOut",
                duration: transitionDuration,
              }}
            >
              <Center w="100%">
                <Center
                  minW="800px"
                  w="60vw"
                  justifyContent="center"
                  sx={{
                    "&::-webkit-scrollbar": {
                      w: "2",
                      mr: "10",
                    },
                    "&::-webkit-scrollbar-track": {
                      w: "3",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      borderRadius: "10",
                      bg: "white",
                    },
                  }}
                  flexDirection="column"
                >
                  <AppText fontSize="20" mt="40px">
                    I try not to pay for courses or enroll in programs to learn
                    things if I don't have to. In the information age, there's
                    plenty of ways to learn just about anything without
                    attending classes, in-person or online. Here is a list of
                    resources I have used to teach myself about art and design.
                  </AppText>
                  <HStack w="100%" justifyContent="space-evenly" mt="40px">
                    {buttons.map((button) => (
                      <AppButton
                        key={JSON.stringify(button)}
                        width={200}
                        height={60}
                        animDuration={0.2}
                        action={() => setViewing(button)}
                      >
                        <Center boxSize="100%">
                          <AppText fontSize="20px" textAlign={"center"}>
                            {button}
                          </AppText>
                        </Center>
                      </AppButton>
                    ))}
                  </HStack>
                  <Center h="500px" w="100%">
                    {viewing === "Books" && (
                      <VStack
                        mt="30px"
                        flexDirection="column"
                        overflowY="auto"
                        h="100%"
                        w="100%"
                        sx={customScrollBar}
                      >
                        {chunk(books, 3).map((bookChunk) => (
                          <HStack w="100%" justifyContent="space-evenly">
                            {bookChunk.map((book) => (
                              <VStack pt="40px" alignItems="center" w="400px">
                                <AppText textAlign="center" fontSize="24px">
                                  {book.title}
                                </AppText>
                                <AppText textAlign="center">
                                  {book.author}
                                </AppText>
                                <Image
                                  src={book.cover}
                                  height="300px"
                                  fallback={<Spinner size="xl" color="white" />}
                                />
                              </VStack>
                            ))}
                          </HStack>
                        ))}
                      </VStack>
                    )}
                    {viewing === "Videos" && (
                      <VStack
                        mt="30px"
                        flexDirection="column"
                        overflowY="auto"
                        h="100%"
                        w="100%"
                        sx={customScrollBar}
                      >
                        {chunk(videos, 2).map((videoChunk) => (
                          <HStack w="100%" justifyContent="space-evenly">
                            {videoChunk.map((video) => (
                              <Link href={video.link}>
                                <VStack pt="40px" alignItems="center" w="400px">
                                  <AppText textAlign="center" fontSize="24px">
                                    {video.title}
                                  </AppText>
                                  <AppText textAlign="center">
                                    {video.author}
                                  </AppText>
                                  <Image
                                    src={video.image}
                                    fallback={
                                      <Spinner size="xl" color="white" />
                                    }
                                  />
                                </VStack>
                              </Link>
                            ))}
                          </HStack>
                        ))}
                      </VStack>
                    )}
                  </Center>
                </Center>
              </Center>
            </motion.div>
          </Center>
        </motion.div>
      </PageContainer>
    </>
  );
};

const AppText = chakra(Text, {
  baseStyle: {
    color: "white",
    fontFamily: "Electrolize",
    w: "100%",
  },
});

export default HowImLearning;
