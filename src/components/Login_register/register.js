import React from "react";
import { useState } from "react";

import "./login.css";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";

import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };
  const register = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              console.log("done");
            })
            .catch((err) => alert(err.message));
        })
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="wrapper fadeInDown mt-2">
      <div id="formContent">
        <div className="fadeIn first h1 mb-3">Register</div>

        <form>
          <div className="row">
            <input
              type="text"
              id="login"
              className="fadeIn second mt-2 col mx-5"
              name="login"
              placeholder="first name"
            />
            <input
              type="text"
              id="login"
              className="fadeIn second mt-2 col mx-5"
              name="login"
              placeholder="last name"
            />
          </div>

          <input
            type="text"
            id="login"
            className="fadeIn second mt-2"
            name="login"
            placeholder="email"
          />
          <input
            type="text"
            id="login"
            className="fadeIn second mt-2"
            name="login"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="text"
            id="login"
            className="fadeIn second mt-2"
            name="login"
            placeholder="repeat password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <input
            type="text"
            id="password"
            className="fadeIn third mt-2"
            name="login"
            placeholder="password"
          />
          <input
            type="submit"
            className="fadeIn fourth btn btn-success mt-2"
            value=" register"
          />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            help
          </a>
        </div>
        <div id="formFooter">
          <a className="underlineHover" href="#">
            <NavLink to="/login"> go to login </NavLink>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
