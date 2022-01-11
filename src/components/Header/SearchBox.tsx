import { Flex, Stack } from '@chakra-ui/react';
import { SearchInput } from './SearchInput';
import { SortDropdown } from './SortDropdown';

export function SearchBox() {
  return (
    <Flex justify="flex-end" p={5} w="100%" mx="auto">
      <Stack spacing={4} direction="row">
        <SearchInput />
        <SortDropdown />
      </Stack>
    </Flex>
  );
}
