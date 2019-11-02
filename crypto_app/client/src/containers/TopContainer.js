import React, { Component } from 'react';
// import CurrencyList from '../components/CurrencyList'
import CurrencySelector from '../components/info/CurrencySelector'
import CryptoDetail from '../components/info/CryptoDetail'
import SummaryChart from '../components/info/SummaryChart'
import HistoricChart from '../components/info/HistoricChart'
import DetailContainer from './DetailContainer'


class TopContainer extends Component {

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
      <div className="main">
        <h1> my Cryptos App</h1>
        <CurrencySelector cryptos={this.state.cryptos} onCurrencySelected={ this.handleCurrencySelected }/>
        <SummaryChart cryptos={ this.state.cryptos }/>
        <DetailContainer currency={ this.state.currentCurrency } />
      </div>
    )
  }
};

export default TopContainer;
