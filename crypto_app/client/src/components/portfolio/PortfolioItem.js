import React from 'react';

const PortfolioItem = ({ portfolio, onPortfolioDelete, onPortfolioSelect }) => {
// const coinValue = cryptos.find(currency =>
   // currency.name.toLowerCase === portfolio.currency.toLowerCase ).current_price;

  return (
    <div className="portfolio">
      <li>{portfolio.date}  {portfolio.currency}  {portfolio.amount}
      <button onClick={() => onPortfolioDelete(portfolio._id)}>Delete</button>
      <button onClick={() => onPortfolioSelect(portfolio)}>Edit</button>

      Value: £{}
      </li>
    </div>
  );
};

export default PortfolioItem;
