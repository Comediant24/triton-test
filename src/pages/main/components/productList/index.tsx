import * as React from 'react';
import { ListWrapper, ListUl } from './style';
import PRODUCT from '../../../../data/product.js';
import { Card } from '../productCard';

interface IProductListProps {}

export const ProductList: React.FC<IProductListProps> = (props) => {
  return (
    <ListWrapper>
      <ListUl>
        {PRODUCT.results.map((item) => (
          <Card
            key={item.code}
            title={item.name}
            image={item.images[0].url}
            price={item.price.value}
          ></Card>
        ))}
      </ListUl>
    </ListWrapper>
  );
};
