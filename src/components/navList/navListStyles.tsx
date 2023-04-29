import { Container, styled } from '@mui/material';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 1,
  },
}));

export { StyledContainer };
