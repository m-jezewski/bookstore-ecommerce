import { Stack, styled } from '@mui/material';

export const StyledStack = styled(Stack)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.sm,
  margin: 'auto',
  padding: theme.spacing(2),
}));
