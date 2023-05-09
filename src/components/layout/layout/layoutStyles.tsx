import { Box, styled } from '@mui/material';

const LayoutWrapper = styled(Box)(({ theme }) => ({
  paddingTop: '5.625rem',

  [theme.breakpoints.up('md')]: {
    paddingTop: '8rem',
  },
}));

export { LayoutWrapper };
