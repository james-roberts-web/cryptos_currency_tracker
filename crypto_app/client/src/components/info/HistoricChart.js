import React from 'react';
import { Chart } from "react-google-charts";

const HistoricChart = (props) => {

  const options = {
    title: "Last Month",
    width:500,
    hAxis: { title: "Date"},
    vAxis: { title: "" },
    legend: "none"
  };


  // const priceData = props.historicData.prices
  //
  // priceData.unshift(['Date', 'price']);

  const priceData = [['date','price'],[56546,3456],[34563,3456]]

  const mCapData = [['date','cap'],[56546,3456],[34563,3456]]

  const volumeData = [['date','volume'],[56546,3456],[34563,3456]]


  const PriceChart = () => {
    return (
      <Chart
      chartType="LineChart"
      data={priceData}
      options={options}
      width="30%"
      height="100px"
      legendToggle
      />
    );
  };

  const MarketCapChart = () => {
    return (
      <Chart
      chartType="LineChart"
      data={mCapData}
      options={options}
      width="30%"
      height="100px"
      legendToggle
      />
    );
  };

  const VolumeChart = () => {
    return (
      <Chart
      chartType="LineChart"
      data={volumeData}
      options={options}
      width="30%"
      height="00px"
      legendToggle
      />
    );
  };
  if (!props.currency) return null;
  return(
    <div>
    <PriceChart />
    <MarketCapChart />
    <VolumeChart />
    </div>
  )
}



export default HistoricChart;
