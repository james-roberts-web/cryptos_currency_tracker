import React, { Component } from 'react';
import CryptoDetail from '../components/info/CryptoDetail'
import HistoricChart from '../components/info/HistoricChart'


class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historicData: [],
      currency:this.props.currency
    };
  }

  componentDidMount() {
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=gbp&from=1572703373&to=1572713373')
    .then(res => res.json(res))
    .then(historicData => this.setState({historicData}))
    .catch(err => console.error(err));
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
      return(

        <div className="detail">
        <h1>Detail Component</h1>
        <CryptoDetail currency={this.props.currency}/>
        <HistoricChart currency={this.props.currency} historicData={this.state.historicData} />
        </div>
      )
    }
  };

  export default DetailContainer;
