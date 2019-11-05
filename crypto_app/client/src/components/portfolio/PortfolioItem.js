import React from 'react';

const PortfolioItem = ({ portfolio, onPortfolioDelete, onPortfolioSelect }) => {
  return (
    <div className="portfolio">
      <li>{portfolio.date}  {portfolio.currency}  {portfolio.amount}
      <button onClick={() => onPortfolioDelete(portfolio._id)}>Delete</button>
      <button onClick={() => onPortfolioSelect(portfolio)}>Edit</button>
      </li>
    </div>
  );
};

export default PortfolioItem;
