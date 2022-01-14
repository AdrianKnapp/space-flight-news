import { Flex, Stack } from '@chakra-ui/react';
import { SearchInput } from './SearchInput';
import { SortDropdown } from './SortDropdown';

type SearchBoxProps = {
  isLoading: boolean;
};

export function SearchBox({ isLoading }: SearchBoxProps) {
  return (
    <Flex justify="flex-end" p={5} w="100%" mx="auto">
      <Stack spacing={4} direction={['column', 'row']} align="flex-end">
        <SearchInput isLoading={isLoading} />
        <SortDropdown isLoading={isLoading} />
      </Stack>
    </Flex>
  );
}
