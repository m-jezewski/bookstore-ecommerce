import { Container, Typography } from '@mui/material';
import { ContainerWrapper, StyledTypography } from './headingStyles';

interface HeadingProps {
  children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  return (
    <ContainerWrapper>
      <Container maxWidth='xl'>
        <StyledTypography variant='h1'>{children}</StyledTypography>
      </Container>
    </ContainerWrapper>
  );
};
