import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";
import "./main.css";

const BondingFams = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </>
  );
};
export default BondingFams;
