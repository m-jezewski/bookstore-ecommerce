import { Button, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import { Bars3Icon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import {
  StyledAppBar,
  StyledStack,
  StyledIconButton,
  LogoTypography,
  UpperHeaderSection,
  UpperHeader,
  StyledTextField,
} from './headerStyles';
import { NavDrawer } from '../navDrawer/navDrawer';
import { NavList } from '../navList/navList';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const upMd = useMediaQuery('(min-width: 900px)');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = ['BOOKS', 'AUDIOBOOKS', 'EBOOKS', 'GIFT CARDS', 'FAQ', 'ABOUT US', 'COUPONS & DEALS'];

  return (
    <>
      <StyledAppBar variant="elevation">
        <Toolbar>
          <StyledStack>
            <UpperHeader>
              <UpperHeaderSection>
                <StyledIconButton aria-label="Open menu" onClick={handleDrawerToggle}>
                  <Bars3Icon height={24} width={24} />
                </StyledIconButton>
                <LogoTypography variant="h2">Booktopia</LogoTypography>
              </UpperHeaderSection>
              <UpperHeaderSection>
                {upMd ? (
                  <>
                    <StyledTextField variant="outlined" size="small" label="Search by title, author, publisher..." />
                    <Button variant="contained" startIcon={<ShoppingCartIcon height={24} width={24} />}>
                      Cart
                    </Button>
                    <Button startIcon={<UserIcon height={24} width={24} />}>Account</Button>
                  </>
                ) : (
                  <>
                    <IconButton aria-label="Cart">
                      <ShoppingCartIcon height={24} width={24} />
                    </IconButton>
                    <IconButton aria-label="Account">
                      <UserIcon height={24} width={24} />
                    </IconButton>
                  </>
                )}
              </UpperHeaderSection>
            </UpperHeader>
            <NavList navItems={navItems} />
          </StyledStack>
        </Toolbar>
      </StyledAppBar>
      <NavDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} navItems={navItems} />
    </>
  );
};

export default Header;
