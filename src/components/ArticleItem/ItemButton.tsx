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
      borderRadius="5px"
      bg="orange.900"
      mt={2}
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
    >
      <Button
        width="min-content"
        mx="auto"
        fontWeight="regular"
        borderRadius="5px"
        bg="orange.900"
        color="white"
        my={12}
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
