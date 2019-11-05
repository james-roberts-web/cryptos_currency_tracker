import React from 'react';
import PortfolioItem from './PortfolioItem';


const FolioList = ({ portfolios, onPortfolioDelete, onPortfolioSelect }) => {

  if (!portfolios) return null;

  const portfolioNodes = portfolios.map((portfolio, index) => (
      <PortfolioItem
        key={index}
        portfolio={portfolio}
        onPortfolioDelete={onPortfolioDelete}
        onPortfolioSelect={onPortfolioSelect}
        ></PortfolioItem>
    ));

  return (
    <div id="portfolioList">
      {portfolioNodes}
    </div>
  )
}

export default FolioList;
