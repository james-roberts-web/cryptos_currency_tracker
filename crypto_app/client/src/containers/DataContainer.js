import React, { Component } from 'react';
import CurrencyList from '../components/CurrencyList'
import CurrencySelector from '../components/CurrencySelector'
import CryptoDetail from '../components/CryptoDetail'
import SummaryChart from '../components/SummaryChart'


class DataContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cryptos: [],
      currentCurrency:null
    };
    this.handleCurrencySelected = this.handleCurrencySelected.bind(this);
  }



  componentDidMount() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
    .then(res => res.json(res))
    .then(cryptos => this.setState({cryptos}))
    .catch(err => console.error(err));
  }

  handleCurrencySelected(name) {
    const selectedCurrency = this.state.cryptos.find(currency => currency.name === name );
    this.setState({ currentCurrency: selectedCurrency });
  }

  render() {
    return(
      <div>
      <h1> my Cryptos App</h1>
        <CurrencySelector cryptos={this.state.cryptos} onCurrencySelected={ this.handleCurrencySelected }/>
        <CryptoDetail currency={ this.state.currentCurrency } />
        <SummaryChart cryptos={ this.state.cryptos }/>
      </div>
    )
  }
};

export default DataContainer;
