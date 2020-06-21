import React, { useState, useEffect, useContext } from "react";
import Layout from "../component/Layout";
import Auth from "../component/modal/Auth";
import firebase from "../config/config";
import Axios from "axios";
import { ModalContext } from "../config/context/ModalProvider";

const Index = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [name, setName] = useState();
  const { user, setUser } = useContext(ModalContext);
  // const [currentUser, setCurrentUser] =  useState()

  const onAuthStateChange = (callback) => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const uid = user.uid;
        const names = user.email.substring(0, user.email.lastIndexOf("@"));
        try {
          await Axios.post(
            "https://us-central1-myspace-dev-1ae9e.cloudfunctions.net/login-member",
            {
              uid: uid,
            }
          );
          setName(names);
          callback(true);
        } catch (error) {
          callback(false);
        }
      } else {
        callback(false);
      }
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => unsubscribe();
  }, [user]);

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
    firebase.auth().signOut();
    setName("");
  };

  return (
    <Layout>
      <Auth showSignIn={showSignIn} showSignUp={showSignUp} />
      {user != "" ? (
        <div className="container mt-5 text-center">
          <button onClick={handleSignOut} className="btn btn-secondary">
            Logout
          </button>
          <h1>Hello {name}</h1>
        </div>
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
