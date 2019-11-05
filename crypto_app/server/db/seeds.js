use accounts;
db.dropDatabase();

db.user.insertMany([
  {
    "name": "John",
    "wallet": [
      {date:null, currency:"bitcoin", amount:2},
      {date:null, currency:"etherium", amount:100}
    ],
    "wallet_value": "5000"
  }
]);
