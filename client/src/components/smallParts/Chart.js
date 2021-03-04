// Import React
import React from "react";

// Import Libraries
import { Pie } from "react-chartjs-2";
// import "chartjs-plugin-datalabels";

// Chart Component
const Chart = ({ data }) => {
  return (
    <div className="chart">
      <Pie
      width={150}
      height={300}
        data={data}
        options={{
          // plugins: {
          //   datalabels: {
          //     color: "#FFFFFF",
          //     font: {
          //       weight: "bold",
          //       size: "18",
          //     },
          //     formatter: function(value, context) {
          //       return `${context.chart.data.labels[context.dataIndex]}\n ${value}`;
          //   }
          //   },
          // },
          legend: {
            display: true,
            position: 'top'
          },
          maintainAspectRatio: false,
          responsive: true
        }}
      />
    </div>
  );
};

export default Chart;
