import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#416d7e',
    },
    secondary: {
      main: '#a53e74',
    },
    text: {
      primary: '#080F0F',
      secondary: '#F3F3F3',
    },
    background: {
      default: '#F3F3F3',
    },
  },
  typography: {
    fontFamily: ['Raleway', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto',
        },
      },
    },
  },
});
