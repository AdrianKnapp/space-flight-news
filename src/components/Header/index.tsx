import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { SearchBox } from './SearchBox';

type HeaderProps = {
  isLoading: boolean;
};

export function Header({ isLoading }: HeaderProps) {
  return (
    <Flex
      as="header"
      flexDirection="column"
      justify="center"
      align="center"
      w="100%"
      borderBottom="2px"
      borderColor="gray.200"
      mb={12}
    >
      <SearchBox isLoading={isLoading} />
      <Logo />
    </Flex>
  );
}
