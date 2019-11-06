class PortfolioItem {
  static url = "http://localhost:3001/api";

  static get() {
    return fetch(this.url)
      .then(res => res.json());
  }

  static post(portfolio) {
    return fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(portfolio)
    }).then(res => res.json());
  }

  static delete(id) {
    return fetch(`${this.url}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }

  static buyCurrency(data) {
    const id = data._id;
    delete data._id;
    return fetch(`${this.url}/${id}/buy`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: data.date, currency: data.currency, amount: data.amount })
    }).then(res => res.json());
  }

  static deleteCoin(data, id) {
    return fetch(`${this.url}/${id}/delete-coin`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: data.date, currency: data.currency, amount: data.amount })
    }).then(res => res.json());
  }

  static editPortfolio(data, id) {
    return fetch(`${this.url}/${id}/edit`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: data.date, currency: data.currency, amount: data.amount })
    }).then(res => res.json());
  }


  static update(portfolio, id) {
    return fetch(`${this.url}/${portfolio._id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(portfolio)
    }).then(res => res.json())
  }
}

export default PortfolioItem;
