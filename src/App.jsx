import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";

function BondingFams() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}
export default BondingFams;
