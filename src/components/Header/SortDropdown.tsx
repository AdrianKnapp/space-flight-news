import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { HiSelector } from 'react-icons/hi';
import { useRouter } from 'next/router';

type SortOption = {
  text: string;
  order: string;
};

export function SortDropdown() {
  const [activeSort, setActiveSort] = useState('Sort');
  const router = useRouter();

  const sortOptions = [
    {
      text: 'Mais antigas',
      order: 'DESC',
    },
    {
      text: 'Mais novas',
      order: 'ASC',
    },
  ];

  useEffect(() => {
    if (router.isReady && router.query.order) {
      const { text } = sortOptions.find(
        (option) => option.order === router.query.order,
      );

      setActiveSort(text);
    }
  }, [router]);

  function activeSortOrder(sortOption: SortOption) {
    router.push({
      query: {
        ...router.query,
        order: sortOption.order,
      },
    });

    setActiveSort(sortOption.text);
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<HiSelector />}
        height={10}
        minWidth={120}
        border="2px"
        borderColor="gray.200"
        color="gray.700"
        bg="white"
        fontWeight="bold"
        _hover={{
          borderColor: 'gray.700',
        }}
        _focus={{
          bg: 'white',
          borderColor: 'gray.700',
        }}
        _expanded={{ bg: 'white', borderColor: 'gray.700' }}
        textAlign="left"
      >
        {activeSort}
      </MenuButton>
      <MenuList
        border="2px"
        borderColor="gray.200"
        py="0"
        color="gray.700"
        overflow="hidden"
      >
        {sortOptions.map((option: SortOption) => (
          <MenuItem
            key={option.order}
            borderTop="2px"
            borderColor="gray.200"
            _first={{ borderTopWidth: 0 }}
            order={option.order}
            onClick={() => activeSortOrder(option)}
            transition=".2s"
            _hover={{
              bg: 'white',
              color: 'gray.900',
              filter: 'brightness(.)',
            }}
          >
            {option.text}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
