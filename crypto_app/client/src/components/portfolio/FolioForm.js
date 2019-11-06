import React, { Component } from 'react';
import FolioSelector from '../portfolio/FolioSelector'


class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolio: this.props.portfolio || { date: "", currency: "", amount: "", _id:"5dc1a1283472ae9add7812cd"}
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.portfolio && prevProps.portfolio !== this.props.portfolio)
      this.setState({ portfolio: this.props.portfolio });
  }

  handleDateChange(event) {
    this.setState({ portfolio: { ...this.state.portfolio, date: event.target.value } });
  }
  handleCurrencyChange(currency_id) {
    this.setState({ portfolio: { ...this.state.portfolio, currency: currency_id } });
  }
  handleAmountChange(event) {
    this.setState({ portfolio: { ...this.state.portfolio, amount: event.target.value } });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onPortfolioSubmit({...this.state.portfolio});
    this.setState((prevState) => {
      return {
        portfolio: {
          _id: prevState.portfolio._id,
          date: "",
          currency: "",
          amount: ""
        }
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
          <FolioSelector
          cryptos={this.props.cryptos}
          currencyChange={this.handleCurrencyChange}/>
        </div>

        <div className="input-group">
          <label>Amount:</label>
          <input type="text" required
            value={this.state.portfolio.amount}
            onChange={this.handleAmountChange}></input>
        </div>

        <div className="input-group">
          <button type="submit">Submit</button>
        </div>

      </form>
    );
  }
}

export default PortfolioForm;
