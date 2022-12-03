import React from "react";
import MainContent from "../components/HomepageComponent/MainComponent/Main";
import WelcomeToApp from "../components/HomepageComponent/SectionTop/Welcome";
import Sidebar from "../components/HomepageComponent/Sidebar/Sidebar";

const HomePage = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <Sidebar></Sidebar>
        </div>
        <div style={{ margin: "2em 3em", width: "100%" }}>
          <WelcomeToApp></WelcomeToApp>
          <br />
          <MainContent></MainContent>
        </div>
      </div>
    </>
  );
};

export default HomePage;
