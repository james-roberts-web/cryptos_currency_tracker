import React, { Component } from 'react';

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
    .then(cryptos => this.setState({cryptos}))
    .catch(err => console.error(err));
  }

  render() {
    return(
      <h1>CONTAINER</h1>
    )
  }
};

export default DataContainer;
