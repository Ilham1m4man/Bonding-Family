import React from "react";
import Notif from "./Notif";
import HamburgerIcon from "../../../assets/icons/Hamburger-Icon.svg";
import "./main.css";
const WelcomeToApp = ({ openSidebar }) => {
  return (
    <>
      <div className="sectionTop" id="sectionTop-homePage">
        <div className="welcomText">
          <h2>Hi Dzikri Ardafi,</h2>
          <h1>Welcome 👋</h1>
        </div>
        <div className="hamburgerIcon" id="hamburgerIcon">
          <img onClick={openSidebar} src={HamburgerIcon} alt="Menu" />
        </div>
        <div>
          <Notif></Notif>
        </div>
      </div>
    </>
  );
};

export default WelcomeToApp;
