import React from "react";
import "./style.css";
import smileIcon from "../../../assets/icons/smile.png";
import ApexChart from "../Chart/chart1";
import ChartKemajuanHubungan from "../Chart/chart2";

const MainContent = () => {
  return (
    <>
      <div className="mainContent">
        {/* card stattus hubungan */}
        <div className="cardStatusHubungan">
          <div>
            <p>Status hubungan</p>
            <p>dengan anak minggu ini</p>
          </div>
          <br />
          <br />
          <div
            className="statusHubungan"
            style={{
              display: "flex",
              width: "340px",
              margin: "auto",
            }}
          >
            <p>Sedang</p>
            <img src={smileIcon} width={40} height={40} alt="happy" />
          </div>
        </div>
        {/* card kemajuan hubungan */}
        <div className="cardKemajuanHubungan">
          <div className="chartKemajuanHubungan">
            <ChartKemajuanHubungan></ChartKemajuanHubungan>
          </div>
        </div>

        {/* card list intraksi */}
        <div className="cardDaftarInteraksi">
          <div style={{ padding: "0 2em" }}>
            <p>Daftar Interaksi</p>
            <hr style={{ marginTop: "-1em" }} />
          </div>

          <div style={{ padding: "0 2em 0 1em" }}>
            <ul style={{ lineHeight: "3em" }}>
              <div
                className="listInteraksi"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <li>Bercanda</li>
                <input type="checkbox" />
              </div>
              <div
                className="listInteraksi"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <li>Ngobrol Kesukaan</li>
                <input style={{ borderRadius: "100px" }} type="checkbox" />
              </div>
              <div
                className="listInteraksi"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <li>Main Tebak Tebakan</li>
                <input type="checkbox" />
              </div>
              <div
                className="listInteraksi"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <li>Bertanya kegiatan anak</li>
                <input type="checkbox" />
              </div>
            </ul>
          </div>
        </div>

        {/* card jumlah interaksi */}
        <div className="cardJumlahInteraksi">
          <div className="chartJumlahInteraksi">
            <ApexChart></ApexChart>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainContent;
