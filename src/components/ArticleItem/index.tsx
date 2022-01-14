import { Flex } from '@chakra-ui/react';

import { Article } from '../../types/Article';
import { ItemButton } from './ItemButton';

import { ItemImage } from './ItemImage';
import { ItemInfo } from './ItemInfo';

type NewsItemProps = {
  article: Article;
  // eslint-disable-next-line no-unused-vars
  handleActiveModalArticle?: (article: Article) => void;
  isInModal?: boolean;
};

export function ArticleItem({
  article,
  handleActiveModalArticle = () => null,
  isInModal = false,
}: NewsItemProps) {
  const { title, imageUrl, newsSite, summary, publishedAt } = article;
  function setActiveArticle() {
    handleActiveModalArticle(article);
  }

  return (
    <>
      <Flex
        justify="space-between"
        direction={['column', 'column', 'row']}
        align="center"
        _even={{ flexDirection: ['column', 'column', 'row-reverse'] }}
        gap={12}
        width="100%"
        maxWidth={750}
        mx="auto"
        mt={12}
        mb={isInModal ? 0 : 12}
        px={5}
      >
        <ItemImage title={title} imageUrl={imageUrl} />
        <ItemInfo
          title={title}
          publishedAt={publishedAt}
          newsSite={newsSite}
          summary={summary}
          setActiveArticle={setActiveArticle}
          isInModal={isInModal}
        />
      </Flex>
      {isInModal && <ItemButton isInModal={isInModal} siteUrl={article.url} />}
    </>
  );
}
