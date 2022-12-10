import React from "react";
import "./login.css";
const FormLogin = () => {
  return (
    <>
      <div className="cardLogin">
        <h3>Masuk</h3>
        <div className="wrapperComponent">
          <div className="formInput">
            <form>
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
            </form>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div />
            <button className="buttonLogin" type="submit">
              Masuk
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
