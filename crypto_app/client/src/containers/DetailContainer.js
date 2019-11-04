import React, { Component } from 'react';
import CryptoDetail from '../components/info/CryptoDetail'
import HistoricChart from '../components/info/HistoricChart'
import CurrencySelector from '../components/info/CurrencySelector'


class DetailContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: null,
      historicData: {
        prices: [],
        marketCaps: [],
        totalVolumes: []
      },
    };
  }

  getUrlCurrency() {
    const currencyName = this.props.match.params.currency;

    const selectedCurrency = this.props.cryptos
    .find(currency => {
      return currency.name.toLowerCase() === currencyName.toLowerCase();
    });

    if(!selectedCurrency) return;

    fetch(`https://api.coingecko.com/api/v3/coins/${selectedCurrency.id}/market_chart?vs_currency=gbp&days=30`)
      .then(res => res.json(res))
      .then(data => this.setState({
        historicData: {
          marketCaps: data.market_caps,
          totalVolumes: data.total_volumes,
          prices: data.prices
        }
      }))
    .catch(err => console.error(err));
    this.setState({ currency: selectedCurrency });
    console.log(currencyName)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps === this.props) return;
    this.getUrlCurrency();
  }

  componentDidMount() {
    this.getUrlCurrency();
  }

  render() {
    if (!this.state.currency) return null;
    return(
      <div className="detail">
      <h1>{ this.state.currency.name }</h1>
      <CryptoDetail currency={this.state.currency}/>
      <HistoricChart currency={this.state.currency.name} historicData={this.state.historicData} />
      </div>
    )
  }
};

export default DetailContainer;
