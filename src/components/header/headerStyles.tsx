import { AppBar, Box, Card, IconButton, Stack, TextField, Typography, styled } from '@mui/material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.dark,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(1.25),
  zIndex: 1400,
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(2),
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.dark,

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const LogoTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 600,
  fontSize: '1.65rem',
  letterSpacing: 1.3,
  textTransform: 'uppercase',
  color: theme.palette.secondary.main,

  [theme.breakpoints.between('md', 'lg')]: {
    marginLeft: theme.spacing(3),
  },

  [theme.breakpoints.up('lg')]: {
    position: 'absolute',
    left: '50%',
    translate: '-50% 2px',
  },
}));

const UpperHeaderSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),

  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(4),
  },
}));

const UpperHeader = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '13rem',
  translate: '0 -5px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export {
  StyledAppBar,
  StyledStack,
  StyledIconButton,
  LogoTypography,
  UpperHeaderSection,
  UpperHeader,
  StyledTextField,
};
