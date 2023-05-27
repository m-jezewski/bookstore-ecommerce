import { Drawer, ListItemText, Typography, styled } from '@mui/material';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  display: 'block',
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.default,
    width: 240,
    paddingTop: theme.spacing(11.5),
  },

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.primary.main,
  '& .MuiTypography-root': { fontWeight: 600 },
}));

export { StyledDrawer, StyledListItemText };
