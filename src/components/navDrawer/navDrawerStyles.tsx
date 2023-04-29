import { Box, Drawer, ListItemText, Typography, styled } from '@mui/material';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  display: 'block',
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const LogoTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  ...theme.typography.h5,
  letterSpacing: 1.3,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  color: theme.palette.secondary.main,
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.primary.main,
  '& .MuiTypography-root': { fontWeight: 600 },
}));

export { LogoTypography, StyledDrawer, StyledListItemText };
