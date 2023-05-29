import { Container, Stack, Typography } from '@mui/material';
import { AnswerTypography, QuestionTypography, SectionTitle, Subheading } from './faqSectionStyles';
import faqContent from '../../../contentData/faqContent.json';

interface FaqSectionProps {}

export const FaqSection = () => {
  return (
    <Container maxWidth='xl' sx={{ mb: 6 }}>
      <Stack gap={4}>
        <Subheading variant='h2'>
          Welcome to our FAQ page! Below you'll find answers to some of the most common questions we
          receive from our customers. If you don't find what you're looking for here, please don't
          hesitate to contact us directly.
        </Subheading>
        {faqContent.map(({ sectionTitle, items }) => (
          <section key={sectionTitle}>
            <SectionTitle variant='h3'>{sectionTitle}</SectionTitle>
            {items.map(({ question, answer }) => (
              <div key={question}>
                <QuestionTypography variant='body1'>{question}</QuestionTypography>
                <AnswerTypography variant='body2'>{answer}</AnswerTypography>
              </div>
            ))}
          </section>
        ))}
      </Stack>
    </Container>
  );
};
