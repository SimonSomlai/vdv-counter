export const formatTotalPrice = (amount: number, price: number) => {
  return Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount * price);
};
