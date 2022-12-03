import React, { useState } from "react";
import MainContent from "../components/HomepageComponent/MainComponent/Main";
import WelcomeToApp from "../components/HomepageComponent/SectionTop/Welcome";
import Sidebar from "../components/HomepageComponent/Sidebar/Sidebar";
import SidebarCopy from "../components/HomepageComponent/Sidebar/Sidebar copy";

const HomePage = () => {
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

        <div
          className="mainContentRightSide"
          style={{ margin: "2em 3em", width: "100%" }}
        >
          <WelcomeToApp openSidebar={openSidebar}></WelcomeToApp>
          <br />

          <MainContent></MainContent>
        </div>
      </div>
    </>
  );
};

export default HomePage;
