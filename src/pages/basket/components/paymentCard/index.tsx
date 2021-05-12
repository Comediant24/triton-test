import React, { useState } from 'react';
import {
  CardForm,
  CardDataInputNumber,
  CardFront,
  CardDataLabel,
  CardLogoBank,
  CardLogoPaymentSystem,
  CardInputField,
  CardDataInputExpired,
  CardBack,
  CardDataInputCode,
} from './style';

interface IPaymentCardProps {}

interface stateCardPayment {
  number: string;
  code: string;
  expiredMonth: string;
  expiredYear: string;
}

const PaymentCard: React.FunctionComponent<IPaymentCardProps> = (props) => {
  const [cardNumberInput, setCardNumberInput] = useState<stateCardPayment>({
    number: '',
    code: '',
    expiredMonth: '',
    expiredYear: '',
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.value.replace(/\D/, '');
    if (
      (name === 'expiredMonth' || name === 'expiredYear') &&
      value.length > 2
    ) {
      return;
    }
    if (name === 'code' && value.length > 3) {
      return;
    }
    setCardNumberInput({ ...cardNumberInput, [name]: value.replace(/\D/, '') });
  };

  return (
    <CardForm autoComplete="off">
      <CardFront>
        <CardLogoBank />
        <CardLogoPaymentSystem />
        <CardInputField>
          <CardDataLabel htmlFor="numberCard">Номер карты</CardDataLabel>
          <CardDataInputNumber
            onChange={handleChangeInput}
            name="number"
            value={cardNumberInput.number}
            type="text"
            id="numberCard"
            placeholder="0000 0000 0000 0000"
          />
          <CardDataLabel htmlFor="numberDate">Действует до:</CardDataLabel>
          <CardDataInputExpired
            onChange={handleChangeInput}
            name="expiredMonth"
            value={cardNumberInput.expiredMonth}
            id="numberDate"
            placeholder="ММ"
          />
          <CardDataInputExpired
            onChange={handleChangeInput}
            name="expiredYear"
            value={cardNumberInput.expiredYear}
            placeholder="ГГ"
          />
        </CardInputField>
      </CardFront>
      <CardBack>
        <CardDataLabel htmlFor="numberDate">CVC/CVV</CardDataLabel>
        <CardDataInputCode
          onChange={handleChangeInput}
          name="code"
          value={cardNumberInput.code}
          id="numberDate"
          placeholder="000"
        />
      </CardBack>
    </CardForm>
  );
};

export default PaymentCard;
