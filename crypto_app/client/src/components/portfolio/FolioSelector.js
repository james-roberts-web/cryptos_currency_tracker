import React from 'react';

const FolioSelector = (props) => {

  const currencyNodes = props.cryptos.map(currency => {
    return(
      <option
        value={ currency.id }
        key={ currency.symbol }>
        { currency.name }
      </option>
    );
  });

  function handleChange(event){
    const value = event.target.value
    const foundCurrency = props.cryptos.find(currency => {
      return currency.id === value
    })
    props.currencyChange(foundCurrency)
  }


  return (
    <div className="selector">
    <select id="folio-selector" defaultValue="default" onChange={handleChange} >
      <option disabled value="default">Select a Currency...</option>
      { currencyNodes }
    </select>
    </div>
  );
}
export default FolioSelector;
