import { Flex, Text } from '@chakra-ui/react';
import { VscRocket } from 'react-icons/vsc';

export function Logo() {
  return (
    <Flex flexDirection="column" justify="center" align="center" my={12}>
      <Flex
        justify="center"
        align="center"
        width={150}
        height={150}
        border="2px"
        borderColor="orange.900"
        fontSize={75}
        color="orange.900"
        borderRadius={100}
      >
        <VscRocket />
      </Flex>
      <Text color="orange.900" mt={8} fontSize={30} fontWeight="bold">
        Space Flight News
      </Text>
    </Flex>
  );
}
