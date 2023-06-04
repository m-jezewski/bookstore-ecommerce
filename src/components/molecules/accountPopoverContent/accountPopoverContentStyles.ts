import { Box, Typography, styled } from '@mui/material';

const BoxWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
}));

export { BoxWrapper, StyledHeading };
