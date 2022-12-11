import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProfilePage from "./views/pages/ProfilePage";
import JadwalPage from "./views/pages/JadwalPage";
import HomePage from "./views/pages/Homepage";
import InteraksiPage from "./views/pages/Interaksi";
import LoginPage from "./views/pages/Loginpage";
import SignUp from "./views/pages/SignUp";
import TambahJadwalPage from "./views/pages/TambahJadwalPage";
import Surveypage from "./views/pages/Survey";
import "./main.css";
import path from "./utils/path-name";

const BondingFams = () => {
  const navigate = useNavigate();
  const getAccesstoken = localStorage.getItem("token-bonding-family");
  useEffect(() => {
    if (!getAccesstoken) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/interaksi" element={<InteraksiPage />} />
          <Route path="/jadwal" element={<JadwalPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path={path.tambahJadwal} element={<TambahJadwalPage />} />
          <Route path="/survey" element={<Surveypage />} />
        </Routes>
      </main>
    </>
  );
};
export default BondingFams;
