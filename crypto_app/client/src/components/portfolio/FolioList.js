import React from 'react';
import PortfolioItem from './PortfolioItem';


const FolioList = ({ portfolio, onPortfolioDelete, onPortfolioSelect }) => {

  const portfolioNodes = portfolio
    .map(portfolio => (
      <PortfolioItem
        key={portfolio._id}
        portfolio={portfolio}
        onPortfolioDelete={onPortfolioDelete}
        onPortfolioSelect={onPortfolioSelect}></PortfolioItem>
    ));

  return (
    <div id="portfolioList">
      {portfolioNodes}
    </div>
  )
}

export default FolioList;
