/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ProfileAvatar from "../../assets/icons/Avatar-profile.svg";
import "../../styles/navbar-style.css";

const ProfileIcon = () => {
  return (
    <>
      <button className="profile-icon">
        <img className="profileOnMobileWidth" src={ProfileAvatar} alt="profile picture"/>
      </button>
    </>
  );
};

export default ProfileIcon;
