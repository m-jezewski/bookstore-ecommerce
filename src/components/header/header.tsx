import { Button, Container, Drawer, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import Link from 'next/link';
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

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const upMd = useMediaQuery('(min-width: 900px)');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  let container;

  if (typeof window !== 'undefined') {
    container = window !== undefined ? () => window.document.body : undefined;
  }

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
            <Container
              component={'nav'}
              sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', gap: 1 }}
            >
              <Button size="large" component={Link} href="">
                BOOKS
              </Button>
              <Button size="large" component={Link} href="">
                AUDIOBOOKS
              </Button>
              <Button size="large" component={Link} href="">
                EBOOKS
              </Button>
              <Button size="large" component={Link} href="">
                GIFT CARDS
              </Button>
              <Button size="large" component={Link} href="">
                FAQ
              </Button>
              <Button size="large" component={Link} href="">
                ABOUT US
              </Button>
              <Button size="large" component={Link} href="">
                COUPONS & DEALS
              </Button>
            </Container>
          </StyledStack>
        </Toolbar>
      </StyledAppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <>drawer content here</>
      </Drawer>
    </>
  );
};

export default Header;
