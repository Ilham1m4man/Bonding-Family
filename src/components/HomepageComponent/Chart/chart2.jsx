import React, { useState } from "react";

const ChartKemajuanHubungan = () => {
  const value = {
    Membaik: {
      name: "Membaik",
      value: 100,
    },
    Netral: {
      name: "Netral",
      value: 50,
    },
    Memburuk: {
      name: "Memburuk",
      value: 10,
    },
  };
  const [valueBar, setValueBar] = useState(value);

  return (
    <>
      <div className="titleChard">
        <>Chart kemajuan hubungan</>
      </div>
      <div style={{ display: "flex", marginTop: "-1.5em" }}>
        <div className="yAxis">
          <h3>Membaik</h3>
          <h3>Netral</h3>
          <h3 className="memburukBar">Memburuk</h3>
        </div>
        <div
          className="xAxis"
          style={{
            marginTop: "1.5em",
            display: "grid",
            marginLeft: "1em",
            gridTemplateColumns: "repeat(5, 5em)",
          }}
        >
          <div>
            <div className="bar">
              <progress
                style={{ width: "170px", height: "25px" }}
                value={valueBar.Netral.value}
                color={"red"}
                max={100}
              ></progress>
            </div>

            <h3>Senin</h3>
          </div>
          <div>
            <div className="bar">
              <progress
                style={{ width: "170px", height: "25px" }}
                value={valueBar.Membaik.value}
                color={"red"}
                max={100}
              ></progress>
            </div>

            <h3>Selasa</h3>
          </div>

          <div>
            <div className="bar">
              <progress
                style={{ width: "170px", height: "25px" }}
                value={valueBar.Memburuk.value}
                color={"red"}
                max={100}
              ></progress>
            </div>

            <h3>Rabu</h3>
          </div>

          <div>
            <div className="bar">
              <progress
                style={{ width: "170px", height: "25px" }}
                value={valueBar.Netral.value}
                color={"red"}
                max={100}
              ></progress>
            </div>

            <h3>Kamis</h3>
          </div>

          <div>
            <div className="bar">
              <progress
                style={{ width: "170px", height: "25px" }}
                value={valueBar.Memburuk.value}
                color={"red"}
                max={100}
              ></progress>
            </div>

            <h3>Jumat</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartKemajuanHubungan;
