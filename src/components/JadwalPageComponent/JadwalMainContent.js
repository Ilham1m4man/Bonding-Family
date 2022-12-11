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
import Select from "react-select";
/* import { Checkbox } from "antd"; */
import CreateJadwalTemplate from "../../views/templates/CreateJadwalTemplate";
import { useState } from "react";
import useToggle from "../../utils/useToggle";
import dayjs from "dayjs";
import hariPerMinggu from "./DaftarHari";
import { useCallback } from "react";

const JadwalMainContent = () => {
  return (
    <>
      <div id="jadwal-container" className="mainContent">
        <h1>Jadwal</h1>
      </div>
    </>
  );
};

export default JadwalMainContent;
