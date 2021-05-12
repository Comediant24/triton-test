import * as React from 'react';
import { LayoutContainer } from './style';

export const Layout: React.FC = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};
