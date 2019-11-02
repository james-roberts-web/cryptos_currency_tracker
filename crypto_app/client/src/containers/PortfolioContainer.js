import React, { Component } from 'react';

class PortfolioContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      portfolio: [],
      editPortfolio:null
    };
  }

  componentDidMount() {
    Portfolio.get()
      .then(portfolio => this.setState({ portfolio }));
  }
  handleAddNew(cryptoData) {
    Portfolio.post(folioData)
      .then(newFolioItem => this.setState({
        portfolio: [...this.state.portfolio, newFolioItem]
      }));
  }

  handleDelete(id) {
    Portfolio.delete(id)
      .then(sightings => this.setState({ portfolio }));
  }

  handleSelectFolioItem(editPortfolio) {
    this.setState({ editPortfolio });
  }

  handleEditFolio(portfolioData) {
    Sighting.update(portfolioData)
      .then(portfolio => this.setState({ portfolio, editFolio: null }));
  }

  render() {
    const editForm = this.state.editFolio ?
      <FolioForm
        title="Edit Portfolio"
        portfolio={this.state.editFolio}
        onFolioSubmit={this.handleEditFolio}></PortfolioForm> : null;

    return (
      <div id="portfolioContainer">
        <h1>Portfolio</h1>
        <FolioList
          onFolioSelect={this.handleSelectFolioItem}
          onSightingDelete={this.handleDelete}
          portfolio={this.state.portfolio}></FolioList>

        {editForm}

        <FolioForm
          title="Add New Currency"
          onFolioSelectSubmit={this.handleAddNew}></FolioForm>
      </div>
    );
  }
  }


  render() {
    return(
      <div className="main">
        <h1> Portfolio</h1>
      </div>
    )
  }
};

export default PortfolioContainer;
