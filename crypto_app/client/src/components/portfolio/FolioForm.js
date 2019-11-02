import React, { Component } from 'react';

class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolio: this.props.portfolio || { date: "", currency: "", ammount: "" }
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleAmmountChange = this.handleAmmountChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.portfolio && prevProps.portfolio !== this.props.portfolio)
      this.setState({ portfolio: this.props.portfolio });
  }

  handleDateChange(event) {
    this.setState({ portfolio: { ...this.state.portfolio, date: event.target.value } });
  }
  handleCurrencyChange(event) {
    this.setState({ portfolio: { ...this.state.portfolio, currency: event.target.value } });
  }
  handleAmmountChange(event) {
    this.setState({ portfolio: { ...this.state.portfolio, ammount: event.target.value } });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onPortfolioSubmit(this.state.portfolio);
    this.setState({
      portfolio: {
        date: "",
        currency: "",
        ammount: ""
      }
    });
  }

  render() {
    return (
      <form id="portfolioForm" onSubmit={this.handleFormSubmit}>
        <h3>{this.props.title}</h3>

        <div className="input-group">
          <label>Date of purchase:</label>
          <input type="date" required
            value={this.state.portfolio.date}
            onChange={this.handleDateChange}></input>
        </div>

        <div className="input-group">
          <label>Currency:</label>
          <input type="text" required
            value={this.state.portfolio.currency}
            onChange={this.handleCurrencyChange}></input>
        </div>

        <div className="input-group">
          <label>Ammount:</label>
          <input type="text" required
            value={this.state.portfolio.ammount}
            onChange={this.handleAmmountChange}></input>
        </div>

        <div className="input-group">
          <button type="submit">Submit</button>
        </div>

      </form>
    );
  }
}

export default PortfolioForm;
