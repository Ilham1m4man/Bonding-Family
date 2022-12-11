import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import path from "../../utils/path-name";

const CreateJadwalTemplate = ({ daftarTgl }) => {
  const navigate = useNavigate();

  const deleteLocalData = useCallback((tglTerpilih) => {
    localStorage.removeItem(tglTerpilih);
  }, [])

  useEffect(() => {
    deleteLocalData();
  }, [deleteLocalData]);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const takeDataJudul = (tanggal) => {
    const dataLocalStorage = localStorage.getItem(tanggal);
    const parsedDataLocal = JSON.parse(dataLocalStorage);

    if (parsedDataLocal === null || undefined) {
      return "Tidak ada jadwal";
    } else {
      return parsedDataLocal._judul;
    }
  };

  const takeDataJam = (tanggal) => {
    const dataLocalStorage = localStorage.getItem(tanggal);
    const parsedDataLocal = JSON.parse(dataLocalStorage);

    if (parsedDataLocal === null || undefined) {
      return null
    } else {
      return `${parsedDataLocal._jamMulai}:${parsedDataLocal._menitMulai}`;
    }
  };

  const onPlusClickHandler = (e) => {
    const tglTerpilih = e.currentTarget.getAttribute("data-value");
    navigate(path.tambahJadwal, { state: tglTerpilih });
  };

  const onMinusClickHandler = (e) => {
    const tglTerpilih = e.currentTarget.getAttribute("data-value");
    deleteLocalData(tglTerpilih);
    window.location.reload();
  };

  let dataJadwal;
  return (
    <>
      {daftarTgl.map((tgl, index) => {
        const datanyaJudul = takeDataJudul(tgl.toLocaleDateString("id-ID", options))
        if (datanyaJudul === "Tidak ada jadwal") {
          dataJadwal = (
            <>
              <div className="judul-jam no-schedule">
                <p>{datanyaJudul}</p>
                <div className="no-jam">
                  <p></p>
                </div>
              </div>
              <button
                id="tambah-button"
                className="jadwal-buttons"
                data-value={tgl.toLocaleDateString("id-ID", options)}
                onClick={onPlusClickHandler}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2V34M34 18H2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          );
        } else {
          dataJadwal = (
            <>
              <div className="judul-jam">
                <p>{datanyaJudul}</p>
                <div className="jam-container">
                  <p>{takeDataJam(tgl.toLocaleDateString("id-ID", options))}</p>
                </div>
              </div>
              <button
                id="kurang-button"
                className="jadwal-buttons"
                data-value={tgl.toLocaleDateString("id-ID", options)}
                onClick={onMinusClickHandler}
              >
                <svg
                  width="36"
                  height="4"
                  viewBox="0 0 36 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34 2H2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          );
        }
        return (
          <div key={index} className="tanggal-container">
            <div className="hari-tgl">
              <h3>{tgl.getDate()}</h3>
              <p>{tgl.toLocaleDateString("id-ID", { weekday: "long" })}</p>
            </div>
            {dataJadwal}
          </div>
        );
      })}
    </>
  );
};

export default CreateJadwalTemplate;
