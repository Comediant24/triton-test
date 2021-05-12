import styled from 'styled-components';

export const ListWrapper = styled.section`
  width: 100%;
`;

export const ListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 20px;
  row-gap: 30px;
  list-style-type: none;
  padding: 0;
`;
