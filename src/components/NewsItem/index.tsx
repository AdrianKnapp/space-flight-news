import { Flex } from '@chakra-ui/react';

import { Article } from '../../types/Article';

import { ItemImage } from './ItemImage';
import { ItemInfo } from './ItemInfo';

type NewsItemProps = {
  article: Article;
};

export function NewsItem({ article }: NewsItemProps) {
  const { title, imageUrl, newsSite, summary, publishedAt } = article;

  return (
    <Flex
      justify="space-between"
      direction={['column', 'column', 'row']}
      align="center"
      _even={{ flexDirection: ['column', 'column', 'row-reverse'] }}
      gap={12}
      width="100%"
      maxWidth={750}
      mx="auto"
      mb={12}
      px={5}
    >
      <ItemImage title={title} imageUrl={imageUrl} />
      <ItemInfo
        title={title}
        publishedAt={publishedAt}
        newsSite={newsSite}
        summary={summary}
      />
    </Flex>
  );
}
