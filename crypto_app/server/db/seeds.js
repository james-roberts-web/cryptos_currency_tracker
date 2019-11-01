use accounts;
db.dropDatabase();
db.user.insertMany([
  {
    name: "Sandra",
    wallet_value: "1200",
    portfolio: ["Bitcoin", "Etherium"]
  },
  {
    name: "John",
    wallet_value: "5000",
    portfolio: ["Ripple", "Dogecoin", "Xero", "Nano", "Dash", "Mithril", "Bitcoin"]
  },
  {
    name: "Kelly",
    wallet_value: "100",
    portfolio: ["Bitcoin", "Monero"]
  },
  {
    name: "Frankie",
    wallet_value: "300",
    portfolio: ["Bitcoin"]
  }
]);
