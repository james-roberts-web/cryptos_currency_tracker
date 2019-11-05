import React from 'react';

const PortfolioItem = ({ portfolio, onPortfolioDelete, onPortfolioSelect, id }) => {


  return (
    <div className="portfolio">
      <li>{portfolio.amount} units of {portfolio.currency.name} purchased on {portfolio.date}
      <button onClick={() => onPortfolioDelete(portfolio)}>Delete</button>
      <button onClick={() => onPortfolioSelect(portfolio)}>Edit</button>
      </li>
    </div>
  );
};

export default PortfolioItem;
