import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { LayoutWrapper } from './layoutStyles';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
