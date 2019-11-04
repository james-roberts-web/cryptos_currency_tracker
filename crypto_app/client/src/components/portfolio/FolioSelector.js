import React from 'react';

const FolioSelector = (props) => {

  const currencyNodes = props.cryptos.map((currency, index) => {
    return(
      <option
        value={ currency.name }
        key={ currency.symbol }>
        {currency.name}
      </option>
    );
  });


  return (
    <div className="selector">
    <select id="currency-selector" defaultValue="default"  >
      <option disabled value="default">Select a Currency...</option>
      { currencyNodes }
    </select>
    </div>
  );
}
export default FolioSelector;
