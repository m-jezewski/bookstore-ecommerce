import { Box, Typography, styled } from '@mui/material';

const ContainerWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  margin: `${theme.spacing(4)} 0`,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: 300,
  fontSize: '30px',
  letterSpacing: 2,
  padding: theme.spacing(1),
}));

export { StyledTypography, ContainerWrapper };
