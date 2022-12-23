import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactIt = styled.p`
  margin-right: 20px;
  font-weight: 700;
`;

export const BtnDelete = styled.button`
  width: 100px;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: rgba(255, 183, 48, 1);
  }
`;
