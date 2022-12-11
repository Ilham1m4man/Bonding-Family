/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
// import { useNavigate } from "react-router";

import { ApiURL } from "./ApiURl";
function LoginHandler(email, password) {
  return axios.post(`${ApiURL}/login`, {
    email,
    password,
  });
}

function SignUpHandler(name, email, password) {
  return axios.post(`${ApiURL}/register`, {
    name,
    email,
    password,
  });
  // .then(() => {
  //   alert("Akun berhasil di Daftarkan");
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
}

function currentUser() {
  return axios.get(ApiURL + "/users/me");
}
export const authFunction = {
  LoginHandler,
  SignUpHandler,
  currentUser,
};
