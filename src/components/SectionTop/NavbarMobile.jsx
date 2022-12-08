import React from "react";
import HamburgerIcon from "../../assets/icons/Hamburger-Icon.svg";
import Notif from "./Notif";
import ProfileIcon from "./ProfileIcon";
import "../../styles/navbar-style.css";

const NavbarMobile = ({ openSidebar }) => {
  return (
    <>
      <div className="sectionTop">
        <div className="hamburgerIcon" id="hamburgerIcon">
          <img onClick={openSidebar} src={HamburgerIcon} alt="Menu" />
        </div>
        <div className="notif-profile">
          <Notif></Notif>

          <ProfileIcon></ProfileIcon>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
