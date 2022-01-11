import { Button, Flex, Stack } from '@chakra-ui/react';
import { Dots } from './Dots';

export function LoadMoreButton() {
  return (
    <Flex direction="column" mx="auto" w="min-content">
      <Stack spacing={2} direction="column" mx="auto" my={12}>
        <Dots />
        <Dots />
        <Dots />
      </Stack>
      <Button
        colorScheme="teal"
        variant="outline"
        w="min-content"
        mb={12}
        border="2px"
        borderColor="gray.700"
        color="gray.700"
        _hover={{
          bg: 'gray.700',
          color: 'white',
        }}
        _focus={{
          boxShadow: 'none',
        }}
      >
        Carregar mais
      </Button>
    </Flex>
  );
}
