import React from "react";
import "../../styles/jadwal-main-comp-style.css";
import Select from "react-select";
import { Checkbox } from "antd";
import CreateJadwalTemplate from "../../views/templates/CreateJadwalTemplate";
import { useState } from "react";

/* console.log(new Date().toLocaleDateString("id-ID", { weekday: "long" })); */
/* const tanggalSekarang = */
/* 
var curr = new Date(); // get current date

var first = curr.getDate() - curr.getDay();
var firstday = new Date(curr.setDate(first + 1)).toString();
for (var i = 1; i < 6; i++) {
  var next = new Date(curr.getTime());
  next.setDate(first + i);
  console.log(
    next.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
} */
/* console.log(new Date(2022, 1)); */
/* Date.prototype.getMonthWeek = function(){
  var firstDay = new Date(this.getFullYear(), this.getMonth(), 1).getDay();
  console.log("firstday " + firstDay);
  return Math.ceil((this.getDate() + firstDay)/7);
}
console.log(new Date().getMonthWeek()); */

/* console.log(dayjs().day()); */

/* console.log(Math.ceil(new Date().getDate() / 7)); */

const JadwalMainContent = () => {
  const [checked, setChecked] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

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

  const weekOptions = [
    { value: "1", label: "Minggu 1" },
    { value: "2", label: "Minggu 2" },
    { value: "3", label: "Minggu 3" },
    { value: "4", label: "Minggu 4" },
  ];
  const defaultWeekOption = weekOptions[0];

  const onBulanChangeHandler = (inputValue) => {
    const _value = inputValue.value;
    const bulanTerpilih = new Date();
    bulanTerpilih.setMonth(_value - 1);

    setSelectedMonth(bulanTerpilih.getMonth());
  };

  /* for (let i = 1; i < 6; i++) { */
    const minggu = new Date();
    minggu.setMonth(2);
    minggu.setDate(1);
    

    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };
  console.log(minggu.toLocaleDateString("id-ID", options));

  const onMingguChangeHandler = () => {

    console.log(selectedMonth);
  };

  const onCheckedChangeHandler = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div id="jadwal-page" className="mainContent">
        <div id="jadwal-container">
          <Checkbox
            id="checkbox"
            onChange={onCheckedChangeHandler}
            defaultChecked={checked}
          >
            Atur jadwal sesuai jam istirahat
          </Checkbox>
          <div className="filter-container">
            <Select
              className="filter-bulan"
              options={monthOptions}
              defaultValue={defaultMonthOption}
              onChange={onBulanChangeHandler}
            />

            <Select
              className="filter-minggu"
              options={weekOptions}
              defaultValue={defaultWeekOption}
              onChange={onMingguChangeHandler}
            />
          </div>
          <div id="jadwal-harian">
            <CreateJadwalTemplate></CreateJadwalTemplate>
          </div>
        </div>
      </div>
    </>
  );
};

export default JadwalMainContent;
