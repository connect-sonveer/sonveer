import React from "react";
import Chart from "./Chart";
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Skillset(props) {
  return (
    <div className="col-md-3">
      <Chart label="Default">
        <CircularProgressbar
          value={props.value}
          text={`${props.value}%`}
          styles={buildStyles({
            textColor: "#949090",
            textSize: "24px"
          })}
        />
      </Chart>
      <div className="round">
        <h4> {props.name}</h4>
        <small>{props.level}</small>
      </div>
    </div>
  );
}

export default Skillset;
