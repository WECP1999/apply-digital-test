const parseToCurrency = (currentNumber: number | string) => {
  const currentLocale = 'es-SV';

  const currency = 'USD';

  return currentNumber.toLocaleString(currentLocale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  });
};

export default parseToCurrency;
