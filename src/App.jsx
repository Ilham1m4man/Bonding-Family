import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./views/pages/ProfilePage";
import JadwalPage from "./views/pages/JadwalPage";
import "./main.css";

const BondingFams = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/jadwal" element={<JadwalPage />} />
        </Routes>
      </main>
    </>
  );
};
export default BondingFams;
