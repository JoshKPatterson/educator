// Import React
import React from "react";

// Import Libraries
import { Pie } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

// Chart Component
const Chart = ({ data }) => {
  return (
    <div className="chart">
      <Pie
        data={data}
        options={{
          plugins: {
            datalabels: {
              color: "#FFFFFF",
              font: {
                weight: "bold",
                size: "18",
              },
            },
          },
          legend: {
            display: false
          }
        }}
      />
    </div>
  );
};

export default Chart;
