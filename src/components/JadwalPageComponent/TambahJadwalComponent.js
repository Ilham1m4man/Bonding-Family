import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";
import path from "../../utils/path-name";
import useInput from "../../utils/useInput";
import ArrowBackButton from "./arrow-back-button";

const TambahJadwalComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [judul, onJudulChangHandler] = useInput();
  const [catatan, onCatatanChangHandler] = useInput();
  const [jamMulai, onJamMulaiChangHandler] = useInput("12");
  const [menitMulai, onMenitMulaiChangHandler] = useInput("00");
  const [isMulaiActive, setMulaiActiveChangHandler] = useState("true");
  const [jamSelesai, onJamSelesaiChangHandler] = useInput("12");
  const [menitSelesai, onMenitSelesaiChangHandler] = useInput("15");
  const [isSelesaiActive, setSelesaiActiveChangHandler] = useState("false");
  const [activedButton, setActivedButtonChangeHandler] = useState("jam mulai");
  const [messageApi, contextHolder] = message.useMessage();
  const tglTerpilih = location.state;

  const whatButton = useCallback(() => {
    return activedButton;
  }, [activedButton]);

  const saveToLocal = useCallback(() => {
    const dataJadwal = {
      _judul: judul,
      _catatan: catatan,
      _jamMulai: jamMulai,
      _jamSelesai: jamSelesai,
      _menitMulai: menitMulai,
      _menitSelesai: menitSelesai,
      _tglnya: tglTerpilih,
    };

    localStorage.setItem(dataJadwal._tglnya, JSON.stringify(dataJadwal));
  }, [
    catatan,
    jamMulai,
    jamSelesai,
    judul,
    menitMulai,
    menitSelesai,
    tglTerpilih,
  ]);

  useEffect(() => {
    whatButton();
    saveToLocal();
  }, [whatButton, saveToLocal]);

  let inputJamIni;
  let inputMenitIni;
  let indicatorButton;
  if (whatButton() === "jam mulai") {
    indicatorButton = "Mulai";
    inputJamIni = {
      ganti: onJamMulaiChangHandler,
      datanya: jamMulai,
    };

    inputMenitIni = {
      ganti: onMenitMulaiChangHandler,
      datanya: menitMulai,
    };
  } else {
    indicatorButton = "Selesai";
    inputJamIni = {
      ganti: onJamSelesaiChangHandler,
      datanya: jamSelesai,
    };
    inputMenitIni = {
      ganti: onMenitSelesaiChangHandler,
      datanya: menitSelesai,
    };
  }

  const onClickBackHandler = () => {
    localStorage.removeItem(tglTerpilih);
    navigate(path.jadwal);
  };

  const onJamMulaiClickHandler = (e) => {
    e.preventDefault();
    setMulaiActiveChangHandler("true");
    setSelesaiActiveChangHandler("false");
    setActivedButtonChangeHandler("jam mulai");
  };

  const onJamSelesaiClickHandler = (e) => {
    e.preventDefault();
    setSelesaiActiveChangHandler("true");
    setMulaiActiveChangHandler("false");
    setActivedButtonChangeHandler("jam selesai");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    messageApi.open({
      type: "success",
      content: "Jadwal berhasil disimpan",
    });

    setTimeout(() => {
      navigate(path.jadwal);
    }, 2000);
  };

  return (
    <>
      <div id="tambah-jadwal-page" className="mainContent">
        <div /* className="page-title" */ id="tambah-jadwal-title-container">
          <ArrowBackButton
            onClickBackHandler={onClickBackHandler}
          ></ArrowBackButton>
          <h1>Tambah Jadwal</h1>
        </div>
        <div id="tambah-jadwal-container">
          <h3>{tglTerpilih}</h3>
          <div id="tambah-jadwal-component">
            <form onSubmit={onSubmitHandler} id="form-tambah-jadwal">
              <input
                className="input-form-jadwal"
                id="judul-jadwal"
                type="text"
                placeholder="Judul"
                onChange={onJudulChangHandler}
                value={judul}
              />
              <input
                className="input-form-jadwal"
                id="catatan-jadwal"
                type="text"
                placeholder="Catatan"
                onChange={onCatatanChangHandler}
                value={catatan}
              />

              <button
                className="display-jam"
                id="button-jam-mulai"
                onClick={onJamMulaiClickHandler}
                is-active={isMulaiActive}
              >
                {jamMulai}:{menitMulai}
              </button>

              <div id="display-arrow-right">
                <svg
                  id="arrow-right-icon"
                  width="66"
                  height="38"
                  viewBox="0 0 66 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5V16.5ZM64.7678 20.7678C65.7441 19.7915 65.7441 18.2085 64.7678 17.2322L48.8579 1.32233C47.8816 0.34602 46.2986 0.34602 45.3223 1.32233C44.346 2.29864 44.346 3.88155 45.3223 4.85786L59.4645 19L45.3223 33.1421C44.346 34.1184 44.346 35.7014 45.3223 36.6777C46.2986 37.654 47.8816 37.654 48.8579 36.6777L64.7678 20.7678ZM3 21.5H63V16.5H3V21.5Z"
                    fill="#333333"
                  />
                </svg>
              </div>

              <button
                className="display-jam"
                id="button-jam-selesai"
                onClick={onJamSelesaiClickHandler}
                is-active={isSelesaiActive}
              >
                {jamSelesai}:{menitSelesai}
              </button>

              <div id="indicator-button">
                <p>{indicatorButton}</p>
              </div>

              <input
                className="input-form-jadwal"
                id="input-jam-jadwal"
                type="number"
                placeholder={inputJamIni.datanya}
                onChange={inputJamIni.ganti}
                value={inputJamIni.datanya}
                max="23"
                required
              />
              <p id="titik-dua">:</p>
              <input
                className="input-form-jadwal"
                id="input-menit-jadwal"
                type="number"
                placeholder={inputMenitIni.datanya}
                onChange={inputMenitIni.ganti}
                value={inputMenitIni.datanya}
                max="59"
                required
              />
            </form>
            <div id="buttons-of-tambah-jadwal">
              <button
                type="button"
                className="tambah-jadwal-buttons"
                id="batal-jadwal-button"
                onClick={onClickBackHandler}
              >
                Batal
              </button>
              {contextHolder}
              <button
                type="submit"
                className="tambah-jadwal-buttons"
                id="simpan-jadwal-button"
                form="form-tambah-jadwal"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TambahJadwalComponent;
