import { Box, Divider, List, ListItem, ListItemButton } from '@mui/material';
import { LogoTypography, StyledDrawer, StyledListItemText } from './navDrawerStyles';
import navItems from '../navItems.json';

interface NavDrawerProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

// Drawer for opening nav in mobile resolution

export const NavDrawer = ({ mobileOpen, handleDrawerToggle }: NavDrawerProps) => {
  let container;
  if (typeof window !== 'undefined') {
    container = () => window.document.body;
  }

  return (
    <StyledDrawer
      container={container}
      variant='temporary'
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}>
      <Box component={'nav'} onClick={handleDrawerToggle}>
        <LogoTypography>Booktopia</LogoTypography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
                <StyledListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </StyledDrawer>
  );
};
