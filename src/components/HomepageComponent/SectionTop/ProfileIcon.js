import React from "react";
import ProfileAvatar from "../../../assets/icons/Avatar-profile.svg";
import "./navbar-style.css";

const ProfileIcon = () => {
  return (
    <>
      <div className="profile-icon">
        <img className="profileOnMobileWidth" src={ProfileAvatar} alt="profile picture"/>
      </div>
    </>
  );
};

export default ProfileIcon;
