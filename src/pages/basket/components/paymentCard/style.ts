import styled from 'styled-components';

export const CardForm = styled.form`
  width: 25em;
  height: 13em;
  position: relative;
  margin: 0 auto;
`;

const CardBody = styled.div`
  position: absolute;
  width: 18.5em;
  height: 11.5em;
  border-radius: 0.8em;
  box-sizing: border-box;
`;

export const CardFront = styled(CardBody)`
  border: 1px solid #bbb;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 100;
`;

const Input = styled.input`
  padding: 0.3em 0.5em;
  font-family: Courier, monospace;
  color: ${(props) => props.theme.colors.main};
  font-size: 1em;
  text-indent: 0.1em;
  border: 1px solid #666;
  box-sizing: border-box;
`;

export const CardDataInputNumber = styled(Input)`
  width: 100%;
  margin-bottom: 0.3em;
`;

export const CardDataInputExpired = styled(Input)`
  display: inline-block;
  width: 3em;
  margin-right: 0.5em;
`;

export const CardDataLabel = styled.label`
  font-size: 0.8em;
  display: block;
  margin-bottom: 0.5em;
`;

export const CardLogoBank = styled.img`
  position: absolute;
  top: -0.3em;
  left: 0;
  padding: 1.3em;
  width: 100%;
  height: 5em;
  object-fit: contain;
  object-position: 0 0;
  display: none;
`;

export const CardLogoPaymentSystem = styled.img`
  position: absolute;
  bottom: 1.3em;
  right: 1.3em;
  text-align: right;
  height: 1.8em;
  display: none;
`;

export const CardInputField = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.3em;
  box-sizing: border-box;
`;

export const CardBack = styled(CardBody)`
  bottom: 0;
  right: 0;
  background: #bbb;
  padding-top: 5.8em;
  padding-right: 1.3em;
  padding-left: 13.2em;

  &:before {
    content: '';
    position: absolute;
    top: 1.3em;
    background: ${(props) => props.theme.colors.main};
    width: 100%;
    height: 3em;
    left: 0;
  }
`;

export const CardDataInputCode = styled(Input)`
  width: 100%;
`;
