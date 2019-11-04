import React, { Component } from 'react';
import CryptoDetail from '../components/info/CryptoDetail'
import HistoricChart from '../components/info/HistoricChart'


class DetailContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      historicData: [],
      // currencyName: currency || null,
      currency: null
    };
  }

  getUrlCurrency() {
    const currencyName = this.props.match.params.currency;

    const selectedCurrency = this.props.cryptos
    .find(currency => {
      return currency.name.toLowerCase() === currencyName.toLowerCase();
    });

    fetch(`https://api.coingecko.com/api/v3/coins/${currencyName.toLowerCase()}/market_chart/range?vs_currency=gbp&from=1572703373&to=1572713373`)
    .then(res => res.json(res))
    .then(historicData => this.setState({historicData}))
    .catch(err => console.error(err));

    this.setState({ currency: selectedCurrency });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps === this.props) return;
    this.getUrlCurrency();
  }

  componentDidMount() {
    this.getUrlCurrency();
  }

  // componentDidMount() {
  //   fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
  //   .then(res => res.json())
  //   .then(data => {
  //     const topTen = data.slice(0, 10);
  //     const storyPromises = topTen.map(storyId => {
  //       return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
  //         .then(res => res.json())
  //       });
  //       Promise.all(storyPromises).then(stories => this.setState({stories:stories}))
  //     })
  //     .catch(console.error);
  //   }
  //

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
