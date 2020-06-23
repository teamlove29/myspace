import React, { useState, useEffect, useContext } from "react";

import firebase from "../config/config";
import Axios from "axios";
import { ModalContext } from "../config/context/ModalProvider";

const Index = () => {

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


  return (
    <>

    </>
  );
};

export default Index;
