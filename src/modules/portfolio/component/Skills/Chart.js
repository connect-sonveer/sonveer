import React from "react";

function Chart(props) {
  return (
    <div style={{ marginLeft: 0 }}>
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "80%", paddingRight: 0 }}>{props.children}</div>
        <div style={{ width: "40%" }}>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Chart;