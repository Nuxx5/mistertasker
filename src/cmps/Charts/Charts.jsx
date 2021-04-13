// import { Component } from 'react'
import { Sparklines, SparklinesLine } from "react-sparklines";
import "./Charts.scss";

export function Charts({ marketPrice, tradeVolume }) {
  return (
    <div className="charts">
      <h2>Market Price (USD)</h2>
      <Sparklines data={marketPrice}>
        <SparklinesLine color="blue" />
      </Sparklines>
      <h2>Trade Volume Per Day</h2>
      <Sparklines data={tradeVolume}>
        <SparklinesLine color="blue" />
      </Sparklines>
    </div>
  );
}
