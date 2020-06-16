import React, { useState, useEffect } from "react";
import Layout from "../component/Layout";
import Auth from "../component/modal/Auth";
import firebase from "../config/config";
import Link from "next/link";

const Index = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(true);
      } else setCurrentUser(false);
    });
  }, []);

  const handleSignIn = () => {
    setShowSignIn(true);
    setTimeout(() => {
      setShowSignIn(false);
    }, 50);
  };
  const handleSignUp = () => {
    setShowSignUp(true);
    setTimeout(() => {
      setShowSignUp(false);
    }, 50);
  };
const handleSignOut = () => {
  firebase.auth().signOut().then(()=> {
    setCurrentUser(false)
  }).catch(function(error) {
    console.log(error)
  });
}

  return (
    <Layout>
      <Auth showSignIn={showSignIn} />
      <Auth showSignUp={showSignUp} />
      {currentUser === true ? (
        <button onClick={handleSignOut} className="btn btn-secondary btn-block">
          Logout
        </button>
      ) : (
        <div className="container text-center mt-5">
          <h1>Sign in -- Sign up</h1>
          <button
            onClick={handleSignIn}
            className="btn btn-secondary btn-block"
          >
            Sign In
          </button>

          <button onClick={handleSignUp} className="btn btn-primary btn-block">
            Sign Up
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Index;
