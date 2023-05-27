import { Button, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import { Bars3Icon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { NavDrawer } from '../../molecules/navDrawer/navDrawer';
import {
  StyledAppBar,
  StyledStack,
  StyledIconButton,
  LogoTypography,
  UpperHeaderSection,
  UpperHeader,
} from './headerStyles';
import Link from 'next/link';
import AccountButton from '@/components/atoms/accountButton/accountButton';
import CartButton from '@/components/atoms/cartButton/cartButton';
import { NavList } from '../navList/navList';

// App main header component

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <StyledAppBar variant='outlined' elevation={0}>
        <Toolbar>
          <StyledStack>
            <UpperHeader>
              <UpperHeaderSection>
                <StyledIconButton aria-label='Open menu' onClick={handleDrawerToggle}>
                  <Bars3Icon height={24} width={24} />
                </StyledIconButton>
                <LogoTypography variant='h2'>
                  <Link href='/'>Booktopia</Link>
                </LogoTypography>
              </UpperHeaderSection>
              <UpperHeaderSection>
                <CartButton />
                <AccountButton />
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
