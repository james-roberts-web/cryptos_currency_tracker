import React from 'react';

const PortfolioItem = ({ portfolio, onPortfolioDelete, onPortfolioSelect, id, cryptos}) => {


  const foundCurrency = cryptos.find(currency => {
    return currency.name === portfolio.currency.name
})

  let value= foundCurrency.current_price*portfolio.amount;


  return (
    <div className="portfolio">
      <li>{portfolio.amount} units of {portfolio.currency.name} purchased on {portfolio.date} value: £ {value}
      <button onClick={() => onPortfolioDelete(portfolio)}>Delete</button>
      <button onClick={() => onPortfolioSelect(portfolio)}>Edit</button>
      </li>

    </div>
  );
};

export default PortfolioItem;
