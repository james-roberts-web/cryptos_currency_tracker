import React from 'react';
import Portfolio from './Portfolio';
import './PortfoliosList.css';

const FolioList = ({ portfolio, onPortfolioDelete, onPortfolioSelect }) => {

  const portfolioNodes = portfolios
    .map(portfolio => (
      <Portfolio
        key={portfolio._id}
        portfolio={portfolio}
        onPortfolioDelete={onPortfolioDelete}
        onPortfolioSelect={onPortfolioSelect}></Portfolio>
    ));

  return (
    <div id="portfolioList">
      {portfolioNodes}
    </div>
  )
}

export default FolioList;
