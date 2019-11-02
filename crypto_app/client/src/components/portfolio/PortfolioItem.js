import React from 'react';

const PortfolioItem = ({ portfolio, onPortfolioDelete, onPortfolioSelect }) => {
  return (
    <div className="portfolio">
      <h3>{portfolio.date}</h3>
      <p>{portfolio.currency}</p>
      <p>{portfolio.ammount}</p>
      <button onClick={() => onPortfolioDelete(portfolio._id)}>Delete</button>
      <button onClick={() => onPortfolioSelect(portfolio)}>Edit</button>
    </div>
  );
};

export default PortfolioItem;
