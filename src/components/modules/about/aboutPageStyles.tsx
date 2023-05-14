import { Box, Container, Typography, styled } from '@mui/material';
import Image from 'next/image';

const StyledSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  gap: theme.spacing(4),
  alignItems: 'center',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
})) as typeof Box;

const StyledTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  maxWidth: theme.breakpoints.values.sm,
  lineHeight: '24px',

  [theme.breakpoints.up('lg')]: {
    lineHeight: '32px',
  },
})) as typeof Typography;

const Subheading = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  marginBottom: theme.spacing(4),

  ['& .secondary']: {
    color: theme.palette.secondary.main,
  },
}));

const StyledImage = styled(Image)(({ theme }) => ({
  borderRadius: '20px',
  aspectRatio: '48 / 32',
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '48 / 32',
  width: '100%',
  maxWidth: theme.breakpoints.values.sm,

  [theme.breakpoints.up('md')]: {
    width: '384px',
    height: '256px',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '640px',
    width: '640px',
    height: '426px',
  },
}));

export { StyledSection, Subheading, StyledTypography, StyledImage, ImageWrapper };
