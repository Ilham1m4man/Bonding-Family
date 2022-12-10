import React, { useState } from "react";
import "./login.css";
import { authFunction } from "../../service/auth";
import { Link, useNavigate } from "react-router-dom";
const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailSubmit = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordSubmit = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    authFunction
      .LoginHandler(email, password)
      .then((res) => {
        const accessToken = res.data.data.accessToken;
        localStorage.setItem("token-bonding-family", accessToken);
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
        if (err) {
          navigate("/login");
        }
      });
  };
  return (
    <>
      <div className="cardLogin">
        <h3>Masuk</h3>
        <form>
          <div className="wrapperComponent">
            <div className="formInput">
              <div>
                <input
                  id="email"
                  placeholder="Email"
                  className="input"
                  type="email"
                  onChange={onEmailSubmit}
                />
              </div>
              <div>
                <input
                  id="password"
                  placeholder="Password"
                  className="input"
                  type="password"
                  onChange={onPasswordSubmit}
                />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div />
              <button className="buttonLogin" type="submit" onClick={login}>
                Masuk
              </button>
            </div>
            <Link to={{ pathname: "/sign-up" }}>
              <p style={{ textAlign: "center" }}>
                Belum punya akun? silahkan mendaftar
              </p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
