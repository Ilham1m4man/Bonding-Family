import React from "react";
import NotifIcon from "../../../assets/icons/Notif-icon.svg";
import ProfileAvatar from "../../../assets/icons/Avatar-profile.svg";

import "./main.css";
const Notif = () => {
  return (
    <>
      <div className="notif">
        <img src={NotifIcon} width={50} alt="notifikasi" />
        <p>2</p>
        <img
          className="profileOnMobileWidth"
          src={ProfileAvatar}
          alt="profile picture"
        />
      </div>
    </>
  );
};

export default Notif;
