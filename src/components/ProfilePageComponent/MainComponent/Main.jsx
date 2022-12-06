import React from "react";
import useInput from "../../../utils/useInput";
import fotoProfile from "../../../assets/Images/Foto_profile.png";
import Switch from "react-switch";
import useToggle from "../../../utils/useToggle";
import "../../../styles/profile-main-comp-style.css";

const MainContent = () => {
  const [namaProfile, onNamaProfileChange] = useInput("John Doe");
  const [nomorHpProfile, onNomorHpProfileChange] = useInput("+6212-3456-7890");
  const [emailProfile, onEmailProfileChange] = useInput("Johndoe@email.com");
  const [jamIstirahat, onJamIstirahatChange] = useInput("12");
  const [menitIstirahat, onMenitIstirahatChange] = useInput("00");

  const [notifToggle, onNotifToggleChange] = useToggle();

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const onKeluarHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="mainContent">
        <div className="profile-container">
          <div id="profile-section" className="profile-contents">
            <div className="foto-container">
              <img src={fotoProfile} alt="Foto profil anda" />
            </div>
            <div className="profile_saya-container">
              <h1>Profile Saya</h1>
              <form onSubmit={onSubmitHandler} id="form-profile-saya">
                <input
                  className="input-form"
                  id="nama-profile"
                  type="text"
                  placeholder={namaProfile}
                  onChange={onNamaProfileChange}
                  value={namaProfile}
                />
                <input
                  className="input-form"
                  id="nomor_hp-profile"
                  type="text"
                  placeholder={nomorHpProfile}
                  onChange={onNomorHpProfileChange}
                  value={nomorHpProfile}
                />
                <input
                  className="input-form"
                  id="email-profile"
                  type="email"
                  placeholder={emailProfile}
                  onChange={onEmailProfileChange}
                  value={emailProfile}
                />
              </form>
            </div>
            <button type="submit" id="simpan-button">
              Simpan
            </button>
          </div>
          <div id="jam_istirahat-section" className="profile-contents">
            <h3>Jam Istirahat Kerja</h3>
            <div id="jam_istirahat">
              <input
                type="text"
                placeholder={jamIstirahat}
                onChange={onJamIstirahatChange}
                value={jamIstirahat}
              />
              <p>:</p>
              <input
                type="text"
                placeholder={menitIstirahat}
                onChange={onMenitIstirahatChange}
                value={menitIstirahat}
              />
            </div>
          </div>
          <div id="pengaturan-section" className="profile-contents">
            <h3>Pengaturan</h3>
            <div className="notif_switch-container">
              <p>Notifikasi</p>
                <Switch
                  onChange={onNotifToggleChange}
                  checked={notifToggle}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#5CC1DA"
                  offColor="#CCCCCC"
                  width={48}
                  handleDiameter={24}
                  className="react-switch"
                />
            </div>
            <button onClick={onKeluarHandler}>Keluar</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainContent;
