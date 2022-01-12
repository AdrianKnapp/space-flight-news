import { Button, Flex, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Dots } from './Dots';

export function LoadMoreButton() {
  const [currentPagination, setCurrentPagination] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { _start: startQuery } = router.query;
      const paginationNumber = startQuery ? Number(startQuery) : 0;

      if (paginationNumber !== currentPagination) {
        setCurrentPagination(paginationNumber);
      }
    }
  }, []);

  function handlePagination() {
    const nextPaginationNumberr = currentPagination + 10;

    setCurrentPagination(nextPaginationNumberr);

    router.push({
      query: {
        ...router.query,
        _start: nextPaginationNumberr,
      },
    });
  }

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
        onClick={handlePagination}
      >
        Carregar mais
      </Button>
    </Flex>
  );
}
