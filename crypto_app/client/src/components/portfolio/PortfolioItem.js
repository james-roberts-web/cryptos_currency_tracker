import React from 'react';

const PortfolioItem = ({ portfolio, onPortfolioDelete, onPortfolioSelect }) => {
  return (
    <div className="portfolio">
      <p>{portfolio.date}</p>
      <p>{portfolio.currency}</p>
      <p>{portfolio.amount}</p>
      <button onClick={() => onPortfolioDelete(portfolio._id)}>Delete</button>
      <button onClick={() => onPortfolioSelect(portfolio)}>Edit</button>
    </div>
  );
};

export default PortfolioItem;
