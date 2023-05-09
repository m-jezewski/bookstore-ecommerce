import { Button, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import { Bars3Icon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { NavList } from '../nav/navList/navList';
import { NavDrawer } from '../nav/navDrawer/navDrawer';
import {
  StyledAppBar,
  StyledStack,
  StyledIconButton,
  LogoTypography,
  UpperHeaderSection,
  UpperHeader,
  StyledTextField,
} from './headerStyles';

// App main header component

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const upMd = useMediaQuery('(min-width: 900px)');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <StyledAppBar variant='outlined'>
        <Toolbar>
          <StyledStack>
            <UpperHeader>
              <UpperHeaderSection>
                <StyledIconButton aria-label='Open menu' onClick={handleDrawerToggle}>
                  <Bars3Icon height={24} width={24} />
                </StyledIconButton>
                <LogoTypography variant='h2'>Booktopia</LogoTypography>
              </UpperHeaderSection>
              <UpperHeaderSection>
                {upMd ? (
                  <>
                    <StyledTextField
                      variant='standard'
                      size='small'
                      label='Search by title, author, publisher...'
                    />
                    <Button startIcon={<ShoppingCartIcon height={24} width={24} />}>Cart</Button>
                    <Button startIcon={<UserIcon height={24} width={24} />}>Account</Button>
                  </>
                ) : (
                  <>
                    <IconButton aria-label='Cart'>
                      <ShoppingCartIcon height={24} width={24} />
                    </IconButton>
                    <IconButton aria-label='Account'>
                      <UserIcon height={24} width={24} />
                    </IconButton>
                  </>
                )}
              </UpperHeaderSection>
            </UpperHeader>
            <NavList />
          </StyledStack>
        </Toolbar>
      </StyledAppBar>
      <NavDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    </>
  );
};

export default Header;
