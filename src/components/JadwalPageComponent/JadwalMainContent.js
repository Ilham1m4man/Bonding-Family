/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "../../styles/jadwal-main-comp-style.css";
import Select from "react-select";
/* import { Checkbox } from "antd"; */
import CreateJadwalTemplate from "../../views/templates/CreateJadwalTemplate";
import { useState } from "react";
import useToggle from "../../utils/useToggle";
import dayjs from "dayjs";
import hariPerMinggu from "./DaftarHari";
import { useCallback } from "react";

const JadwalMainContent = () => {
  /* const [checked, setChecked] = useState(false); */
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [week, setWeek] = useState(new Date().getDate());
  const [daftarTgl, setDaftarTgl] = useState([]);
  const [disablePrev, onDisablePrevHandler] = useToggle();
  const [disableNext, onDisableNextHandler] = useToggle();

  const getDataHari = useCallback(() => {
    setDaftarTgl(() => hariPerMinggu(week, selectedMonth));
  }, [week, selectedMonth]);

  React.useEffect(() => {
    const numberOfWeek = Math.ceil(week / 7);
    const curr = new Date();
    curr.setMonth(selectedMonth);
    console.log(
      dayjs(`${curr.getFullYear()}-${curr.getMonth() + 1}`).daysInMonth()
    );

    if (numberOfWeek === 1) {
      curr.setDate(1);
    } else if (numberOfWeek === 2) {
      curr.setDate(8);
    } else if (numberOfWeek === 3) {
      curr.setDate(15);
    } else if (numberOfWeek === 4) {
      curr.setDate(22);
    } else if (numberOfWeek === 5) {
      curr.setDate(29);
    }

    if (
      curr.getMonth() === 1 &&
      dayjs(`${curr.getFullYear()}-${curr.getMonth() + 1}`).daysInMonth() === 29
    ) {
      if (curr.getDate() === 1) {
        onDisablePrevHandler(true);
      } else if (curr.getDate() > 0 && curr.getDate() < 29) {
        onDisableNextHandler(false);
        onDisablePrevHandler(false);
      } else if (curr.getDate() === 29) {
        onDisableNextHandler(true);
      }
    } else if (
      curr.getMonth() === 1 &&
      dayjs(`${curr.getFullYear()}-${curr.getMonth() + 1}`).daysInMonth() === 28
    ) {
      if (curr.getDate() === 1) {
        onDisablePrevHandler(true);
      } else if (curr.getDate() > 0 && curr.getDate() < 22) {
        onDisableNextHandler(false);
        onDisablePrevHandler(false);
      } else if (curr.getDate() === 22) {
        onDisableNextHandler(true);
      }
    } else {
      if (curr.getDate() === 1) {
        onDisablePrevHandler(true);
      } else if (curr.getDate() > 0 && curr.getDate() < 29) {
        onDisableNextHandler(false);
        onDisablePrevHandler(false);
      } else if (curr.getDate() === 29) {
        onDisableNextHandler(true);
      }
    }
    getDataHari();
  }, [getDataHari]);

  const monthOptions = [
    { value: "1", label: "Januari" },
    { value: "2", label: "Februari" },
    { value: "3", label: "Maret" },
    { value: "4", label: "April" },
    { value: "5", label: "Mei" },
    { value: "6", label: "Juni" },
    { value: "7", label: "Juli" },
    { value: "8", label: "Agustus" },
    { value: "9", label: "September" },
    { value: "10", label: "Oktober" },
    { value: "11", label: "November" },
    { value: "12", label: "Desember" },
  ];
  const bulanSaatIni = new Date().getMonth();
  const defaultMonthOption = monthOptions[bulanSaatIni];

  const onBulanChangeHandler = (inputValue) => {
    const _value = inputValue.value;
    const bulanTerpilih = new Date();
    bulanTerpilih.setMonth(_value - 1);

    setSelectedMonth(bulanTerpilih.getMonth());
  };

  /* const onCheckedChangeHandler = (event) => {
    setChecked(event.target.checked);
  }; */

  const onNextHandler = () => {
    setWeek(week + 7);
  };
  const onPrevHandler = () => {
    setWeek(week - 7);
  };

  const customStyles = {
    option: (styles, state) => ({
      ...styles,
      cursor: "pointer",
    }),
    control: (styles) => ({
      ...styles,
      cursor: "pointer",
    }),
  };

  return (
    <>
      <div id="jadwal-page" className="mainContent">
        <div className="page-title">
          <h1>Jadwal</h1>
        </div>
        <div id="jadwal-container">
          {/* <div id="checkbox-container">
            <Checkbox
              className="checkbox-jadwal"
              onChange={onCheckedChangeHandler}
              defaultChecked={checked}
            >
              Atur jadwal sesuai jam istirahat
            </Checkbox>
          </div> */}
          <div className="filter-container">
            <Select
              styles={customStyles}
              className="filter-bulan"
              options={monthOptions}
              defaultValue={defaultMonthOption}
              onChange={onBulanChangeHandler}
            />
            <div className="arrow-container">
              <button
                disabled={disablePrev}
                onClick={onPrevHandler}
                type="button"
                id="prev-arrow"
                className="jadwal-arrow"
              >
                <svg
                  width="22"
                  height="11"
                  viewBox="0 0 22 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 1.5L11.2703 9.5L1 1.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button
                disabled={disableNext}
                onClick={onNextHandler}
                type="button"
                id="next-arrow"
                className="jadwal-arrow"
              >
                <svg
                  width="22"
                  height="11"
                  viewBox="0 0 22 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 1.5L11.2703 9.5L1 1.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div id="jadwal-harian">
            <CreateJadwalTemplate daftarTgl={daftarTgl}></CreateJadwalTemplate>
          </div>
        </div>
      </div>
    </>
  );
};

export default JadwalMainContent;
