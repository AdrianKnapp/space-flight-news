import { IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';

export function BackToTopButton() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {scrollPosition > 500 && (
        <IconButton
          aria-label="Call Segun"
          bg="gray.700"
          borderRadius={100}
          size="lg"
          width="65px"
          height="65px"
          color="white"
          transition=".2s"
          _focus={{
            boxShadow: 'none',
          }}
          _hover={{
            filter: 'brightness(.8)',
          }}
          _active={{
            filter: 'brightness(.8)',
          }}
          icon={<BsArrowUp fontSize={30} />}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
          position="fixed"
          bottom="30px"
          right={['20px', '84px']}
          zIndex={1}
        />
      )}
    </>
  );
}
