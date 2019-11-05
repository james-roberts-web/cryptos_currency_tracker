use accounts;
db.dropDatabase();

db.user.insertMany([
  {
    "name": "John",
    "wallet": [
      {
        "date": "2014-10-07",
        "currency": {
          "id": "ripple",
          "symbol": "xrp",
          "name": "XRP",
          "image": "https://assets.coingecko.com/coins/images/44/large/xrp.png?1564480400",
          "current_price": 0.233978,
          "market_cap": 10119120326,
          "market_cap_rank": 3,
          "total_volume": 1865144182,
          "high_24h": 0.235345,
          "low_24h": 0.227253,
          "price_change_24h": 0.00552159,
          "price_change_percentage_24h": 2.41691,
          "market_cap_change_24h": 245151027,
          "market_cap_change_percentage_24h": 2.4828,
          "circulating_supply": 43248091671,
          "total_supply": 100000000000,
          "ath": 2.5,
          "ath_change_percentage": -90.64158,
          "ath_date": "2018-01-07T00:00:00.000Z",
          "roi": null,
          "last_updated": "2019-11-05T15:57:53.882Z",
          "price_change_percentage_1h_in_currency": 0.445193735965463,
          "price_change_percentage_24h_in_currency": 2.41690920980223,
          "price_change_percentage_7d_in_currency": 2.02301142699309
        },
        "amount": "111"
      },
      {
        "date": "2009-10-19",
        "currency": {
          "id": "bitcoin",
          "symbol": "btc",
          "name": "Bitcoin",
          "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
          "current_price": 7267.3,
          "market_cap": 131068420189,
          "market_cap_rank": 1,
          "total_volume": 28177020509,
          "high_24h": 7354.56,
          "low_24h": 7136.65,
          "price_change_24h": 72.75,
          "price_change_percentage_24h": 1.01122,
          "market_cap_change_24h": 1549838413,
          "market_cap_change_percentage_24h": 1.19661,
          "circulating_supply": 18030825,
          "total_supply": 21000000,
          "ath": 14759.86,
          "ath_change_percentage": -50.76423,
          "ath_date": "2017-12-16T00:00:00.000Z",
          "roi": null,
          "last_updated": "2019-11-05T16:00:21.297Z",
          "price_change_percentage_1h_in_currency": 0.359562179648493,
          "price_change_percentage_24h_in_currency": 1.01122340231299,
          "price_change_percentage_7d_in_currency": 1.1170393298306
        },
        "amount": "10"
      },
      {
        "date": "2018-11-11",
        "currency": {
          "id": "binancecoin",
          "symbol": "bnb",
          "name": "Binance Coin",
          "image": "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615",
          "current_price": 16.02,
          "market_cap": 2462630974,
          "market_cap_rank": 8,
          "total_volume": 176703008,
          "high_24h": 16.19,
          "low_24h": 15.8,
          "price_change_24h": 0.106942,
          "price_change_percentage_24h": 0.67197,
          "market_cap_change_24h": 19492090,
          "market_cap_change_percentage_24h": 0.79783,
          "circulating_supply": 153474825,
          "total_supply": 185474825,
          "ath": 31.14,
          "ath_change_percentage": -48.47212,
          "ath_date": "2019-06-22T12:20:21.894Z",
          "roi": null,
          "last_updated": "2019-11-05T16:05:54.961Z",
          "price_change_percentage_1h_in_currency": 0.0477673647414468,
          "price_change_percentage_24h_in_currency": 0.671970224323341,
          "price_change_percentage_7d_in_currency": 3.65748838645832
        },
        "amount": "1"
      }
    ],
    "wallet_value": "5000"
  }
]);
