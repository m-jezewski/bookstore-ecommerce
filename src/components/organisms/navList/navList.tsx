import { Box, Button, ButtonGroup } from '@mui/material';
import Link from 'next/link';
import { StyledContainer } from './navListStyles';
import navItems from '@/contentData/navItems.json';
import { OnHoverPopover } from '@/components/molecules/onHoverPopover/onHoverPopover';
import { NavListItemMenu } from '@/components/molecules/navListItemMenu/navListItemMenu';

// Nav component in desktop resolution

export const NavList = () => {
  return (
    <Box component='nav' width={'100%'}>
      <StyledContainer>
        <ButtonGroup variant='text' size='large' sx={{ width: '100%' }}>
          {navItems.map((navItem) =>
            navItem.popoverMenuItems ? (
              <OnHoverPopover
                key={navItem.text}
                buttonText={navItem.text}
                linkButtonComponent
                buttonVariant='text'
                href={navItem.href}
                buttonSx={{
                  flexGrow: 1,
                  borderRight: 'none !important',
                }}
                wrapperSx={{
                  translate: '0px 0.65rem',
                }}>
                <NavListItemMenu title={navItem.text} menuItems={navItem.popoverMenuItems} />
              </OnHoverPopover>
            ) : (
              <Button
                key={navItem.text}
                component={Link}
                href={navItem.href}
                sx={{ flexGrow: 1, borderRight: 'none !important' }}>
                {navItem.text}
              </Button>
            ),
          )}
        </ButtonGroup>
      </StyledContainer>
    </Box>
  );
};
