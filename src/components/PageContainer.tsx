import { Center } from "@chakra-ui/react";
import { ReactNode } from "react";

/**
 * Component that holds the content for a page within the app
 *
 * @param children And child components that are being rendered
 */
const PageContainer = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <Center w="100vw" h="100vh" bg="black" position="relative" flexDir="column">
      {children}
    </Center>
  );
};

export default PageContainer;
