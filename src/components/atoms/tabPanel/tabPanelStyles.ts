import { Stack, styled } from '@mui/material';

export const StyledStack = styled(Stack)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  margin: 'auto',
  alignItems: 'center',
  padding: theme.spacing(4),
}));
