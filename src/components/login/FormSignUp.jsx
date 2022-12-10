import React, { useState } from "react";
import "./login.css";
import { authFunction } from "../../service/auth";
import { Link, useNavigate } from "react-router-dom";
const FormSignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onNameInput = (e) => {
    setName(e.target.value);
  };

  const onEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const signUp = (e) => {
    e.preventDefault();
    authFunction
      .SignUpHandler(name, email, password)
      .then((res) => {
        if (res.status === 201) {
          alert("Akun berhasil didaftarkan");
          navigate("/login");
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
        navigate("/sign-up");
      });
  };
  return (
    <>
      <div className="cardLogin">
        <h3>Daftar</h3>
        <div className="wrapperComponent">
          <form>
            <div className="formInput">
              <div>
                <input
                  placeholder="Nama"
                  className="input"
                  id="name"
                  onChange={onNameInput}
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  className="input"
                  type="email"
                  id="email"
                  onChange={onEmailInput}
                />
              </div>
              <div>
                <input
                  onChange={onPasswordInput}
                  id="password"
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
                  onChange={onConfirmPassword}
                />
                {confirmPassword !== password ? (
                  <p style={{ color: "red", marginTop: "-0.5em" }}>
                    Password berbeda
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div />
              {confirmPassword !== password ? (
                <button
                  disabled
                  style={{ backgroundColor: "grey" }}
                  className="buttonLogin"
                  type="submit"
                  onClick={signUp}
                >
                  Daftar
                </button>
              ) : (
                <button className="buttonLogin" type="submit" onClick={signUp}>
                  Daftar
                </button>
              )}
            </div>
          </form>
          <Link to={{ pathname: "/login" }}>
            <p style={{ textAlign: "center" }}>
              Sudah punya akun? silahkan masuk
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormSignUp;
