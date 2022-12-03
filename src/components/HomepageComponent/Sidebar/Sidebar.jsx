import React from "react";
import LogoBonding from "../../../assets/Images/Logo-Bonding-Family.svg";
import InteraksiIcon from "../../../assets/icons/Interaksi-Icon.svg";
import JadwalIcon from "../../../assets/icons/Jadwal-Icon.svg";
import SurveyIcon from "../../../assets/icons/Survey-Icon.svg";
import TipsTrik from "../../../assets/icons/Tips-&-Trik-icon.svg";
import ProfileAvatar from "../../../assets/icons/Avatar-profile.svg";

import "./styleSidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logoBondingFams">
          <div className="logo">
            <img src={LogoBonding} alt="logo bonding family"></img>
          </div>
          <p className="titleLogo">Bonding Family</p>
        </div>
        <section className="sidebarFitur">
          <div>
            <img src={SurveyIcon} alt="survey icon" />
            <p>Survey</p>
          </div>
          <br />
          <div>
            <img src={JadwalIcon} alt="jadwal icon" />
            <p>Jadwal</p>
          </div>
          <br />
          <div>
            <img src={InteraksiIcon} alt="Interaksi icon" />
            <p>Interaksi</p>
          </div>
          <br />
          <div>
            <img src={TipsTrik} alt="tips dan trik icon" />
            <p>Tips & Trik</p>
          </div>
          <br />
        </section>
        <section className="profileName">
          <hr></hr>
          <div>
            <img src={ProfileAvatar} alt="profile picture" />
            <h3>Dzikri Ardafi</h3>
          </div>
        </section>
      </div>
    </>
  );
};
export default Sidebar;
