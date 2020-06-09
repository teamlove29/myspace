import React, { useState } from "react";
import Header from "../../component/Header";
import { Button, Alert } from "react-bootstrap";
import Firebase from '../../api/functions/config/config'

export default function Member(props) {
  const [Hide, setHide] = useState(true);
  return (
    <>
      <Header/>
      <Button
        onClick={() =>
            Firebase
            .auth()
            .signOut()
            .then(function () {
            alert("You Sign out")
            window.location.href = "/"
            })
            .catch(function (error) {
                console.log(error)
              // An error happened.
            })
        }
      >
        SignOut
      </Button>
      <h1> This is Pages After Login</h1>
    </>
  );
}
