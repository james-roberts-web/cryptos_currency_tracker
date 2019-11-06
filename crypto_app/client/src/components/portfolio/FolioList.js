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


      const valuesArray = portfolioNodes.map(item => {
        return item.props.portfolio
      })

      const mess = valuesArray.map(item => {
        return item.currency.current_price * item.amount
      })

      const totalPortfolio = mess.reduce((total, number) => {
        return total + number
      },0)


  return (
    <div id="overflow-x:auto;">
      <div id="portfolioTotal">
      <h1>Portfolio Total = £{totalPortfolio.toFixed(2)}</h1>
      </div>

      <table>
        <th>Name</th>
        <th>Date Purchased</th>
        <th>Ammount</th>
        <th>Value</th>
        <th></th>
        <th></th>

        <tr>
          {portfolioNodes}
        </tr>
    
      </table>
    </div>




  )
}

export default FolioList;
