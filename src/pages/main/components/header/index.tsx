import * as React from 'react';
import { HeaderBasketImages, HeaderContainer } from './style';

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <HeaderContainer>
      <HeaderBasketImages />
    </HeaderContainer>
  );
};
