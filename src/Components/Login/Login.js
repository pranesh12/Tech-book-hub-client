import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { BookContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const { login, setLogin } = useContext(BookContext);

  const hanldeGoogleLogin = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        const { displayName, email } = user;
        const loginInfo = {
          email: email,
          name: displayName,
        };
        setLogin(loginInfo);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container">
        <h1>THis is Login</h1>
        <button onClick={hanldeGoogleLogin} className="btn btn-primary">
          Google Log In
        </button>
        <p>{login.email}</p>
      </div>
    </>
  );
};

export default Login;
