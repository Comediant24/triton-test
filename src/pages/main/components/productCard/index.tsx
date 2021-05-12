import * as React from 'react';
import {
  CardBottomWrapper,
  CardButton,
  CardContainer,
  CardImage,
  CardPrice,
  CardTitle,
} from './style';

interface ICardProps {
  title: string;
  image: string;
  price: number;
}

export const Card: React.FC<ICardProps> = ({ title, image, price }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={`Фотография товара ${title}`} />
      <CardTitle>{title}</CardTitle>
      <CardBottomWrapper>
        <CardPrice>{`${(price * 100).toLocaleString('ru')} руб.`}</CardPrice>
        <CardButton type="button" aria-label="Добавить в корзину">
          В корзину
        </CardButton>
      </CardBottomWrapper>
    </CardContainer>
  );
};
