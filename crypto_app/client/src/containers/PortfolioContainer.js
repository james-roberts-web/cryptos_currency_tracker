import React, { Component } from 'react';
import PortfolioItem from '../models/PortfolioItem';
import FolioList from '../components/portfolio/FolioList';
import FolioForm from '../components/portfolio/FolioForm';


class PortfolioContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cryptos: [],
      portfolio: [],
      editPortfolio: null
    };

    this.handleNewPortfolio = this.handleNewPortfolio.bind(this);
    this.handleDeletePortfolio = this.handleDeletePortfolio.bind(this);
    this.handleSelectPortfolio = this.handleSelectPortfolio.bind(this);
    this.handleEditPortfolio = this.handleEditPortfolio.bind(this);
  }

  componentDidMount() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
    .then(res => res.json(res))
    .then(cryptos => this.setState({cryptos}))
    .catch(err => console.error(err));
  }

  // componentDidMount() {
  //   PortfolioItem.get()
  //     .then(portfolio => this.setState({ portfolio }));
  // }

  handleNewPortfolio(portfolioData) {
    PortfolioItem.post(portfolioData)
      .then(newPortfolio => this.setState({
        portfolio: [...this.state.portfolio, newPortfolio]
      }));
  }

  handleDeletePortfolio(id) {
    PortfolioItem.delete(id)
      .then(portfolio => this.setState({ portfolio }));
  }

  handleSelectPortfolio(editPortfolio) {
    this.setState({ editPortfolio });
  }

  handleEditPortfolio(portfolioData) {
    PortfolioItem.update(portfolioData)
      .then(portfolio => this.setState({ portfolio, editPortfolio: null })
    );
  }

  handleCurrencySelected(name) {
    const selectedCurrency = this.state.cryptos.find(currency => currency.name === name );
    this.setState({ currentCurrency: selectedCurrency });
  }

  render() {
    const editForm = this.state.editPortfolio ?
      <FolioForm
        crytos={this.state.cryptos}
        title="Edit Portfolio"
        portfolio={this.state.editPortfolio}
        onPortfolioSubmit={this.handleEditPortfolio}></FolioForm> : null;

    return (
      <div id="portfolioContainer">
        <h1>Portfolio</h1>
        <FolioList
          cryptos={this.state.cryptos}
          onPortfolioSelect={this.handleSelectPortfolio}
          onPortfolioDelete={this.handleDeletePortfolio}
          portfolio={this.state.portfolio}></FolioList>
        <FolioForm
          cryptos={this.state.cryptos}
          title="Add New Crypto Purchase"
          onPortfolioSubmit={this.handleEditPortfolio}></FolioForm>
      </div>
    );
  }
}

export default PortfolioContainer;
