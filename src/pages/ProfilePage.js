import React, { useState } from "react";
import WelcomeToApp from "../components/HomepageComponent/Welcome";
import Sidebar from "../components/HomepageComponent/Sidebar/Sidebar";
import SidebarCopy from "../components/HomepageComponent/Sidebar/Sidebar copy";

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

        <div className="profileContent" style={{ margin: "2em 3em", width: "100%" }}>
          <WelcomeToApp openSidebar={openSidebar}></WelcomeToApp>

        </div>
      </div>
    </>
  );
};

export default ProfilePage;
