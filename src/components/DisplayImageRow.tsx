import { HStack, Image, Spinner } from "@chakra-ui/react";
import { range } from "lodash";

interface IDisplayImageRow {
  imagePath: string;
  noOfItems: number;
  width?: any;
  height?: any;
}

/**
 * Displays a row of local images
 *
 * @param imagePath The path to the image in the filebase
 * @param noOfItems The number of items to be displayed
 * @param width The width of the image to be displayed
 * @param height The height of the image to be displayed
 */
const DisplayImageRow = ({
  imagePath,
  noOfItems,
  width = undefined,
  height = undefined,
}: IDisplayImageRow) => {
  return (
    <HStack justifyContent="space-evenly" mt="0px" w="100%">
      {range(noOfItems).map((index) => (
        <Image
          key={index.toString()}
          src={`/assets/images/${imagePath} ${index + 1}.svg`}
          width={width}
          height={height}
          fallback={<Spinner size="xl" color="white" />}
        />
      ))}
    </HStack>
  );
};

export default DisplayImageRow;
