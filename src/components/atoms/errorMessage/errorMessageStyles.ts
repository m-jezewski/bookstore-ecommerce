import { Typography, styled } from '@mui/material';

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.warning.dark,
  fontWeight: 600,
}));
