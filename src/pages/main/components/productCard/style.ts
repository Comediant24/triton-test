import styled from 'styled-components';

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const CardTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.h2};
  color: ${(props) => props.theme.colors.main};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardPrice = styled.p`
  font-size: ${(props) => props.theme.fontSize.h1};
  margin: 0;
`;

export const CardBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardButton = styled.button`
  padding: 0;
  width: 100px;
  border: none;
  background-color: ${(props) => props.theme.colors.main};
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  line-height: 1;

  &:hover {
    opacity: 0.6;
  }
`;
