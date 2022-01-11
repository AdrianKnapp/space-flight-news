import { Button, Flex, Text } from '@chakra-ui/react';

export function ItemInfo() {
  return (
    <Flex direction="column" w="60%">
      <Flex justify="flex-start" width="100%" direction="column">
        <Text as="h3" fontSize={22} fontWeight="bold" color="blue.900">
          Tenete ergo quod si servitus
        </Text>
        <Flex justify="space-between" align="center">
          <Text fontSize={14}>dd/mm/yyyy</Text>
          <Text
            px={2}
            bg="gray.200"
            color="gray.900"
            border="2px"
            borderColor="gray.700"
            fontSize={15}
          >
            newsSite
          </Text>
        </Flex>
        <Text fontSize={18} my={1}>
          Velit irure non id velit enim aliqua minim do cupidatat occaecat
          laboris duis non est. Tempor reprehenderit est commodo laboris
          pariatur velit incididunt qui aute dolore
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
      >
        Ver Mais
      </Button>
    </Flex>
  );
}
