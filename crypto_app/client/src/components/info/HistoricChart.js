import React from 'react';
import { Chart } from "react-google-charts";
import './smallChart.css'

const HistoricChart = (props) => {

  const priceOptions = {
    title: "Price Last Month",
    width:200,
    hAxis: { title: "Date"},
    vAxis: { title: "Price" },
    legend: "none"
  };

  const mCapOptions = {
    title: "MarketCap Last Month",
    width:200,
    hAxis: { title: "Date"},
    vAxis: { title: "MarketCap" },
    legend: "none"
  };

  const volumeOptions = {
    title: "Volume Last Month",
    width:200,
    hAxis: { title: "Date"},
    vAxis: { title: "Volume" },
    legend: "none"
  };


  // const priceData = props.historicData.map((item) => {
  //   return [item]
  // })
  // priceData.unshift(['Date', 'price']);

 const priceData = [['date','cap'],[56546,3456],[34563,3456],[9,345]]

  const mCapData = [['date','cap'],[56546,3456],[34563,3456],[1,9999]]

  const volumeData = [['date','volume'],[56546,3456],[34563,3456],[100,23]]


  const PriceChart = () => {
    return (
      <Chart
      chartType="LineChart"
      data={priceData}
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
      data={mCapData}
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
      data={volumeData}
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
