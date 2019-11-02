import React from 'react';

const CryptoDetail = (props) => {
  if (!props.currency) return null;
  return (
    <div className="details">
    <img src={props.currency.image} alt = "currency logo"></img>
      <h3>{ props.currency.name } </h3>
      <p>Abbreviation: {props.currency.symbol}</p>
      <p>Current Price: £{props.currency.current_price}</p>
      <p>Highest value in last 24 hours: £{props.currency.high_24h}</p>
      <p>Lowest value in last 24 hours: £{props.currency.low_24h}</p>
      <p>Percent change in last 24 hours: {props.currency.price_change_percentage_24h}%</p>
      <p>Percent change in last hour: {props.currency.price_change_percentage_1h_in_currency}%</p>
      <p>Market cap: £{props.currency.market_cap}</p>
      <p>Total Supply: £{props.currency.total_supply}</p>
      <p>Total Volume: £{props.currency.total_volume}</p>

    </div>
  )
}

export default CryptoDetail;
