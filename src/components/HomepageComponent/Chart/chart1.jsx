import React, { useState } from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const [series, useSeries] = useState([
    {
      name: "Interaksi",
      data: [20, 15, 25, 30],
    },
    {
      name: "Target",
      data: [10, 15, 25, 25],
    },
  ]);
  const [options, useOptions] = useState({
    chart: {
      height: 380,
      width: "100%",
      type: "area",
    },
    stroke: {
      curve: "smooth",
    },

    xaxis: {
      categories: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"],
    },
  });

  return (
    <div id="chart">
      <Chart options={options} series={series} type="area" height={250} />
    </div>
  );
};

export default ApexChart;
