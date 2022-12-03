import React from "react";
import NotifIcon from "../../../assets/icons/Notif-icon.svg";
import "./style.css";
const Notif = () => {
  return (
    <>
      <div className="notif">
        <img src={NotifIcon} width={50} alt="notifikasi" />

        <p>2</p>
      </div>
    </>
  );
};

export default Notif;
