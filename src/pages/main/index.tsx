import * as React from 'react';
import { Header } from './components/header';
import { ProductList } from './components/productList';

interface IMainProps {}

export const Main: React.FC<IMainProps> = () => {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
};
