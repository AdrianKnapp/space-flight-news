import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#1E2022',
      800: '#2e3133',
      700: '#4b5c6b',
      200: '#c5ced5',
      50: '#EEEEF2',
    },
    blue: {
      900: '#302E53',
    },
    orange: {
      900: '#D07017',
    },
  },
  fonts: {
    heading: 'Roboto Condensed',
    body: 'Roboto Condensed',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.900',
      },
    },
  },
});
