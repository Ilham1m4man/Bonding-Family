import React, { useEffect, useState } from "react";
import LogoBonding from "../../../assets/Images/Logo-Bonding-Family.svg";
import ProfileAvatar from "../../../assets/icons/Avatar-profile.svg";
import closeIconSidebar from "../../../assets/icons/close-icon.png";
import "./styleSidebar.css";
const Sidebar = ({ closeSidebar }) => {
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="logo">
          <aside className="closeSidebarSection">
            <div className="closeSidebar">
              <div>{/*  */}</div>
              <img
                onClick={closeSidebar}
                id="closeSidebar"
                src={closeIconSidebar}
                alt="close sidebar"
              />
            </div>
          </aside>
          <img src={LogoBonding} alt="logo bonding family"></img>
        </div>
        <section className="sidebarFitur">
          <div className="iconFiturSidebar">
            <svg width="32" height="42" viewBox="0 0 32 42">
              <path
                fill="currentColor"
                d="M24 20.3538V22.6142C24 23.1471 23.55 23.583 23 23.583H9C8.45 23.583 8 23.1471 8 22.6142V20.3538C8 19.821 8.45 19.3851 9 19.3851H23C23.55 19.3851 24 19.821 24 20.3538ZM23 26.1663H9C8.45 26.1663 8 26.6023 8 27.1351V29.3955C8 29.9283 8.45 30.3642 9 30.3642H23C23.55 30.3642 24 29.9283 24 29.3955V27.1351C24 26.6023 23.55 26.1663 23 26.1663ZM32 10.9812V37.7913C32 39.9306 30.2083 41.6663 28 41.6663H4C1.79167 41.6663 0 39.9306 0 37.7913V4.208C0 2.06868 1.79167 0.333008 4 0.333008H21.0083C22.0667 0.333008 23.0833 0.744726 23.8333 1.47129L30.825 8.24446C31.575 8.96295 32 9.95592 32 10.9812ZM21.3333 4.52285V10.6663H27.675L21.3333 4.52285V4.52285ZM28 37.7913V14.5413H19.3333C18.225 14.5413 17.3333 13.6775 17.3333 12.6038V4.208H4V37.7913H28Z"
              />
            </svg>
            <p>Survey</p>
          </div>

          <div className="iconFiturSidebar">
            <svg width="32" height="34" viewBox="0 0 32 34">
              <path
                fill="currentColor"
                d="M29 2.30005H3C1.34312 2.30005 0 3.71033 0 5.45005V28.55C0 30.2898 1.34312 31.7 3 31.7H29C30.6569 31.7 32 30.2898 32 28.55V5.45005C32 3.71033 30.6569 2.30005 29 2.30005ZM28.625 28.55H3.375C3.27554 28.55 3.18016 28.5086 3.10983 28.4347C3.03951 28.3609 3 28.2607 3 28.1563V5.8438C3 5.73937 3.03951 5.63922 3.10983 5.56538C3.18016 5.49153 3.27554 5.45005 3.375 5.45005H28.625C28.7245 5.45005 28.8198 5.49153 28.8902 5.56538C28.9605 5.63922 29 5.73937 29 5.8438V28.1563C29 28.2607 28.9605 28.3609 28.8902 28.4347C28.8198 28.5086 28.7245 28.55 28.625 28.55ZM26 22.5125V24.0875C26 24.5224 25.6642 24.875 25.25 24.875H12.75C12.3358 24.875 12 24.5224 12 24.0875V22.5125C12 22.0777 12.3358 21.725 12.75 21.725H25.25C25.6642 21.725 26 22.0777 26 22.5125ZM26 16.2125V17.7875C26 18.2224 25.6642 18.575 25.25 18.575H12.75C12.3358 18.575 12 18.2224 12 17.7875V16.2125C12 15.7777 12.3358 15.425 12.75 15.425H25.25C25.6642 15.425 26 15.7777 26 16.2125ZM26 9.91255V11.4875C26 11.9224 25.6642 12.275 25.25 12.275H12.75C12.3358 12.275 12 11.9224 12 11.4875V9.91255C12 9.47765 12.3358 9.12505 12.75 9.12505H25.25C25.6642 9.12505 26 9.47765 26 9.91255ZM10.25 10.7C10.25 12.0048 9.24263 13.0625 8 13.0625C6.75737 13.0625 5.75 12.0048 5.75 10.7C5.75 9.39529 6.75737 8.33755 8 8.33755C9.24263 8.33755 10.25 9.39529 10.25 10.7ZM10.25 17C10.25 18.3048 9.24263 19.3625 8 19.3625C6.75737 19.3625 5.75 18.3048 5.75 17C5.75 15.6953 6.75737 14.6375 8 14.6375C9.24263 14.6375 10.25 15.6953 10.25 17ZM10.25 23.3C10.25 24.6048 9.24263 25.6625 8 25.6625C6.75737 25.6625 5.75 24.6048 5.75 23.3C5.75 21.9953 6.75737 20.9375 8 20.9375C9.24263 20.9375 10.25 21.9953 10.25 23.3Z"
              />
            </svg>
            <p>Jadwal</p>
          </div>

          <div className="iconFiturSidebar">
            <svg width="32" height="28" viewBox="0 0 32 28">
              <path
                fill="currentColor"
                d="M31.2 11.3816H28V7.89068C28 7.41068 27.64 7.01795 27.2 7.01795H25.6C25.16 7.01795 24.8 7.41068 24.8 7.89068V11.3816H21.6C21.16 11.3816 20.8 11.7743 20.8 12.2543V13.9998C20.8 14.4798 21.16 14.8725 21.6 14.8725H24.8V18.3634C24.8 18.8434 25.16 19.2361 25.6 19.2361H27.2C27.64 19.2361 28 18.8434 28 18.3634V14.8725H31.2C31.64 14.8725 32 14.4798 32 13.9998V12.2543C32 11.7743 31.64 11.3816 31.2 11.3816ZM11.2 13.9998C14.735 13.9998 17.6 10.8743 17.6 7.01795C17.6 3.16159 14.735 0.0361328 11.2 0.0361328C7.665 0.0361328 4.8 3.16159 4.8 7.01795C4.8 10.8743 7.665 13.9998 11.2 13.9998ZM15.68 15.7452H14.845C13.735 16.3016 12.5 16.618 11.2 16.618C9.9 16.618 8.67 16.3016 7.555 15.7452H6.72C3.01 15.7452 0 19.0289 0 23.0761V25.3452C0 26.7907 1.075 27.9634 2.4 27.9634H20C21.325 27.9634 22.4 26.7907 22.4 25.3452V23.0761C22.4 19.0289 19.39 15.7452 15.68 15.7452Z"
              />
            </svg>
            <p>Interaksi</p>
          </div>

          <div className="iconFiturSidebar">
            <svg width="32" height="46" viewBox="0 0 32 46">
              <path
                fill="currentColor"
                d="M16 7.1875C11.1873 7.1875 7.27273 11.0562 7.27273 15.8125C7.27273 16.6067 7.92364 17.25 8.72727 17.25C9.53091 17.25 10.1818 16.6067 10.1818 15.8125C10.1818 12.641 12.7927 10.0625 16 10.0625C16.8036 10.0625 17.4545 9.41922 17.4545 8.625C17.4545 7.83078 16.8036 7.1875 16 7.1875ZM8.73273 41.2535C8.73273 41.5366 8.81727 41.8124 8.97636 42.0478L11.2045 45.3576C11.4745 45.7583 11.9291 45.9991 12.4155 45.9991H19.5836C20.0709 45.9991 20.5255 45.7583 20.7945 45.3576L23.0227 42.0478C23.1809 41.8124 23.2655 41.5357 23.2664 41.2535L23.2709 37.3741H8.72909L8.73273 41.2535ZM16 0C6.70182 0 0 7.45433 0 15.8125C0 19.7989 1.49545 23.4357 3.96 26.2146C5.47273 27.9207 7.84546 31.4974 8.72546 34.4946V34.5H13.0891V34.4892C13.0882 34.0607 13.0236 33.6348 12.8936 33.2251C12.3855 31.625 10.8191 27.4059 7.24182 23.372C5.37455 21.2669 4.37636 18.5968 4.36818 15.8125C4.35 9.1964 9.79273 4.3125 16 4.3125C22.4164 4.3125 27.6364 9.47133 27.6364 15.8125C27.6364 18.595 26.6145 21.2795 24.7591 23.372C21.2036 27.3799 19.63 31.59 19.1136 33.2062C18.9804 33.6218 18.9123 34.0551 18.9118 34.491V34.5H23.2755V34.4955C24.1555 31.4974 26.5282 27.9207 28.0409 26.2155C30.5045 23.4357 32 19.7989 32 15.8125C32 7.07969 24.8364 0 16 0Z"
              />
            </svg>
            <p>Tips & Trik</p>
          </div>
        </section>
        <section className="profileName">
          <div>
            <img src={ProfileAvatar} alt="profile picture" />
            <p>Dzikri Ardafi</p>
          </div>
        </section>
      </div>
    </>
  );
};
export default Sidebar;
