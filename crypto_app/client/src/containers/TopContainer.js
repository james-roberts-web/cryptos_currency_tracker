import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component, Fragment } from 'react';
// import CurrencyList from '../components/CurrencyList'
import CurrencySelector from '../components/info/CurrencySelector'
import SummaryChart from '../components/info/SummaryChart'
import DetailContainer from './DetailContainer'
import PortfolioContainer from './PortfolioContainer'

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
    // const selectedCurrency = this.state.cryptos.find(currency => currency.name === name );
    // this.setState({ currentCurrency: selectedCurrency });
  }

  render() {
    return (
      <div className="main">
        <h1>Cryptos Currency Wallet</h1>
        <CurrencySelector cryptos={this.state.cryptos} onCurrencySelected={ this.handleCurrencySelected }/>

        <Route
          exact path={`${this.props.match.path}`}
          render={() => (<SummaryChart cryptos={ this.state.cryptos }/>)} />

        <Route
          path={`${this.props.match.path}/:currency`}
          render={({match}) => (<DetailContainer match={match} cryptos={ this.state.cryptos } />)} />
      </div>
    );
  }
};

export default TopContainer;
