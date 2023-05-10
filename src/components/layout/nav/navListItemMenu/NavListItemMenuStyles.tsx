import { Box, Container, ListItem, ListItemText, Typography, styled } from '@mui/material';

const Wrapper = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  width: '100vw',
  background: theme.palette.background.default,
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
}));

const Sectiontitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  padding: `${theme.spacing(3)} 0`,
  color: theme.palette.secondary.main,
}));

const ListTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.primary.main,
  fontWeight: '500',
  padding: `${theme.spacing(0)} 0 ${theme.spacing(2)} ${theme.spacing(0.25)}`,
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: `0 0 ${theme.spacing(0.5)} ${theme.spacing(0.5)}`,
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiTypography-root': {
    fontWeight: 600,
  },
  '& a': {
    transition: '100ms all ease-out',
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  '& a:hover': {
    color: theme.palette.secondary.main,
  },
}));
export { Wrapper, Sectiontitle, StyledListItem, StyledListItemText, ListTitle };
