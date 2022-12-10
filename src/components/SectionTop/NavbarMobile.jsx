import React from "react";
import HamburgerIcon from "../../assets/icons/Hamburger-Icon.svg";
import Notif from "./Notif";
import ProfileIcon from "./ProfileIcon";
import "../../styles/navbar-style.css";
import { useLocation } from "react-router-dom";
import path from "../../utils/path-name";

const NavbarMobile = ({ openSidebar }) => {
  const location = useLocation();
  let judulPage;

  if (location.pathname === path.survey) {
    judulPage = <h1>Survey Mingguan</h1>;
  } else if (location.pathname === path.jadwal) {
    judulPage = <h1>Jadwal</h1>;
  } else if (location.pathname === path.interaksi) {
    judulPage = <h1>Interaksi</h1>;
  } else if (location.pathname === path.tipsNTrick) {
    judulPage = <h1>Tips & Trik</h1>;
  } else if (location.pathname === path.tambahJadwal) {
    judulPage = <h1>Tambah Jadwal</h1>;
  }

  return (
    <>
      <div className="sectionTop">
        <div className="hamburgerIcon" id="hamburgerIcon">
          <img onClick={openSidebar} src={HamburgerIcon} alt="Menu" />
        </div>
        {judulPage}
        <div className="notif-profile">
          <Notif></Notif>
          <ProfileIcon></ProfileIcon>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
