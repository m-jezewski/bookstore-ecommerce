import { Stack, styled } from '@mui/material';

const LayoutWrapper = styled(Stack)(({ theme }) => ({
  paddingTop: '5.625rem',
  minHeight: '100vh',
  boxSizing: 'border-box',

  [theme.breakpoints.up('md')]: {
    paddingTop: '8rem',
  },
}));

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
}));

export { LayoutWrapper, Main };
