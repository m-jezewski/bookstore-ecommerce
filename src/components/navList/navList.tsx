import { Box, Button, ButtonGroup } from '@mui/material';
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
        <ButtonGroup variant="text" size="large" sx={{ width: '100%' }}>
          {navItems.map((navItem) => (
            <Button key={navItem} component={Link} href="" sx={{ flexGrow: 1, borderRight: 'none !important' }}>
              {navItem}
            </Button>
          ))}
        </ButtonGroup>
      </StyledContainer>
    </Box>
  );
};
