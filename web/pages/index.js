import React, { useState } from "react";
import Layout from "../component/Layout";
import { Modal, Button } from 'react-bootstrap';
import SignIn from '../component/modal/SignIn'
import SignUp from '../component/modal/SignUp'
import Link from "next/link";
const Index = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignIn = () => {
    setShowSignIn(true)
    setTimeout(() => {
      setShowSignIn(false)
    }, 50)
  };
  const handleSignUp = () => {
    setShowSignUp(true)
    setTimeout(() => {
      setShowSignUp(false)
    }, 50)
  };
  
  return (
    <Layout>  
      <SignIn show={showSignIn} /> 
      <SignUp show={showSignUp} /> 

      <div className="container text-center mt-5">
        <h1>Sign in -- Sign up</h1>
        <button onClick={handleSignIn} className="btn btn-secondary btn-block">
          Sign In
        </button>

        <button onClick={handleSignUp} className="btn btn-primary btn-block">
          Sign Up
        </button>
      </div>
    </Layout>
  );
};

export default Index;
