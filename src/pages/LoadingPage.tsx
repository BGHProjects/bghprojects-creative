import { Center, VStack, Text, Spinner } from "@chakra-ui/react";

const LoadingPage = () => {
  return (
    <Center w="100vw" h="100vh" bg="black" position="relative">
      <VStack>
        <Text fontFamily="Electroize">Loading</Text>
        <Spinner color="white" size="xl" />
      </VStack>
    </Center>
  );
};

export default LoadingPage;
