import React from 'react';

const CurrencySelector = (props) => {

  const currencyNodes = props.cryptos.map((currency) => {
    return(
      <option
        name= { currency.name }
        key={ currency.id }>
        {currency.name}
      </option>
    );
  });

  function handleChange(event) {
    props.onCurrencySelected(event.target.value);
  }

  return (
    <select id="currency-selector" defaultValue="default" onChange={ handleChange }>
      <option disabled value="default">Select a Currency...</option>
      { currencyNodes }
    </select>
  );
}
export default CurrencySelector;
