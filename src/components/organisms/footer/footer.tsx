import { Box, Container, List, ListItem, Typography } from '@mui/material';
import { FooterWrapper, StyledContainer, ListTitle, StyledListItemText } from './footerStyles';
import footerContent from '@/contentData/footerContent.json';
import Link from 'next/link';

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <FooterWrapper>
      <StyledContainer>
        {footerContent.map(({ text, listItems }) => (
          <List key={text}>
            <ListTitle variant='h4'>{text}</ListTitle>
            {listItems.map((li) => (
              <ListItem key={li.text}>
                <StyledListItemText key={li.text}>
                  <Link href={li.href}>{li.text}</Link>
                </StyledListItemText>
              </ListItem>
            ))}
          </List>
        ))}
      </StyledContainer>
    </FooterWrapper>
  );
};
