import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import {
  ButtonGroup,
  Overlay,
  SectionWrapper,
  StyledContainer,
  StyledH1,
  StyledH2,
} from './mainStyles';

export const Main = () => {
  return (
    <SectionWrapper>
      <Overlay />
      <StyledContainer>
        <StyledH1 variant='h1'>Step into a world of books</StyledH1>
        <StyledH2 variant='h2'>
          Explore our diverse collection and discover your new favorite author
        </StyledH2>
        <ButtonGroup>
          <Button LinkComponent={Link} href='/books' variant='contained' size='large'>
            Explore our catalog
          </Button>
          <Button LinkComponent={Link} href='/about' variant='contained' size='large'>
            About booktopia
          </Button>
        </ButtonGroup>
      </StyledContainer>
    </SectionWrapper>
  );
};
