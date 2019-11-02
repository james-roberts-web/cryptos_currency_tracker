import React from 'react';
import { Chart } from "react-google-charts";

const SummaryChart = (props) => {


  const options = {
    title: "Top 10 Cryptocurrencies",
    width:1000,
    hAxis: { title: "CryptoCurrency"},
    vAxis: { title: "Percent Change This Hour" },
    legend: "none",
    columnchart: {
      negativeColor: { strokeWidth: 0, fill: '#a52714' }, // red
      positiveColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
    },
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
      width="80%"
      height="400px"
      legendToggle
      />
    );
  };



  return(
    <div>
    <SummaryChart />
    </div>
  )
}

export default SummaryChart;
