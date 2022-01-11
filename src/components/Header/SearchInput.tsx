import { Flex, Icon, IconButton, Input } from '@chakra-ui/react';
import { FormEvent, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/router';

export function SearchInput() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (router.isReady && router.query.search) {
      setSearchText(String(router.query.search));
    }
  }, [router]);

  function handleSearch(event: FormEvent<HTMLDivElement>) {
    event.preventDefault();

    if (searchText.length > 0) {
      router.push({
        query: {
          ...router.query,
          search: searchText,
        },
      });
    }
  }

  return (
    <Flex
      as="form"
      align="center"
      width={260}
      border="2px"
      borderColor="gray.200"
      borderRadius={5}
      overflow="hidden"
      height={10}
      onSubmit={(event) => handleSearch(event)}
    >
      <Input
        placeholder="Search"
        borderRadius={0}
        border={0}
        _focus={{ borderColor: 'transparent' }}
        _placeholder={{
          letterSpacing: '0.1rem',
        }}
        color="gray.700"
        value={searchText || ''}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <IconButton
        aria-label="Search"
        icon={<Icon as={FiSearch} />}
        fontSize="22"
        type="submit"
        variant="unstyled"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius={0}
        width={50}
        height="100%"
        bg="gray.200"
        color="white"
        transition=".2s"
        _focus={{
          boxShadow: 'none',
        }}
        _hover={{
          filter: 'brightness(.8)',
        }}
      />
    </Flex>
  );
}
