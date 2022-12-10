import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import JadwalMainContent from "../../components/JadwalPageComponent/JadwalMainContent";
import TambahJadwalComponent from "../../components/JadwalPageComponent/TambahJadwalComponent";
import ProfileMainContent from "../../components/ProfilePageComponent/MainComponent/ProfileMainContent";
import NavbarMobile from "../../components/SectionTop/NavbarMobile";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarCopy from "../../components/Sidebar/Sidebar copy";
import path from "../../utils/path-name";

const CreateNavTemplate = () => {
  const location = useLocation();
  let pageSaatIni;

  if (location.pathname === path.home) {
    // TO DO: Bikin isian/content home page (FINSIHED BY DZIKRI)
    /* pageSaatIni = <HomeMainContent key={0}></HomeMainContent>; */
  } else if (location.pathname === path.survey) {
    // TO DO: Bikin isian/content survey page
    /* pageSaatIni = <SurveyMainContent key={1}></SurveyMainContent>; */
    pageSaatIni = <h1>Survey Mingguan</h1>;
  } else if (location.pathname === path.jadwal) {
    // TO DO: Bikin isian/content jadwal page (IN WORK BY ILHAM)
    pageSaatIni = <JadwalMainContent key={2}></JadwalMainContent>;
  } else if (location.pathname === path.tambahJadwal) {
    // TO DO: Bikin isian/content jadwal page (IN WORK BY ILHAM)
    pageSaatIni = <TambahJadwalComponent key={3}></TambahJadwalComponent>;
  } else if (location.pathname === path.interaksi) {
    // TO DO: Bikin isian/content interaksi page
    /* pageSaatIni = <InteraksiMainContent key={4}></InteraksiMainContent>; */
    pageSaatIni = <h1>Interaksi</h1>;
  } else if (location.pathname === path.tipsNTrick) {
    // TO DO: Bikin isian/content tips&trick page
    /* pageSaatIni = <TipsNTrickMainContent key={5}></TipsNTrickMainContent>; */
    pageSaatIni = <h1>Tips & Trick</h1>;
  } else if (location.pathname === path.profile) {
    // TO DO: Bikin isian/content profile page (FINISHED BY ILHAM)
    pageSaatIni = <ProfileMainContent key={6}></ProfileMainContent>;
  }

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
      <div
        id={pageSaatIni.key === "6" ? "profile-page" : "sidebar-navbar-page"}
      >
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
          className={
            pageSaatIni.key === "6"
              ? "profileContentRightSide"
              : "contentRightSide"
          }
        >
          <NavbarMobile openSidebar={openSidebar}></NavbarMobile>
          {pageSaatIni}
        </div>
      </div>
    </>
  );
};

export default CreateNavTemplate;
