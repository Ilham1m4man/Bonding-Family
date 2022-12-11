/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import ProfileAvatar from "../../assets/icons/Avatar-profile.svg";
import path from "../../utils/path-name";
import "../../styles/navbar-style.css";

const ProfileIcon = () => {
  return (
    <>
      <Link to={path.profile} className="profile-icon">
        <img
          className="profileOnMobileWidth"
          src={ProfileAvatar}
          alt="profile picture"
        />
      </Link>
    </>
  );
};

export default ProfileIcon;
