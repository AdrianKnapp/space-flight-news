import { Flex, Image } from '@chakra-ui/react';

export function ItemImage() {
  return (
    <Flex width="40%" height={200} align="center" justify="center">
      <Image
        src="https://spacenews.com/wp-content/uploads/2022/01/angara-persei.jpg"
        alt="Image"
        width="100%"
      />
    </Flex>
  );
}
