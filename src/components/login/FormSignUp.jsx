import React from "react";
import "./login.css";
const FormSignUp = () => {
  return (
    <>
      <div className="cardLogin">
        <h3>Daftar</h3>
        <div className="wrapperComponent">
          <div className="formInput">
            <form>
              <div>
                <input placeholder="Nama" className="input" />
              </div>
              <div>
                <input placeholder="Email" className="input" type="email" />
              </div>
              <div>
                <input
                  placeholder="Password"
                  className="input"
                  type="password"
                />
              </div>
              <div>
                <input
                  placeholder="Konfirmasi Password"
                  className="input"
                  type="password"
                />
              </div>
            </form>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div />
            <button className="buttonLogin" type="submit">
              Daftar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSignUp;
