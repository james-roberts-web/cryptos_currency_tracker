import React from 'react';
import { Chart } from "react-google-charts";

const SummaryChart = (props) => {


  const options = {
    title: "Top 10 Cryptocurrencies",
    // hAxis: { title: "Age", viewWindow: { min: 0, max: 100 } },
    // vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
    legend: "none",
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
      risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
    },
  };

  // const data = () => {
  //   const smallData = props.cryptos.slice(0,10)
    const data = props.cryptos.slice(0,10).map((coin) => {
      return [coin.name, coin.price_change_percentage_1h_in_currency]
    })
    data.unshift(['Name', 'change%'])
    console.log(data);




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
