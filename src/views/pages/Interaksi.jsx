import React from "react";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarCopy from "../../components/Sidebar/Sidebar copy";
import SeringCard from "../../components/InteraksiComponent/SeringCard";
import JarangCard from "../../components/InteraksiComponent/JarangCard";
import DurasiCard from "../../components/InteraksiComponent/DurasiCard";
import NavbarMobile from "../../components/SectionTop/NavbarMobile";
const InteraksiPage = () => {
  const [isSidebar, setSidebar] = useState(false);
  const openSidebar = () => {
    setSidebar(true);
    document.getElementById("sidebar").style.display = "block";
  };

  const closeSidebar = () => {
    setSidebar(false);
    document.getElementById("sidebar").style.display = "none";
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        {isSidebar === false ? (
          isSidebar === false
        ) : (
          <div>
            <Sidebar closeSidebar={closeSidebar}></Sidebar>
          </div>
        )}

        {isSidebar === true ? (
          isSidebar === true
        ) : (
          <div>
            <SidebarCopy></SidebarCopy>
          </div>
        )}
        <div className="cardInteraksiPage">
          <NavbarMobile openSidebar={openSidebar}></NavbarMobile>
          <SeringCard></SeringCard>
          <JarangCard></JarangCard>
          <DurasiCard></DurasiCard>
        </div>
      </div>
    </>
  );
};

export default InteraksiPage;
