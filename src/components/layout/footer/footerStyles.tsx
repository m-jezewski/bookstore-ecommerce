import { Box, Container, ListItem, ListItemText, Paper, Typography, styled } from '@mui/material';

const FooterWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderTop: `1px ${theme.palette.divider} solid`,
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  overflowX: 'auto',
}));

const ListTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.primary.main,
  fontWeight: '600',
  padding: `${theme.spacing(0)} 0 ${theme.spacing(2)} ${theme.spacing(2)}`,
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiTypography-root': {
    ...theme.typography.subtitle2,
    fontWeight: 600,
  },
  '& a': {
    transition: '100ms all ease-out',
    textDecoration: 'none',
  },
  '& a:hover': {
    color: theme.palette.secondary.main,
  },
}));

export { FooterWrapper, StyledContainer, ListTitle, StyledListItemText };
