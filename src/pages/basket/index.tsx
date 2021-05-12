import React from 'react';
import PaymentCard from './components/paymentCard';
import { BasketCard, BasketContainer, BasketFormTitle } from './style';

interface IBasketProps {}

const Basket: React.FC<IBasketProps> = () => {
  return (
    <>
      <BasketContainer>
        <BasketCard>
          <BasketFormTitle>Оплата картой</BasketFormTitle>
          <PaymentCard />
        </BasketCard>
      </BasketContainer>
    </>
  );
};

export default Basket;
