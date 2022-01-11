import { Flex } from '@chakra-ui/react';
import { ItemImage } from './ItemImage';
import { ItemInfo } from './ItemInfo';

export function NewsItem() {
  return (
    <Flex
      justify="space-between"
      _even={{ flexDirection: 'row-reverse' }}
      gap={12}
      width="100%"
      maxWidth={700}
      mx="auto"
      mb={12}
    >
      <ItemImage />
      <ItemInfo />
    </Flex>
  );
}
