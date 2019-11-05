use accounts;
db.dropDatabase();

db.user.insertMany([
  {
    "name": "John",
    "currency": ["Ripple", "Dogecoin", "Xero", "Nano", "Dash", "Mithril", "Bitcoin"],
    "wallet_value": "5000"
  }
]);
