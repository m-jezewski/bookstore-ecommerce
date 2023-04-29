import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { StyledContainer } from './navListStyles';

interface NavListProps {
  navItems: string[];
}

// Nav component in desktop resolution

export const NavList = ({ navItems }: NavListProps) => {
  return (
    <Box component="nav" width={'100%'}>
      <StyledContainer>
        {navItems.map((navItem) => (
          <Button key={navItem} size="large" component={Link} href="">
            {navItem}
          </Button>
        ))}
      </StyledContainer>
    </Box>
  );
};
