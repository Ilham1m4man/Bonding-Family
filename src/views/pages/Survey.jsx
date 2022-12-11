import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarCopy from "../../components/Sidebar/Sidebar copy";
import NavbarMobile from "../../components/SectionTop/NavbarMobile";
import SurveyMingguan from "../../components/SurveyPageComponent/SurveyMingguan";
import ListMinggu from "../../components/SurveyPageComponent/ListMinggu";
const Survey = () => {
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
        <div className="contentRightSide">
          <NavbarMobile openSidebar={openSidebar}></NavbarMobile>
          <SurveyMingguan></SurveyMingguan>
          <ListMinggu></ListMinggu>
        </div>
      </div>
    </>
  );
};
export default Survey;
