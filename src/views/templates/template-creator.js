import React, { useState } from "react";
import NavbarMobile from "../../components/SectionTop/NavbarMobile";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarCopy from "../../components/Sidebar/Sidebar copy";

const CreateNavTemplate = () => {
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
      <div id="profile-page">
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

        <div className="contentRightSide">
          <NavbarMobile openSidebar={openSidebar}></NavbarMobile>
        </div>
      </div>
    </>
  );
};

export default CreateNavTemplate;
