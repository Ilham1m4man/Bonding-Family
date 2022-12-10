import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./style.css";
const DurasiCard = () => {
  const [series, useSeries] = useState([
    {
      name: "Jam",
      data: [
        {
          x: "Senin",
          y: "15 : 00",
        },
        {
          x: "Selasa",
          y: "5 : 00",
        },
        {
          x: "Rabu",
          y: "5 : 00",
        },
        {
          x: "Kamis",
          y: "5 : 00",
        },
        {
          x: "Jumat",
          y: "5 : 00",
        },
      ],
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
    yaxis: {
      categories: [],
    },
  });
  return (
    <>
      <div className="durasiCard">
        <h1 className="titleCardSering">Durasi Interaksi</h1>
        <div id="chartDurasi">
          <Chart options={options} series={series} type="area" height={250} />
        </div>
      </div>
    </>
  );
};

export default DurasiCard;
