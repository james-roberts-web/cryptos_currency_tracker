import { Route, useHistory } from 'react-router-dom';
import React from 'react';

const CurrencySelector = (props) => {
  let history = useHistory();

  const currencyNodes = props.cryptos.map((currency, index) => {
    return(
      <option
        value={ currency.name }
        key={ currency.symbol }>
        {currency.name}
      </option>
    );
  });

  function handleChange(event) {
    history.push(`/currencies/${event.target.value}`);
  }

  return (
    <div className="selector">
    <select id="currency-selector" defaultValue="default" onChange={ handleChange }>
      <option disabled value="default">Select a Currency...</option>
      { currencyNodes }
    </select>
    </div>
  );
}
export default CurrencySelector;
