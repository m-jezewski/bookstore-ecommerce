import { Box, Button, ButtonGroup } from '@mui/material';
import Link from 'next/link';
import { StyledContainer } from './navListStyles';
import navItems from '../navItems.json';
import { OnHoverPopover } from '../onHoverPopover/onHoverPopover';

// Nav component in desktop resolution

export const NavList = () => {
  console.log(navItems);

  return (
    <Box component='nav' width={'100%'}>
      <StyledContainer>
        <ButtonGroup variant='text' size='large' sx={{ width: '100%' }}>
          {navItems.map((navItem) =>
            navItem.popoverMenuItems ? (
              <OnHoverPopover
                key={navItem.name}
                buttonText={navItem.name}
                buttonVariant='text'
                buttonSx={{
                  flexGrow: 1,
                  borderRight: 'none !important',
                }}
                wrapperSx={{
                  translate: '0px 0.65rem',
                }}>
                <Box>elo elo</Box>
              </OnHoverPopover>
            ) : (
              <Button
                key={navItem.name}
                component={Link}
                href={navItem.href}
                sx={{ flexGrow: 1, borderRight: 'none !important' }}>
                {navItem.name}
              </Button>
            ),
          )}
        </ButtonGroup>
      </StyledContainer>
    </Box>
  );
};
