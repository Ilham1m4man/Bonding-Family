import React, { useState } from "react";
import MainContent from "../../components/ProfilePageComponent/MainComponent/Main";
import NavbarMobile from "../../components/SectionTop/NavbarMobile";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarCopy from "../../components/Sidebar/Sidebar copy";

const ProfilePage = () => {
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

        <div className="profileContentRightSide">
          <NavbarMobile openSidebar={openSidebar}></NavbarMobile>
          <MainContent></MainContent>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;