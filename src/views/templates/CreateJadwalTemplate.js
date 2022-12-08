import React from "react";

const CreateJadwalTemplate = ({ dataHari }) => {
  
  return (
    <>
      <div className="tanggal-container">
        <div className="hari-tgl">
          <h3>26</h3>
          <p>Senin</p>
        </div>
        <p>Vidcall adek</p>
        <div className="jam-container">
          <p>12:00</p>
        </div>
        <button id="kurang-button">-</button>
        <button id="tambah-button">+</button>
      </div>
    </>
  );
};

export default CreateJadwalTemplate;
