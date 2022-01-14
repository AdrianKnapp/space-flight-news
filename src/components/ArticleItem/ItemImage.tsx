import { Flex, Image } from '@chakra-ui/react';

type ItemImageProps = {
  title: string;
  imageUrl: string;
};

export function ItemImage({ title, imageUrl }: ItemImageProps) {
  return (
    <Flex
      width={['100%', '100%', '40%']}
      height={200}
      align="center"
      justify="center"
    >
      <Image
        src={imageUrl}
        alt={title}
        maxWidth="100%"
        maxHeight="100%"
        loading="lazy"
      />
    </Flex>
  );
}
