import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./views/pages/ProfilePage";
import JadwalPage from "./views/pages/JadwalPage";
import TambahJadwalPage from "./views/pages/TambahJadwalPage";
import "./main.css";
import path from "./utils/path-name";

const BondingFams = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path={path.profile} element={<ProfilePage />} />
          <Route path={path.jadwal} element={<JadwalPage />} />
          <Route path={path.tambahJadwal} element={<TambahJadwalPage />} />
        </Routes>
      </main>
    </>
  );
};
export default BondingFams;
