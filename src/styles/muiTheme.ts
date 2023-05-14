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
      secondary: '#416d7e',
    },
    background: {
      default: '#F3F3F3',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Raleway', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Raleway !important',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          fill: '#416d7e',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: '#416d7e 1px solid',
        },
      },
    },
  },
});
