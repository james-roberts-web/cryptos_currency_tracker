import React from 'react';
import PortfolioItem from './PortfolioItem';


const FolioList = ({ portfolio, onPortfolioDelete, onPortfolioSelect, id, cryptos }) => {

  if (!portfolio) return null;

  const portfolioNodes = portfolio.map((portfolio, index) => (
      <PortfolioItem
        key={index}
        cryptos={cryptos}
        portfolio={portfolio}
        onPortfolioDelete={onPortfolioDelete}
        onPortfolioSelect={onPortfolioSelect}
        id={id}
        ></PortfolioItem>
    ));

  return (
    <div id="portfolioList">
      {portfolioNodes}
      PortfolioTotal =
    </div>
  )
}

export default FolioList;
