import React from 'react';

const PortfolioItem = ({ portfolio, onPortfolioDelete, onPortfolioSelect, id, cryptos}) => {


  const foundCurrency = cryptos.find(currency => {
    return currency.name === portfolio.currency.name
})

  let value= foundCurrency.current_price*portfolio.amount;


  return (
    <div className="portfolio">

      
        <td>{portfolio.currency.name}</td>  <td>{portfolio.date}</td>  <td>{portfolio.amount} </td><td> £{value.toFixed(2)}</td>
        <td><button onClick={() => onPortfolioDelete(portfolio)}>Delete</button></td>
        <td><button onClick={() => onPortfolioSelect(portfolio)}>Edit</button></td>


    </div>
  );
};

export default PortfolioItem;
