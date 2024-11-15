import styled from 'styled-components';

export const ButtonContainer = styled.section`
  display: flex;
`;

export const Button = styled.button`
  &:not(:disabled) {
    cursor: pointer;
  }
`;
