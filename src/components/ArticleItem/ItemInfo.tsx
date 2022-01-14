import { Flex, Text } from '@chakra-ui/react';
import { ItemButton } from './ItemButton';

type ItemInfoProps = {
  title: string;
  publishedAt: string;
  newsSite: string;
  summary: string;
  setActiveArticle: () => void;
  isInModal: boolean;
};

export function ItemInfo({
  title,
  publishedAt,
  newsSite,
  summary,
  setActiveArticle,
  isInModal,
}: ItemInfoProps) {
  return (
    <Flex direction="column" w={['100%', '100%', '60%']}>
      <Flex justify="flex-start" width="100%" direction="column">
        <Text as="h3" fontSize={22} fontWeight="bold" color="blue.900">
          {title}
        </Text>
        <Flex justify="space-between" align="center" my={1}>
          <Text fontSize={14}>
            {new Date(publishedAt).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </Text>
          {!isInModal && (
            <Text
              px={2}
              bg="gray.100"
              color="gray.900"
              border="2px"
              borderColor="gray.700"
              fontSize={15}
            >
              {newsSite}
            </Text>
          )}
        </Flex>
        <Text fontSize={18}>{summary}</Text>
      </Flex>
      {!isInModal && <ItemButton setActiveArticle={setActiveArticle} />}
    </Flex>
  );
}
