import styled from 'styled-components';

export const Label = styled.label``;

export const Input = styled.input`
  display: block;
  border-radius: 10px;
  padding: 0 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover,
  &:focus {
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.7);
  }
`;
