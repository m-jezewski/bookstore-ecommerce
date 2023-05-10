import { Box, Container, Typography, styled } from '@mui/material';

const SectionWrapper = styled('main')(({ theme }) => ({
  backgroundImage: 'URL(/books-985939_1920.webp)',
  backgroundSize: 'cover',
  position: 'relative',
  backgroundPosition: 'top',
  backgroundAttachment: 'local',
}));

const Overlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.75)',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  color: '#F3F3F3',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  minHeight: 'calc(100vh - 8rem)',
  textAlign: 'center',
}));

const StyledH1 = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,

  [theme.breakpoints.up('md')]: {
    fontSize: '5rem',
    letterSpacing: '7px',
    lineHeight: '5.5rem',
  },
}));

const StyledH2 = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    ...theme.typography.h3,
    marginBottom: theme.spacing(4),
    letterSpacing: '4px',
    fontWeight: '200',
  },
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export { SectionWrapper, StyledContainer, StyledH1, StyledH2, ButtonGroup, Overlay };
