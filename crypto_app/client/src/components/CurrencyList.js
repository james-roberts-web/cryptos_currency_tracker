import React from 'react';
import Currency from './Currency'

const CurrencyList = (props) => {

  const currencyNodes = props.cryptos.map((currency, index) => {
    return(
      <Currency
        name= { currency.name }
        key={ index }>
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
