import { Box, Container, List, ListItem, Typography } from '@mui/material';
import { FooterWrapper, StyledContainer, ListTitle, StyledListItemText } from './footerStyles';
import footerContent from './footerContent.json';
import Link from 'next/link';

interface FooterProps {}

const Footer = ({}: FooterProps) => {
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

export default Footer;
