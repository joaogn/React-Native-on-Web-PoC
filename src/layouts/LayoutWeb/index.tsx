import React, { ReactNode } from 'react';
import SideMenuWeb from './SideMenuWeb';
import { Container } from './style';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <SideMenuWeb />
      {children}
    </Container>
  );
};

export default Layout;
