import React from 'react';
import { Chart } from "react-google-charts";

const SummaryChart = (props) => {

  const options = {
    title: "Top 10 Cryptocurrencies",
    hAxis: { title: "CryptoCurrency"},
    vAxis: { title: "Percent Change This Hour" },
    width:1000,
    legend: "none"
  };

  const data = props.cryptos.slice(0,10).map((coin) => {
    return [coin.name, coin.price_change_percentage_1h_in_currency]
  })
  data.unshift(['Name', 'change%']);

  const SummaryChart = () => {
    return (
      <Chart
      chartType="ColumnChart"
      data={data}
      options={options}
      width="100%"
      height="400px"
      legendToggle
      />
    );
  };



  return(
    <div >
    <SummaryChart />
    </div>
  )
}

export default SummaryChart;
