import { Box, Container, Stack } from '@mui/material';
import {
  StyledSection,
  Subheading,
  StyledTypography,
  StyledImage,
  ImageWrapper,
} from './aboutPageStyles';

export const AboutPage = () => {
  const imgSizes = '(max-width: 900px) 600px, (max-width: 1200px) 384px, 640px';

  return (
    <Container maxWidth='xl' sx={{ my: 6 }}>
      <Stack gap={8}>
        <StyledSection component={'section'}>
          <ImageWrapper>
            <StyledImage src='/woman-6318447_1920.jpg' sizes={imgSizes} fill alt='' />
          </ImageWrapper>
          <Box>
            <Subheading variant='h2'>
              Welcome to <span className='secondary'>Booktopia</span>
            </Subheading>
            <StyledTypography variant='body2'>
              We're a team of book lovers who are passionate about connecting readers with their
              next favorite book.
              <br />
              <br />
              Our mission is simple: to provide an easy and enjoyable online shopping experience for
              book lovers everywhere. We believe that everyone should have access to the books they
              love, regardless of where they live or their budget.
            </StyledTypography>
          </Box>
        </StyledSection>
        <StyledSection component={'section'}>
          <StyledTypography variant='body2'>
            Our company was founded by a group of friends who met in college and shared a love of
            reading. We started out as a small local bookstore, but quickly realized the potential
            of online sales. Today, we're proud to offer a wide selection of books to readers around
            the world.
            <br />
            <br />
            We're a small but dedicated team of book lovers who are passionate about sharing our
            love of reading with others. From our customer service representatives to our warehouse
            staff, everyone on our team is committed to providing the best possible shopping
            experience for our customers.
          </StyledTypography>
          <ImageWrapper>
            <StyledImage src='/college-student-3500990_1920.jpg' sizes={imgSizes} fill alt='' />
          </ImageWrapper>
        </StyledSection>
        <StyledSection component={'section'}>
          <ImageWrapper>
            <StyledImage src='/shop-2964741_1920.jpg' sizes={imgSizes} fill alt='' />
          </ImageWrapper>
          <StyledTypography variant='body2'>
            At our core, we value inclusivity, accessibility, and sustainability. We believe that
            books should be available to everyone, regardless of their background or financial
            situation. We also strive to minimize our impact on the environment by using
            eco-friendly packaging materials and partnering with publishers who prioritize
            sustainability.
            <br />
            <br />
            We believe that books have the power to bring people together, which is why we're
            committed to building a community of book lovers both online and offline. We regularly
            host virtual author events and book clubs, and we also support local literacy
            initiatives and book donation programs.
          </StyledTypography>
        </StyledSection>
      </Stack>
    </Container>
  );
};
