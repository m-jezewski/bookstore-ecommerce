import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import {
  ListTitle,
  Sectiontitle,
  StyledListItem,
  StyledListItemText,
  Wrapper,
} from './NavListItemMenuStyles';
import Link from 'next/link';

interface NavListItemMenuProps {
  title?: string;
  menuItems: {
    listTitle: string;
    items: {
      text: string;
      href: string;
    }[];
  }[];
}

export const NavListItemMenu = ({ title, menuItems }: NavListItemMenuProps) => {
  return (
    <Wrapper>
      <Container>
        <Sectiontitle variant='h2'>{title}</Sectiontitle>
        <Box sx={{ display: 'flex', gap: '5rem' }}>
          {menuItems.map(({ listTitle, items }) => (
            <List key={listTitle}>
              <ListTitle variant='h3'>{listTitle}</ListTitle>
              {items.map((listItem) => (
                <StyledListItem key={listItem.text}>
                  <StyledListItemText>
                    <Link href={listItem.href}>{listItem.text}</Link>
                  </StyledListItemText>
                </StyledListItem>
              ))}
            </List>
          ))}
        </Box>
      </Container>
    </Wrapper>
  );
};
