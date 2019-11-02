import React, { Component } from 'react';
import CurrencyList from '../components/CurrencyList'
import CurrencySelector from '../components/CurrencySelector'

class DataContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cryptos: [],
      currentCurrency:null
    };
  }

  componentDidMount() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
    .then(res => res.json(res))
    .then(cryptos => this.setState({cryptos}))
    .catch(err => console.error(err));
  }

  render() {
    return(
      <div>
        <CurrencyList cryptos={this.state.cryptos}></CurrencyList>
        <CurrencySelector cryptos={this.state.cryptos}/>
      </div>
    )
  }
};

export default DataContainer;
