import axios from "axios";
import { ApiURL } from "./endpoint";

const LoginHandler = (email, password) => {
  axios
    .post(`${ApiURL}/masuk/login`)
    .then((res) => {
      console.log("res login", res);
    })
    .catch((err) => {
      console.log("err login", err);
    });
};

const SignUpHandler = (email, password, name) => {
  axios
    .post(`${ApiURL}/daftar/signup`)
    .then((res) => {
      console.log("res signup", res);
    })
    .catch((err) => {
      console.log("err signup", err);
    });
};

const AuthHandler = {
  LoginHandler,
  SignUpHandler,
};

export default AuthHandler;
