import React from "react";
import Notif from "./Notif";
import "./style.css";

const WelcomeToApp = () => {
  return (
    <>
      <div className="sectionTop">
        <div>
          <h2>Hi Dzikri Ardafi,</h2>
          <h1>Welcome Back </h1>
        </div>
        <div>
          <Notif></Notif>
        </div>
      </div>
    </>
  );
};

export default WelcomeToApp;
