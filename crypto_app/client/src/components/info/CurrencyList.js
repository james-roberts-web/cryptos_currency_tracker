import React from 'react';
import Currency from './Currency'

const CurrencyList = (props) => {

  const currencyNodes = props.cryptos.map((currency) => {
    return(
      <Currency
        name= { currency.name }
        key={ currency.symbol }>
      </Currency>
    )
  })

  return (
    <div className="currency-list" >
      <h1>List of Currencies</h1>
      {currencyNodes}
    </div>
  );
}
export default CurrencyList;
