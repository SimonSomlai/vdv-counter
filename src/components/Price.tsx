import React from 'react';
import styled from 'styled-components';
import { formatTotalPrice } from '../utils/format-price';

const Total = styled.span`
  font-weight: bold;
`;

export const ITEM_PRICE = 50;
export const Price: React.FC<{ amount: number }> = ({ amount }) => {
  return (
    <p>
      Total:{' '}
      <Total data-testid="total">{formatTotalPrice(amount, ITEM_PRICE)}</Total>
    </p>
  );
};
