// This Block will Place Link bar Facebook Twitter Google+
import React from "react";
import Facebook from "../assets/img/icon/Facebook.png";
import Twitter from "../assets/img/icon/Twitter.png";
import Google from "../assets/img/icon/Google.png";
import Link from "next/link";
import Firebase from "../api/functions/config/config";

export default function SocialSignIn() {

  let googleProvider = new Firebase.auth.GoogleAuthProvider();
  let facebookProvider = new Firebase.auth.FacebookAuthProvider();
  let twitterProvider = new Firebase.auth.TwitterAuthProvider();

  const handleFacebook = () => {
    Firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
      // Accounts successfully linked.
      let credential = result.credential;
      let user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      console.log(error)
      // ...
    });
  }

  const handleTwitter = () => {
    Firebase.auth().signInWithPopup(twitterProvider).then(function(result) {
      // Accounts successfully linked.
      let credential = result.credential;
      let user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      console.log(error)
      // ...
    });
  }

  const handleGoogle = () => {
    Firebase.auth().signInWithPopup(googleProvider).then(function(result) {
      // Accounts successfully linked.
      let credential = result.credential;
      let user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      console.log(error)
      // ...
    });
  }


  return (
    <>
        <a
          onClick={handleFacebook}
        >
          <img src={Facebook} />
        </a>
        <a
          onClick={handleTwitter}
        >
          <img src={Twitter} />
        </a>
        <a
          onClick={handleGoogle}
        >
          <img src={Google} />
        </a>
    </>
  );
}
