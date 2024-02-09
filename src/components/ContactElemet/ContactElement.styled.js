import styled from 'styled-components';

export const ListItem = styled.li`
  width: 320px;
  margin-bottom: 10px;
  padding-left: 20px;

  &::marker {
    content: '»';
    color: blue;
    font-weight: 700;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px black dashed;
  padding-bottom: 5px;
`;

export const Button = styled.button`
  border-radius: 10px;
  background-color: red;
  color: white;

  &:hover,
  &:focus {
    color: yellow;
    background-color: darkred;
    cursor: pointer;
  }
`;
