import React from 'react';
import styled from 'styled-components';

const AmountSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  > *:not(:last-child) {
    margin-right: 5px;
  }
`;

const SelectButton = styled.button`
  border: none;
  width: 20px;
  height: 20px;
  font-weight: bold;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    `
  cursor: not-allowed;
  `};
`;

export const MAX_AMOUNT = 5;
export const MIN_AMOUNT = 1;
export const AmountSelect: React.FC<{
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}> = ({ amount, setAmount }) => {
  return (
    <AmountSelectWrapper>
      <SelectButton
        onClick={() => setAmount((current: number) => current + 1)}
        disabled={amount === MAX_AMOUNT}
        data-testid="add"
      >
        +
      </SelectButton>
      <div>{amount}</div>
      <SelectButton
        onClick={() => setAmount((current: number) => current - 1)}
        disabled={amount === MIN_AMOUNT}
        data-testid="remove"
      >
        -
      </SelectButton>
    </AmountSelectWrapper>
  );
};
