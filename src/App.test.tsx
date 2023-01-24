import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { MAX_AMOUNT, MIN_AMOUNT } from './components/AmountSelect';
import { formatTotalPrice } from './utils/format-price';
import { ITEM_PRICE } from './components/Price';

describe('App', () => {
  it(`Add button is disabled after reaching ${MAX_AMOUNT} items`, () => {
    render(<App />);
    const addButton = screen.getByTestId(/add/i);
    for (var i = 0; i < MAX_AMOUNT; i++) {
      userEvent.click(addButton);
    }
    expect(addButton).toBeDisabled();
  });

  it(`Remove button is disabled after reaching ${MIN_AMOUNT} items`, () => {
    render(<App />);
    const addButton = screen.getByTestId(/add/i);
    const removeButton = screen.getByTestId(/remove/i);
    expect(removeButton).toBeDisabled();
    userEvent.click(addButton);
    expect(removeButton).not.toBeDisabled();
  });

  it('Displays formatted price when adding items', () => {
    render(<App />);
    const addButton = screen.getByTestId(/add/i);
    userEvent.click(addButton);

    const total = screen.getByTestId(/total/i);
    const expectedPrice = formatTotalPrice(2, ITEM_PRICE);
    expect(total.textContent).toMatch(expectedPrice);
  });

  it(`format-price.tsx`, () => {
    const formatPriceOne = formatTotalPrice(3, 30);
    expect(formatPriceOne).toBe('€ 90,00');

    const formatPriceTwo = formatTotalPrice(2, 50);
    expect(formatPriceTwo).toBe('€ 100,00');
  });
});
