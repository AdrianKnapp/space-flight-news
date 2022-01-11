import { Flex, Image } from '@chakra-ui/react';

type ItemImageProps = {
  title: string;
  imageUrl: string;
};

export function ItemImage({ title, imageUrl }: ItemImageProps) {
  return (
    <Flex width="40%" height={200} align="center" justify="center">
      <Image src={imageUrl} alt={title} width="100%" />
    </Flex>
  );
}
