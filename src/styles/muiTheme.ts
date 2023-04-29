import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#F3F3F3',
      main: '#457B9D',
      dark: '#080F0F',
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
