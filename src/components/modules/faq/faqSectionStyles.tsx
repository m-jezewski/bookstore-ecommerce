import { Typography, styled } from '@mui/material';

const Subheading = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  marginBottom: theme.spacing(3),
}));

const QuestionTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  marginBottom: theme.spacing(1),
  fontWeight: 600,
}));

const AnswerTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  marginBottom: theme.spacing(2),
}));

export { Subheading, SectionTitle, QuestionTypography, AnswerTypography };
