import React from 'react';

const PortfolioItem = ({ portfolio, onPortfolioDelete, onPortfolioSelect }) => {
// const coinValue = cryptos.find(currency =>
   // currency.name.toLowerCase === portfolio.currency.toLowerCase ).current_price;

  return (
    <div className="portfolio">
      <li>{portfolio.amount} units of {portfolio.currency.name} purchased on {portfolio.date}
      <button onClick={() => onPortfolioDelete(portfolio._id)}>Delete</button>
      <button onClick={() => onPortfolioSelect(portfolio)}>Edit</button>
      </li>
    </div>
  );
};

export default PortfolioItem;
