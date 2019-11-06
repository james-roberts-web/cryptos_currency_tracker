import React from 'react';
import { Chart } from "react-google-charts";
import './smallChart.css'

const HistoricChart = (props) => {

  const priceOptions = {
    title: "Price Last Month",
    width:500,
    hAxis: { title: "Date"},
    vAxis: { title: "Price" },
    legend: "none"
  };

  const mCapOptions = {
    title: "MarketCap Last Month",
    width:500,
    hAxis: { title: "Date"},
    vAxis: { title: "MarketCap" },
    legend: "none"
  };

  const volumeOptions = {
    title: "Volume Last Month",
    width:500,
    hAxis: { title: "Date"},
    vAxis: { title: "Volume" },
    legend: "none"
  };

  const chartPriceData = [['Date', 'Price'], ...props.historicData.prices];

  const chartMCapData =[['Date', 'Cap'], ...props.historicData.marketCaps];

  const chartVolumeData =[['Date', 'Volume'], ...props.historicData.totalVolumes];

  const PriceChart = () => {
    return (
      <Chart
      chartType="LineChart"
      data={chartPriceData}
      options={priceOptions}
      width="25%"
      height="150px"
      legendToggle
      />
    );
  };

  const MarketCapChart = () => {
    return (
      <Chart
      chartType="LineChart"
      data={chartMCapData}
      options={mCapOptions}
      width="25%"
      height="150px"
      legendToggle
      />
    );
  };

  const VolumeChart = () => {
    return (
      <Chart
      chartType="LineChart"
      data={chartVolumeData}
      options={volumeOptions}
      width="25%"
      height="150px"
      legendToggle
      />
    );
  };

  if (!props.currency) return null;
  return(
    <div className="smallChart">
    <PriceChart />
    <MarketCapChart />
    <VolumeChart />
    </div>
  )
}



export default HistoricChart;
