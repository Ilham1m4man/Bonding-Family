/* eslint-disable jsx-a11y/img-redundant-alt */
import LogoBonding from "../../assets/Images/Logo-Bonding-Family.svg";
import ProfileAvatar from "../../assets/icons/Avatar-profile.svg";
import closeIconSidebar from "../../assets/icons/close-icon.png";
import { Link, useLocation } from "react-router-dom";
import path from "../../utils/path-name";
import "../../styles/styleSidebar.css";

const Sidebar = ({ closeSidebar }) => {
  const location = useLocation();
  const currentPath = location.pathname;
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
          <Link to={{ pathname: path.home }}>
            <img src={LogoBonding} alt="logo bonding family"></img>
          </Link>
        </div>
        <section className="sidebarFitur">
          <Link to={{ pathname: path.survey }}>
            <div className="iconFiturSidebar">
              <svg width="25" height="42" viewBox="0 0 32 42">
                <path
                  fill="currentColor"
                  d="M24 20.3538V22.6142C24 23.1471 23.55 23.583 23 23.583H9C8.45 23.583 8 23.1471 8 22.6142V20.3538C8 19.821 8.45 19.3851 9 19.3851H23C23.55 19.3851 24 19.821 24 20.3538ZM23 26.1663H9C8.45 26.1663 8 26.6023 8 27.1351V29.3955C8 29.9283 8.45 30.3642 9 30.3642H23C23.55 30.3642 24 29.9283 24 29.3955V27.1351C24 26.6023 23.55 26.1663 23 26.1663ZM32 10.9812V37.7913C32 39.9306 30.2083 41.6663 28 41.6663H4C1.79167 41.6663 0 39.9306 0 37.7913V4.208C0 2.06868 1.79167 0.333008 4 0.333008H21.0083C22.0667 0.333008 23.0833 0.744726 23.8333 1.47129L30.825 8.24446C31.575 8.96295 32 9.95592 32 10.9812ZM21.3333 4.52285V10.6663H27.675L21.3333 4.52285V4.52285ZM28 37.7913V14.5413H19.3333C18.225 14.5413 17.3333 13.6775 17.3333 12.6038V4.208H4V37.7913H28Z"
                />
              </svg>
              <p>Survey</p>
            </div>
          </Link>
          <Link to={{ pathname: path.jadwal }}>
            {currentPath === "/jadwal" ? (
              <div
                className="iconFiturSidebar"
                style={{
                  backgroundColor: "rgba(105, 123, 213, 1)",
                  color: "white",
                }}
              >
                <svg width="25" height="34" viewBox="0 0 32 34">
                  <path
                    fill="white"
                    d="M29 2.30005H3C1.34312 2.30005 0 3.71033 0 5.45005V28.55C0 30.2898 1.34312 31.7 3 31.7H29C30.6569 31.7 32 30.2898 32 28.55V5.45005C32 3.71033 30.6569 2.30005 29 2.30005ZM28.625 28.55H3.375C3.27554 28.55 3.18016 28.5086 3.10983 28.4347C3.03951 28.3609 3 28.2607 3 28.1563V5.8438C3 5.73937 3.03951 5.63922 3.10983 5.56538C3.18016 5.49153 3.27554 5.45005 3.375 5.45005H28.625C28.7245 5.45005 28.8198 5.49153 28.8902 5.56538C28.9605 5.63922 29 5.73937 29 5.8438V28.1563C29 28.2607 28.9605 28.3609 28.8902 28.4347C28.8198 28.5086 28.7245 28.55 28.625 28.55ZM26 22.5125V24.0875C26 24.5224 25.6642 24.875 25.25 24.875H12.75C12.3358 24.875 12 24.5224 12 24.0875V22.5125C12 22.0777 12.3358 21.725 12.75 21.725H25.25C25.6642 21.725 26 22.0777 26 22.5125ZM26 16.2125V17.7875C26 18.2224 25.6642 18.575 25.25 18.575H12.75C12.3358 18.575 12 18.2224 12 17.7875V16.2125C12 15.7777 12.3358 15.425 12.75 15.425H25.25C25.6642 15.425 26 15.7777 26 16.2125ZM26 9.91255V11.4875C26 11.9224 25.6642 12.275 25.25 12.275H12.75C12.3358 12.275 12 11.9224 12 11.4875V9.91255C12 9.47765 12.3358 9.12505 12.75 9.12505H25.25C25.6642 9.12505 26 9.47765 26 9.91255ZM10.25 10.7C10.25 12.0048 9.24263 13.0625 8 13.0625C6.75737 13.0625 5.75 12.0048 5.75 10.7C5.75 9.39529 6.75737 8.33755 8 8.33755C9.24263 8.33755 10.25 9.39529 10.25 10.7ZM10.25 17C10.25 18.3048 9.24263 19.3625 8 19.3625C6.75737 19.3625 5.75 18.3048 5.75 17C5.75 15.6953 6.75737 14.6375 8 14.6375C9.24263 14.6375 10.25 15.6953 10.25 17ZM10.25 23.3C10.25 24.6048 9.24263 25.6625 8 25.6625C6.75737 25.6625 5.75 24.6048 5.75 23.3C5.75 21.9953 6.75737 20.9375 8 20.9375C9.24263 20.9375 10.25 21.9953 10.25 23.3Z"
                  />
                </svg>
                <p>Jadwal</p>
              </div>
            ) : (
              <div className="iconFiturSidebar">
                <svg width="25" height="34" viewBox="0 0 32 34">
                  <path
                    fill="currentColor"
                    d="M29 2.30005H3C1.34312 2.30005 0 3.71033 0 5.45005V28.55C0 30.2898 1.34312 31.7 3 31.7H29C30.6569 31.7 32 30.2898 32 28.55V5.45005C32 3.71033 30.6569 2.30005 29 2.30005ZM28.625 28.55H3.375C3.27554 28.55 3.18016 28.5086 3.10983 28.4347C3.03951 28.3609 3 28.2607 3 28.1563V5.8438C3 5.73937 3.03951 5.63922 3.10983 5.56538C3.18016 5.49153 3.27554 5.45005 3.375 5.45005H28.625C28.7245 5.45005 28.8198 5.49153 28.8902 5.56538C28.9605 5.63922 29 5.73937 29 5.8438V28.1563C29 28.2607 28.9605 28.3609 28.8902 28.4347C28.8198 28.5086 28.7245 28.55 28.625 28.55ZM26 22.5125V24.0875C26 24.5224 25.6642 24.875 25.25 24.875H12.75C12.3358 24.875 12 24.5224 12 24.0875V22.5125C12 22.0777 12.3358 21.725 12.75 21.725H25.25C25.6642 21.725 26 22.0777 26 22.5125ZM26 16.2125V17.7875C26 18.2224 25.6642 18.575 25.25 18.575H12.75C12.3358 18.575 12 18.2224 12 17.7875V16.2125C12 15.7777 12.3358 15.425 12.75 15.425H25.25C25.6642 15.425 26 15.7777 26 16.2125ZM26 9.91255V11.4875C26 11.9224 25.6642 12.275 25.25 12.275H12.75C12.3358 12.275 12 11.9224 12 11.4875V9.91255C12 9.47765 12.3358 9.12505 12.75 9.12505H25.25C25.6642 9.12505 26 9.47765 26 9.91255ZM10.25 10.7C10.25 12.0048 9.24263 13.0625 8 13.0625C6.75737 13.0625 5.75 12.0048 5.75 10.7C5.75 9.39529 6.75737 8.33755 8 8.33755C9.24263 8.33755 10.25 9.39529 10.25 10.7ZM10.25 17C10.25 18.3048 9.24263 19.3625 8 19.3625C6.75737 19.3625 5.75 18.3048 5.75 17C5.75 15.6953 6.75737 14.6375 8 14.6375C9.24263 14.6375 10.25 15.6953 10.25 17ZM10.25 23.3C10.25 24.6048 9.24263 25.6625 8 25.6625C6.75737 25.6625 5.75 24.6048 5.75 23.3C5.75 21.9953 6.75737 20.9375 8 20.9375C9.24263 20.9375 10.25 21.9953 10.25 23.3Z"
                  />
                </svg>
                <p>Jadwal</p>
              </div>
            )}
          </Link>
          <Link to={{ pathname: path.interaksi }}>
            {currentPath === "/interaksi" ? (
              <div
                className="iconFiturSidebar"
                style={{
                  backgroundColor: "rgba(105, 123, 213, 1)",
                  color: "white",
                }}
              >
                <svg width="25" height="34" viewBox="0 0 32 34">
                  <path
                    fill="white"
                    d="M29 2.30005H3C1.34312 2.30005 0 3.71033 0 5.45005V28.55C0 30.2898 1.34312 31.7 3 31.7H29C30.6569 31.7 32 30.2898 32 28.55V5.45005C32 3.71033 30.6569 2.30005 29 2.30005ZM28.625 28.55H3.375C3.27554 28.55 3.18016 28.5086 3.10983 28.4347C3.03951 28.3609 3 28.2607 3 28.1563V5.8438C3 5.73937 3.03951 5.63922 3.10983 5.56538C3.18016 5.49153 3.27554 5.45005 3.375 5.45005H28.625C28.7245 5.45005 28.8198 5.49153 28.8902 5.56538C28.9605 5.63922 29 5.73937 29 5.8438V28.1563C29 28.2607 28.9605 28.3609 28.8902 28.4347C28.8198 28.5086 28.7245 28.55 28.625 28.55ZM26 22.5125V24.0875C26 24.5224 25.6642 24.875 25.25 24.875H12.75C12.3358 24.875 12 24.5224 12 24.0875V22.5125C12 22.0777 12.3358 21.725 12.75 21.725H25.25C25.6642 21.725 26 22.0777 26 22.5125ZM26 16.2125V17.7875C26 18.2224 25.6642 18.575 25.25 18.575H12.75C12.3358 18.575 12 18.2224 12 17.7875V16.2125C12 15.7777 12.3358 15.425 12.75 15.425H25.25C25.6642 15.425 26 15.7777 26 16.2125ZM26 9.91255V11.4875C26 11.9224 25.6642 12.275 25.25 12.275H12.75C12.3358 12.275 12 11.9224 12 11.4875V9.91255C12 9.47765 12.3358 9.12505 12.75 9.12505H25.25C25.6642 9.12505 26 9.47765 26 9.91255ZM10.25 10.7C10.25 12.0048 9.24263 13.0625 8 13.0625C6.75737 13.0625 5.75 12.0048 5.75 10.7C5.75 9.39529 6.75737 8.33755 8 8.33755C9.24263 8.33755 10.25 9.39529 10.25 10.7ZM10.25 17C10.25 18.3048 9.24263 19.3625 8 19.3625C6.75737 19.3625 5.75 18.3048 5.75 17C5.75 15.6953 6.75737 14.6375 8 14.6375C9.24263 14.6375 10.25 15.6953 10.25 17ZM10.25 23.3C10.25 24.6048 9.24263 25.6625 8 25.6625C6.75737 25.6625 5.75 24.6048 5.75 23.3C5.75 21.9953 6.75737 20.9375 8 20.9375C9.24263 20.9375 10.25 21.9953 10.25 23.3Z"
                  />
                </svg>
                <p>Interaksi</p>
              </div>
            ) : (
              <div className="iconFiturSidebar">
                <svg width="25" height="34" viewBox="0 0 32 34">
                  <path
                    fill="currentColor"
                    d="M29 2.30005H3C1.34312 2.30005 0 3.71033 0 5.45005V28.55C0 30.2898 1.34312 31.7 3 31.7H29C30.6569 31.7 32 30.2898 32 28.55V5.45005C32 3.71033 30.6569 2.30005 29 2.30005ZM28.625 28.55H3.375C3.27554 28.55 3.18016 28.5086 3.10983 28.4347C3.03951 28.3609 3 28.2607 3 28.1563V5.8438C3 5.73937 3.03951 5.63922 3.10983 5.56538C3.18016 5.49153 3.27554 5.45005 3.375 5.45005H28.625C28.7245 5.45005 28.8198 5.49153 28.8902 5.56538C28.9605 5.63922 29 5.73937 29 5.8438V28.1563C29 28.2607 28.9605 28.3609 28.8902 28.4347C28.8198 28.5086 28.7245 28.55 28.625 28.55ZM26 22.5125V24.0875C26 24.5224 25.6642 24.875 25.25 24.875H12.75C12.3358 24.875 12 24.5224 12 24.0875V22.5125C12 22.0777 12.3358 21.725 12.75 21.725H25.25C25.6642 21.725 26 22.0777 26 22.5125ZM26 16.2125V17.7875C26 18.2224 25.6642 18.575 25.25 18.575H12.75C12.3358 18.575 12 18.2224 12 17.7875V16.2125C12 15.7777 12.3358 15.425 12.75 15.425H25.25C25.6642 15.425 26 15.7777 26 16.2125ZM26 9.91255V11.4875C26 11.9224 25.6642 12.275 25.25 12.275H12.75C12.3358 12.275 12 11.9224 12 11.4875V9.91255C12 9.47765 12.3358 9.12505 12.75 9.12505H25.25C25.6642 9.12505 26 9.47765 26 9.91255ZM10.25 10.7C10.25 12.0048 9.24263 13.0625 8 13.0625C6.75737 13.0625 5.75 12.0048 5.75 10.7C5.75 9.39529 6.75737 8.33755 8 8.33755C9.24263 8.33755 10.25 9.39529 10.25 10.7ZM10.25 17C10.25 18.3048 9.24263 19.3625 8 19.3625C6.75737 19.3625 5.75 18.3048 5.75 17C5.75 15.6953 6.75737 14.6375 8 14.6375C9.24263 14.6375 10.25 15.6953 10.25 17ZM10.25 23.3C10.25 24.6048 9.24263 25.6625 8 25.6625C6.75737 25.6625 5.75 24.6048 5.75 23.3C5.75 21.9953 6.75737 20.9375 8 20.9375C9.24263 20.9375 10.25 21.9953 10.25 23.3Z"
                  />
                </svg>
                <p>Interaksi</p>
              </div>
            )}
          </Link>
          <Link to={{ pathname: path.tipsNTrick }}>
            {currentPath === "/tipsNtrick" ? (
              <div
                className="iconFiturSidebar"
                style={{
                  backgroundColor: "rgba(105, 123, 213, 1)",
                  color: "white",
                }}
              >
                <svg width="25" height="34" viewBox="0 0 32 34">
                  <path
                    fill="white"
                    d="M29 2.30005H3C1.34312 2.30005 0 3.71033 0 5.45005V28.55C0 30.2898 1.34312 31.7 3 31.7H29C30.6569 31.7 32 30.2898 32 28.55V5.45005C32 3.71033 30.6569 2.30005 29 2.30005ZM28.625 28.55H3.375C3.27554 28.55 3.18016 28.5086 3.10983 28.4347C3.03951 28.3609 3 28.2607 3 28.1563V5.8438C3 5.73937 3.03951 5.63922 3.10983 5.56538C3.18016 5.49153 3.27554 5.45005 3.375 5.45005H28.625C28.7245 5.45005 28.8198 5.49153 28.8902 5.56538C28.9605 5.63922 29 5.73937 29 5.8438V28.1563C29 28.2607 28.9605 28.3609 28.8902 28.4347C28.8198 28.5086 28.7245 28.55 28.625 28.55ZM26 22.5125V24.0875C26 24.5224 25.6642 24.875 25.25 24.875H12.75C12.3358 24.875 12 24.5224 12 24.0875V22.5125C12 22.0777 12.3358 21.725 12.75 21.725H25.25C25.6642 21.725 26 22.0777 26 22.5125ZM26 16.2125V17.7875C26 18.2224 25.6642 18.575 25.25 18.575H12.75C12.3358 18.575 12 18.2224 12 17.7875V16.2125C12 15.7777 12.3358 15.425 12.75 15.425H25.25C25.6642 15.425 26 15.7777 26 16.2125ZM26 9.91255V11.4875C26 11.9224 25.6642 12.275 25.25 12.275H12.75C12.3358 12.275 12 11.9224 12 11.4875V9.91255C12 9.47765 12.3358 9.12505 12.75 9.12505H25.25C25.6642 9.12505 26 9.47765 26 9.91255ZM10.25 10.7C10.25 12.0048 9.24263 13.0625 8 13.0625C6.75737 13.0625 5.75 12.0048 5.75 10.7C5.75 9.39529 6.75737 8.33755 8 8.33755C9.24263 8.33755 10.25 9.39529 10.25 10.7ZM10.25 17C10.25 18.3048 9.24263 19.3625 8 19.3625C6.75737 19.3625 5.75 18.3048 5.75 17C5.75 15.6953 6.75737 14.6375 8 14.6375C9.24263 14.6375 10.25 15.6953 10.25 17ZM10.25 23.3C10.25 24.6048 9.24263 25.6625 8 25.6625C6.75737 25.6625 5.75 24.6048 5.75 23.3C5.75 21.9953 6.75737 20.9375 8 20.9375C9.24263 20.9375 10.25 21.9953 10.25 23.3Z"
                  />
                </svg>
                <p>Tips & Trik</p>
              </div>
            ) : (
              <div className="iconFiturSidebar">
                <svg width="25" height="34" viewBox="0 0 32 34">
                  <path
                    fill="currentColor"
                    d="M29 2.30005H3C1.34312 2.30005 0 3.71033 0 5.45005V28.55C0 30.2898 1.34312 31.7 3 31.7H29C30.6569 31.7 32 30.2898 32 28.55V5.45005C32 3.71033 30.6569 2.30005 29 2.30005ZM28.625 28.55H3.375C3.27554 28.55 3.18016 28.5086 3.10983 28.4347C3.03951 28.3609 3 28.2607 3 28.1563V5.8438C3 5.73937 3.03951 5.63922 3.10983 5.56538C3.18016 5.49153 3.27554 5.45005 3.375 5.45005H28.625C28.7245 5.45005 28.8198 5.49153 28.8902 5.56538C28.9605 5.63922 29 5.73937 29 5.8438V28.1563C29 28.2607 28.9605 28.3609 28.8902 28.4347C28.8198 28.5086 28.7245 28.55 28.625 28.55ZM26 22.5125V24.0875C26 24.5224 25.6642 24.875 25.25 24.875H12.75C12.3358 24.875 12 24.5224 12 24.0875V22.5125C12 22.0777 12.3358 21.725 12.75 21.725H25.25C25.6642 21.725 26 22.0777 26 22.5125ZM26 16.2125V17.7875C26 18.2224 25.6642 18.575 25.25 18.575H12.75C12.3358 18.575 12 18.2224 12 17.7875V16.2125C12 15.7777 12.3358 15.425 12.75 15.425H25.25C25.6642 15.425 26 15.7777 26 16.2125ZM26 9.91255V11.4875C26 11.9224 25.6642 12.275 25.25 12.275H12.75C12.3358 12.275 12 11.9224 12 11.4875V9.91255C12 9.47765 12.3358 9.12505 12.75 9.12505H25.25C25.6642 9.12505 26 9.47765 26 9.91255ZM10.25 10.7C10.25 12.0048 9.24263 13.0625 8 13.0625C6.75737 13.0625 5.75 12.0048 5.75 10.7C5.75 9.39529 6.75737 8.33755 8 8.33755C9.24263 8.33755 10.25 9.39529 10.25 10.7ZM10.25 17C10.25 18.3048 9.24263 19.3625 8 19.3625C6.75737 19.3625 5.75 18.3048 5.75 17C5.75 15.6953 6.75737 14.6375 8 14.6375C9.24263 14.6375 10.25 15.6953 10.25 17ZM10.25 23.3C10.25 24.6048 9.24263 25.6625 8 25.6625C6.75737 25.6625 5.75 24.6048 5.75 23.3C5.75 21.9953 6.75737 20.9375 8 20.9375C9.24263 20.9375 10.25 21.9953 10.25 23.3Z"
                  />
                </svg>
                <p>Tips & Trik</p>
              </div>
            )}
          </Link>
        </section>
        <section className="profileName">
          <Link
            to={{ pathname: path.profile }}
            /* onClick={addActiveIndicatorHandler} */
          >
            <div id="profile-background">
              <img src={ProfileAvatar} alt="profile picture" />
              <p>Dzikri Ardafi</p>
            </div>
          </Link>
        </section>
      </div>
    </>
  );
};
export default Sidebar;
