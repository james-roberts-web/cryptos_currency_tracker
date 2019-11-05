import React from 'react';

const FolioSelector = (props) => {

  const currencyNodes = props.cryptos.map((currency, index) => {
    return(
      <option
        value={ currency }
        key={ currency.symbol }>
        {currency.name}
      </option>
    );
  });

  function handleChange(event){
    props.currencyChange(event.target.value)
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
