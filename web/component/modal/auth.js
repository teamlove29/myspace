import React, { useState, useEffect,useMemo } from "react";
import { Modal, Form ,Alert} from "react-bootstrap";
import { useFormik } from "formik";
import { Button } from "./style/style";
import firebase from '../../config/config'
import * as Yup from "yup";

const Auth = (props) => {
    
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setshowSignUp] = useState(false);
  


  const handleCloseSignIn = () => {
    setShowSignIn(false);
    formikSignIn.handleReset();
  };
  const handleCloseSignUp = () => {
    setshowSignUp(false);
    formikSignUp.handleReset();
  };

  useEffect(() => {
    if (props.showSignIn === true) setShowSignIn(true);
    if (props.showSignUp === true) setshowSignUp(true);
  }, [props]);

  const initialValues = {
    email: "",
    password: "",
  };

  const getInputClassesformikSignIn = (fieldname) => {
    if (formikSignIn.touched[fieldname] && formikSignIn.errors[fieldname]) {
      return "is-invalid";
    }
    if (formikSignIn.touched[fieldname] && !formikSignIn.errors[fieldname]) {
      return "is-valid";
    }
    return "";
  };

  const getInputClassesformikSignUp = (fieldname) => {
    if (formikSignUp.touched[fieldname] && formikSignUp.errors[fieldname]) {
      return "is-invalid";
    }
    if (formikSignUp.touched[fieldname] && !formikSignUp.errors[fieldname]) {
      return "is-valid";
    }
    return "";
  };

  const AuthSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 symbols").required("Required"),
  });



  // var provider = new firebase.auth.FacebookAuthProvider();
  // var googleProvider = new firebase.auth.GoogleAuthProvider();
  // var facebookProvider = new firebase.auth.FacebookAuthProvider();
  // var twitterProvider = new firebase.auth.TwitterAuthProvider();

const SignInSocial = () => {
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
console.log(result)
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(error)
  });
}


const handleSignIn = (value, { setStatus, setSubmitting }) => {
  firebase
  .auth()
  .signInWithEmailAndPassword(value.email, value.password)
  .then((values) => {
    setStatus('fuck')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    formikSignIn.handleReset()
    setSubmitting(false);
    setStatus(errorMessage);
  });
}


  const formikSignIn = useFormik({
    initialValues,
    validationSchema: AuthSchema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      setTimeout(() => {
        console.log('formikSignIn', value);
        setSubmitting(false);
        handleSignIn(value, { setStatus, setSubmitting });
      }, 1000);
    },
  });


const handleSignUp = (value, { setStatus, setSubmitting }) => {
  firebase
  .auth()
  .signInWithEmailAndPassword(value.email, value.password)
  .then((values) => {
    setStatus('fuck')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    formikSignIn.handleReset()
    setSubmitting(false);
    setStatus(errorMessage);
  });
}

  const formikSignUp = useFormik({
    initialValues,
    validationSchema: AuthSchema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      setTimeout(() => {
        console.log('formikSignUp' ,value);
        setSubmitting(false)
        handleSignUp(value, { setStatus, setSubmitting });
      }, 1000);
    },
  });



  return (
    <>


     {/* begin SignIn */}
       <Modal show={showSignIn} onHide={handleCloseSignIn} size="lg" keyboard={false}>
    <Modal.Body>
      <div className="text-center">
        <h2 className="text-center mb-3 mt-5">Sign in</h2>
        <p style={{ marginLeft: "75px", marginRight: "75px" }}>
          start listening with myspace.
          <a 
          onClick={() => {setshowSignUp(true); handleCloseSignIn()} }
          href="#"> Sign up</a>
        </p>
      </div>
      <div
        style={{
          marginLeft: "7rem",
          marginRight: "7rem",
          marginBottom: "1rem",
        }}
      >
        <Form onSubmit={formikSignIn.handleSubmit} className="mt-5">
        {formikSignIn.status ? (
            <Alert 
            variant="danger"
            className="alert-text font-weight-bold">{formikSignIn.status}</Alert>
        ) : null}
          <Form.Group>
            <Form.Label>E-mail / Username</Form.Label>
            <Form.Control
              className={`form-control  ${getInputClassesformikSignIn("email")}`}
              name="email"
              type="email"
              {...formikSignIn.getFieldProps("email")}
            />
            {formikSignIn.touched.email && formikSignIn.errors.email ? (
              <div className="text-danger">{formikSignIn.errors.email}</div>
            ) : null}
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              className={`form-control  ${getInputClassesformikSignIn("password")}`}
              name="password"
              type="password"
              {...formikSignIn.getFieldProps("password")}
            />
            {formikSignIn.touched.password && formikSignIn.errors.password ? (
              <div className="text-danger">{formikSignIn.errors.password}</div>
            ) : null}
          </Form.Group>
          <span className="text-gray">or</span>
          <img src="/assets/img/icon/Facebook.png" alt="" />
          <img src="/assets/img/icon/Twitter.png" alt="" />
          <img src="/assets/img/icon/Google.png" alt="" />
          <a className="float-right" href="#">
            Forgot password
          </a>
          <div className="text-center">
            <Button
              className="pl-5 pr-5"
              type="submit"
              disabled={formikSignIn.isSubmitting}
            >
              Sign in
            </Button>
          </div>
        </Form>
      </div>
    </Modal.Body>
  </Modal>
  {/* end SignIn */}

  {/* begin SignUp */}
  <Modal
      show={showSignUp} onHide={handleCloseSignUp} size="lg" >
        <Modal.Body>
          <h2 className="text-center mb-3 mt-5">
            Welcome! Let's create your profile
          </h2>
          <p
            style={{ marginLeft: "3rem", marginRight: "3rem" }}
          >
            Getting in is easy. Use one of your social networks or start fresh
            with an email address. Already have a Myspace account?{" "}
            <a 
             onClick={() => {setShowSignIn(true); handleCloseSignUp()} }
            href="#">Sign in</a>{" "}
          </p>

          <div
            style={{
              marginLeft: "7rem",
              marginRight: "7rem",
              marginBottom: "1rem",
            }}
          >
            <Form onSubmit={formikSignUp.handleSubmit} className="mt-5">
            {formikSignUp.status ? (
            <Alert 
            variant="danger"
            className="alert-text font-weight-bold">{formikSignUp.status}</Alert>
        ) : null}
              <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  className={`form-control  ${getInputClassesformikSignUp("email")}`}
                  name="email"
                  type="email"
                  {...formikSignUp.getFieldProps("email")}
                />
                {formikSignUp.touched.email && formikSignUp.errors.email ? (
                  <div className="text-danger">{formikSignUp.errors.email}</div>
                ) : null}
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className={`form-control  ${getInputClassesformikSignUp("password")}`}
                  name="password"
                  type="password"
                  {...formikSignUp.getFieldProps("password")}
                />
                {formikSignUp.touched.password && formikSignUp.errors.password ? (
                  <div className="text-danger">{formikSignUp.errors.password}</div>
                ) : null}
              </Form.Group>
              <span className="text-gray">or</span>
              <img src='/assets/img/icon/Facebook.png' alt=""/>
              <img  src='/assets/img/icon/Twitter.png' alt=""/>
              <img  src='/assets/img/icon/Google.png' alt=""/>
                <a className="float-right" href="#">Forgot password</a>
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={formikSignUp.isSubmitting}
                >
                  Create Account
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
{/* end SignUp */}
      <style jsx>{`
        img {
          margin-left: 0.5rem;
          width: 2rem;
        }
      `}</style>
     
    </>
  );
};

export default Auth;
