import { Button, Flex, Text } from '@chakra-ui/react';

type ItemInfoProps = {
  title: string;
  publishedAt: string;
  newsSite: string;
  summary: string;
  setActiveArticle: () => void;
};

export function ItemInfo({
  title,
  publishedAt,
  newsSite,
  summary,
  setActiveArticle,
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
          <Text
            px={2}
            bg="gray.200"
            color="gray.900"
            border="2px"
            borderColor="gray.700"
            fontSize={15}
          >
            {newsSite}
          </Text>
        </Flex>
        <Text fontSize={18} my={1}>
          {summary}
        </Text>
      </Flex>
      <Button
        width="min-content"
        fontWeight="regular"
        borderRadius="5px"
        bg="orange.900"
        color="white"
        transition=".2s"
        _hover={{
          filter: 'brightness(.8)',
        }}
        _focus={{
          boxShadow: 'none',
        }}
        onClick={setActiveArticle}
      >
        Ver Mais
      </Button>
    </Flex>
  );
}
