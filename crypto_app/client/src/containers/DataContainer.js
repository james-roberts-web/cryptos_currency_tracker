import React, { Component } from 'react';
import CryptoList from '../components/CryptoList'

class DataContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    fetch('https://api.coincap.io/v2/assets')
    .then(res => res.json(res))
    .then(({data}) => this.setState({cryptos: data}))
    .catch(err => console.error(err));
  }

  render() {
    return(
      <CryptoList cryptos={this.state.cryptos}/>
    )
  }
};

export default DataContainer;
