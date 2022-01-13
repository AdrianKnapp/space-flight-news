import { Button, Flex, Stack } from '@chakra-ui/react';
import { Dots } from './Dots';

type LoadMoreButtonProps = {
  // eslint-disable-next-line no-unused-vars
  handleCurrentPage: (page: number) => void;
  currentPage: number;
  isLoading: boolean;
};

export function LoadMoreButton({
  handleCurrentPage,
  currentPage,
  isLoading,
}: LoadMoreButtonProps) {
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
        onClick={() => handleCurrentPage(currentPage + 10)}
        isLoading={isLoading}
      >
        Carregar mais
      </Button>
    </Flex>
  );
}
