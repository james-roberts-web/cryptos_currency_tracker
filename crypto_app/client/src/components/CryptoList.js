import React, { Component } from 'react';
import CryptoItem from '../components/CryptoItem'

const CryptoList = ({cryptos})  => {
  const cryptoNodes = cryptos.map((crypto, index) => {
    return <CryptoItem key={index} name={crypto.id} />
  });

  return(
    <div>
      {cryptoNodes}
    </div>
  )
}

export default CryptoList;
