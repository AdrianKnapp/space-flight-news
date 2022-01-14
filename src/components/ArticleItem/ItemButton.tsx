import { Button, Link } from '@chakra-ui/react';

type ItemButtonProps = {
  setActiveArticle?: () => void;
  isInModal?: boolean;
  siteUrl?: string;
};

export function ItemButton({
  setActiveArticle = () => null,
  isInModal = false,
  siteUrl = '',
}: ItemButtonProps) {
  return !isInModal ? (
    <Button
      width="min-content"
      fontWeight="regular"
      borderRadius={3}
      bg="orange.900"
      mt={2}
      mx={['auto', 'auto', '0']}
      color="white"
      transition=".2s"
      _hover={{
        filter: 'brightness(.8)',
      }}
      _focus={{
        boxShadow: 'none',
      }}
      onClick={setActiveArticle}
    >
      Ver Mais
    </Button>
  ) : (
    <Link
      href={siteUrl}
      _hover={{ textDecoration: 'none' }}
      target="_blank"
      _focus={{ boxShadow: 0 }}
      my={12}
    >
      <Button
        borderRadius={3}
        width="min-content"
        mx="auto"
        fontWeight="regular"
        bg="orange.900"
        color="white"
        transition=".2s"
        _hover={{
          filter: 'brightness(.8)',
        }}
        _focus={{
          boxShadow: 'none',
        }}
        onClick={setActiveArticle}
      >
        Ir para o site
      </Button>
    </Link>
  );
}
