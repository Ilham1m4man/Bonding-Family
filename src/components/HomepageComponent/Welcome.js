import React from "react";
import HamburgerIcon from "../../assets/icons/Hamburger-Icon.svg";
import "../../main.css"

const WelcomeToApp = ({ openSidebar }) => {
  return (
    <>
      <div className="sectionTop">
        <div className="hamburgerIcon" id="hamburgerIcon">
          <img onClick={openSidebar} src={HamburgerIcon} alt="Menu" />
        </div>
      </div>
    </>
  );
};

export default WelcomeToApp;
