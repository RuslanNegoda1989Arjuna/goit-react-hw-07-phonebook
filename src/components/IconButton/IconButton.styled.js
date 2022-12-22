import styled from '@emotion/styled';

export const ButtonIcon = styled.button`
  margin: 0;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  color: white;
  background-color: gray;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 183, 48, 1);
    scale: 1.02;
  }
`;
