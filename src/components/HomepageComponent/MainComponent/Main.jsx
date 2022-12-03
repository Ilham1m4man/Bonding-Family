import React from "react";
import "./style.css";
import smileIcon from "../../../assets/icons/smile.png";
import ApexChart from "../Chart/chart1";

const MainContent = () => {
  return (
    <>
      <div className="mainContent">
        <div className="cardStatusHubungan">
          <div>
            <p>Status hubungan1</p>
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

        <div className="cardKemajuanHubungan">
          <div className="chartKemajuanHubungan">
            <ApexChart></ApexChart>
          </div>
        </div>

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
