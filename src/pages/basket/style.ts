import styled from 'styled-components';

export const BasketContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const BasketCard = styled.div`
  margin-bottom: 16px;
  padding: 24px;
  background-color: #fff;
  border-radius: 16px;
`;

export const BasketFormTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.h1};
  color: ${(props) => props.theme.colors.main};
`;
