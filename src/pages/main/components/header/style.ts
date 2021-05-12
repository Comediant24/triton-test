import styled from 'styled-components';
import basket from './img/basket.svg';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  padding: 20px 0;
  box-sizing: border-box;
`;

export const HeaderBasketImages = styled.img`
  width: 34px;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

HeaderBasketImages.defaultProps = {
  src: basket,
  alt: 'иконка корзинки',
};
