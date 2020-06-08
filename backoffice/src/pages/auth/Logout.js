import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import firebase from "../../config/config";

const Logout = () => {
  let history = useHistory();
  const SingOut = (e) => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        history.push("/");
      })
      .catch(function(error) {
        // console.log(error)
      });
  };

  return <div>{SingOut()}</div>;
};

export default Logout;
