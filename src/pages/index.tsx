import { Flex, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex flexDirection="column">
      <Text bg="blue" _even={{ bg: 'red' }}>
        Home
      </Text>
      <Text bg="blue" _even={{ bg: 'red' }}>
        Home
      </Text>
      <Text bg="blue" _even={{ bg: 'red' }}>
        Home
      </Text>
      <Text bg="blue" _even={{ bg: 'red' }}>
        Home
      </Text>
    </Flex>
  );
}
