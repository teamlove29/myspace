// This Block will Place Link bar Facebook Twitter Google+
import React from "react";
import Facebook from "../assets/img/icon/Facebook.png";
import Twitter from "../assets/img/icon/Twitter.png";
import Google from "../assets/img/icon/Google.png";
import Link from "next/link";
import Firebase from "../api/functions/config/config";

export default function SocialSignIn() {
  return (
    <>
      <Link href="/">
        <a
          onClick={() => {
            var provider = new Firebase.auth.FacebookAuthProvider();
            provider.setCustomParameters({
              display: "popup",
            });
            Firebase.auth()
              .signInWithPopup(provider)
              .then(function (result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
              })
              .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                console.log(errorCode)
                var errorMessage = error.message;
                console.log(errorMessage)
                // The email of the user's account used.
                var email = error.email;
                console.log(email)
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log(credential)
                // ...
              });
          }}
        >
          <img src={Facebook} />
        </a>
      </Link>
      <Link href="/">
        <a
          onClick={() => {
            var provider = new Firebase.auth.TwitterAuthProvider();
            Firebase.auth()
              .signInWithPopup(provider)
              .then(function (result) {
                // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                // You can use these server side with your app's credentials to access the Twitter API.
                var token = result.credential.accessToken;
                var secret = result.credential.secret;
                // The signed-in user info.
                var user = result.user;
                // ...
              })
              .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                console.log(errorCode)
                var errorMessage = error.message;
                console.log(errorMessage)
                // The email of the user's account used.
                var email = error.email;
                console.log(email)
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log(credential)
                // ...
              });
          }}
        >
          <img src={Twitter} />
        </a>
      </Link>
      <Link href="/">
        <a
          onClick={() => {
            var provider = new Firebase.auth.GoogleAuthProvider();
            Firebase
              .auth()
              .signInWithPopup(provider)
              .then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
              })
              .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code
                console.log(errorCode)
                var errorMessage = error.message
                console.log(errorMessage)
                // The email of the user's account used.
                var email = error.email
                console.log(email)
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential
                console.log(credential)
                // ...
              });
          }}
        >
          <img src={Google} />
        </a>
      </Link>
    </>
  );
}
