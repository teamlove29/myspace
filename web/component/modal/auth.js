import React, { useState, useEffect, useMemo } from "react";
import { Modal, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { Button, Alert } from "./style";
import firebase from "../../config/config";
import * as Yup from "yup";
import Axios from "axios";

const Auth = (props) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showType, setShowType] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [uidSocial, setUidSocial] = useState(null);

  const handleCloseChoose = () => setShowType(false);
  const handleCloseSignIn = () => {
    setShowSignIn(false);
    formikSignIn.handleReset();
  };
  const handleCloseSignUp = () => {
    setShowSignUp(false);
    formikSignUp.handleReset();
  };

  useEffect(() => {
    if (props.showSignIn === true) setShowSignIn(true);
    if (props.showSignUp === true) setShowSignUp(true);
  }, [props]);

  const initialValues = {
    email: "",
    password: "",
    type: "1",
    // 1 member
    // 2 artist
  };

  const AuthSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 symbols").required("Required"),
  });

  const ChooseTypeSchema = Yup.object().shape({
    type: Yup.string().required("Required"),
  });

  const formikSignIn = useFormik({
    initialValues,
    validationSchema: AuthSchema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      setStatus(null);
      setTimeout(() => {
        handleSignIn(value, { setStatus, setSubmitting });
      }, 1000);
    },
  });

  const formikSignUp = useFormik({
    initialValues,
    validationSchema: AuthSchema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      setStatus(null);
      setTimeout(() => {
        handleSignUp(value, { setStatus, setSubmitting });
      }, 1000);
    },
  });

  const formikChoose = useFormik({
    initialValues,
    validationSchema: ChooseTypeSchema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      setStatus(null);
      setTimeout(() => {
        handleType(value);
      }, 1000);
    },
  });

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

  const getInputChecked = (classname) => {
    const valueType = formikChoose.values.type;
    if (classname === "listen" && valueType === "1")
      return "typeround-active show-text-active";
    if (classname === "artist" && valueType === "2")
      return "typeround-active show-text-active";
    return "";
  };

  const handleSignIn = (value, { setStatus, setSubmitting }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(value.email, value.password)
      .then((values) => {
        setShowSignIn(false);
        setSubmitting(false);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        formikSignIn.handleReset();
        setSubmitting(false);
        if (errorCode === "auth/user-not-found")
          setStatus("User not found. Please sign up.");
        else if (errorCode === "auth/wrong-password")
          setStatus("Incorrect password.");
        else setStatus(errorCode);
      });
  };

  const handleSignUp = (value, { setSubmitting }) => {
    setEmail(value.email);
    setPassword(value.password);
    setShowSignUp(false);
    setShowType(true);
    setSubmitting(false);
    setUidSocial(null)
    formikSignUp.handleReset();
  };

  const handleType = async (result) => {
    const checkSiginSocial = uidSocial != null;
    const names = await email.substring(0, email.lastIndexOf("@"));
    const date = await new Date();
    const DateCreate = await (date.getTime() / 1000).toFixed(0);
    const URL =
      "https://us-central1-myspace-dev-1ae9e.cloudfunctions.net/login-member/addmem";
    // result มาจาก social ถ้าไม่มีแปลว่ามาจากสมัครด้วย Email
    if (checkSiginSocial) {
      await Axios.post(URL, {
        uid: uidSocial,
        display_name: names,
        email: email,
        type: result.type,
        create: DateCreate,
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
          formikSignUp.setStatus("สมัครสมาชิกไม่สำเร็จ");
          setShowSignUp(true);
        });
      setShowType(false);
      formikChoose.handleReset();
      formikChoose.setSubmitting(false);
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (values) => {
          const uid = await values.user.uid;
          await Axios.post(URL, {
            uid: uid,
            display_name: names,
            email: email,
            type: result.type,
            create: DateCreate,
          })
            .then((res) => {
              console.log(res)
            })
            .catch((err) => {
              console.log(err);
              formikSignUp.setStatus("สมัครสมาชิกไม่สำเร็จ");
              setShowSignUp(true);
            });
          setShowType(false);
          formikChoose.handleReset();
          formikChoose.setSubmitting(false);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          formikChoose.handleReset();
          formikChoose.setSubmitting(false);
          console.log(errorCode);
          if (errorCode === "auth/email-already-in-use") {
            formikSignIn.setStatus("You are already registered. Please login.");
            setShowSignIn(true);
          } else {
            formikSignUp.setStatus(errorCode);
            setShowSignUp(true);
          }
          setShowType(false);
        });
    }
  };

  var googleProvider = new firebase.auth.GoogleAuthProvider();
  var facebookProvider = new firebase.auth.FacebookAuthProvider();
  var twitterProvider = new firebase.auth.TwitterAuthProvider();

  const SignInSocial = async (value) => {
    value.setCustomParameters({
      display: "popup",
    });
    const result = await firebase.auth().signInWithPopup(value);
    setShowSignIn(false);
    setShowSignUp(false);
    try {
      // นำค่า uid ไปเช็คที่ API ถ้าไม่มี type ให้เลือกก่อนไม่งั้นก็ signoutไป
      await Axios.post(
        "https://us-central1-myspace-dev-1ae9e.cloudfunctions.net/login-member",
        {
          uid: result.user.uid,
        }
      )
        .then((res) => {
          // ถ้ามีให้ผิดหน้าต่าง
          console.log("เคยสมัครแล้ว");
          
        })
        .catch((err) => {
          // ถ้าไม่มีให้ไปเลือก type แล้วเพิ่มข้อมูลลง DB
          console.log("ยังไม่เคยสมัคร");
          setShowType(true);
          setUidSocial(result.user.uid);
          setEmail(result.user.email);
        });
    
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode);
    }
  };

  const SocialSignIn = () => {
    return (
      <>
        <img
          onClick={() => SignInSocial(facebookProvider)}
          src="/assets/img/icon/Facebook.png"
          alt=""
        />
        <img
          onClick={() => SignInSocial(twitterProvider)}
          src="/assets/img/icon/Twitter.png"
          alt=""
        />
        <img
          onClick={() => SignInSocial(googleProvider)}
          src="/assets/img/icon/Google.png"
          alt=""
        />
        <style jsx>{`
          img {
            cursor: pointer;
            margin-left: 0.5rem;
            width: 2rem;
            transition: 0.2s;
          }
          img:hover {
            width: 35px;
          }
        `}</style>
      </>
    );
  };

  return (
    <>
      {/* begin SignIn */}
      <Modal
        show={showSignIn}
        onHide={handleCloseSignIn}
        size="lg"
        keyboard={false}
      >
        <Modal.Body>
          <div className="text-center">
            <h2 className="text-center mb-3 mt-5">Sign in</h2>
            <p style={{ marginLeft: "75px", marginRight: "75px" }}>
              start listening with myspace.
              <a
                onClick={() => {
                  setShowSignUp(true);
                  handleCloseSignIn();
                }}
                href="#"
              >
                {" "}
                Sign up
              </a>
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
                <Alert>
                  <small> {formikSignIn.status} </small>
                </Alert>
              ) : null}
              <Form.Group>
                <Form.Label>E-mail / Username</Form.Label>
                <Form.Control
                  className={`form-control  ${getInputClassesformikSignIn(
                    "email"
                  )}`}
                  name="email"
                  type="email"
                  {...formikSignIn.getFieldProps("email")}
                />
                {formikSignIn.touched.email && formikSignIn.errors.email ? (
                  <div className="text-danger text-font-13">
                    {formikSignIn.errors.email}
                  </div>
                ) : null}
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className={`form-control  ${getInputClassesformikSignIn(
                    "password"
                  )}`}
                  name="password"
                  type="password"
                  {...formikSignIn.getFieldProps("password")}
                />
                {formikSignIn.touched.password &&
                formikSignIn.errors.password ? (
                  <div className="text-danger text-font-13">
                    {formikSignIn.errors.password}
                  </div>
                ) : null}
              </Form.Group>
              <span className="text-gray">or</span>
              <SocialSignIn />
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
      <Modal show={showSignUp} onHide={handleCloseSignUp} size="lg">
        <Modal.Body>
          <h2 className="text-center mb-3 mt-5">
            Welcome! Let's create your profile
          </h2>
          <p style={{ marginLeft: "3rem", marginRight: "3rem" }}>
            Getting in is easy. Use one of your social networks or start fresh
            with an email address. Already have a Myspace account?{" "}
            <a
              onClick={() => {
                setShowSignIn(true);
                handleCloseSignUp();
              }}
              href="#"
            >
              Sign in
            </a>{" "}
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
                <Alert>{formikSignUp.status}</Alert>
              ) : null}
              <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  className={`form-control  ${getInputClassesformikSignUp(
                    "email"
                  )}`}
                  name="email"
                  type="email"
                  {...formikSignUp.getFieldProps("email")}
                />
                {formikSignUp.touched.email && formikSignUp.errors.email ? (
                  <div className="text-danger text-font-13">
                    {formikSignUp.errors.email}
                  </div>
                ) : null}
              </Form.Group>

              <Form.Group>
                <Form.Label c>Password</Form.Label>
                <Form.Control
                  className={`form-control  ${getInputClassesformikSignUp(
                    "password"
                  )}`}
                  name="password"
                  type="password"
                  {...formikSignUp.getFieldProps("password")}
                />
                {formikSignUp.touched.password &&
                formikSignUp.errors.password ? (
                  <div className="text-danger text-font-13">
                    {formikSignUp.errors.password}
                  </div>
                ) : null}
              </Form.Group>
              <span className="text-gray">or</span>
              <SocialSignIn />
              <a className="float-right" href="#">
                Forgot password
              </a>
              <div className="text-center">
                <Button type="submit" disabled={formikSignUp.isSubmitting}>
                  Create Account
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      {/* end SignUp */}

      {/* begin Type */}
      <Modal show={showType} onHide={handleCloseChoose} size="lg">
        <Modal.Body>
          <h2 className="text-center mb-3 mt-5">
            Select the option the best describe you.
          </h2>
          <p
            className="text-center"
            style={{ marginLeft: "3rem", marginRight: "3rem" }}
          >
            Select the option the best describe you.
          </p>

          <div
            style={{
              marginLeft: "5rem",
              marginRight: "5rem",
              marginBottom: "1rem",
            }}
          >
            <Form
              onSubmit={formikChoose.handleSubmit}
              className="mt-5 text-center"
            >
              <div className="row">
                {/* begin Listen */}
                <div className="col-lg-6">
                  <Form.Group className="mx-auto">
                    <label
                      htmlFor="listen"
                      className={`typeround showText-13  ${getInputChecked(
                        "listen"
                      )}`}
                    >
                      <img
                        src="/assets/img/option/Listen to music.png"
                        alt=""
                      />
                      <p className="text-dark clearMargin">Listen to music</p>
                      <p className="text-13 pr-2 pl-2 showText ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptatibus delectus debitis esse officiis. amet
                        consectetur
                      </p>
                      <input
                        id="listen"
                        type="radio"
                        name="type"
                        value="listen"
                        checked={formikChoose.values.type === "1"}
                        onChange={() => formikChoose.setFieldValue("type", "1")}
                      />
                    </label>
                  </Form.Group>
                </div>
                {/* end Listen */}
                {/* begin artist */}
                <div className="col-lg-6 ">
                  <Form.Group className="mx-auto">
                    <label
                      htmlFor="artist"
                      className={`typeround showText-13 ${getInputChecked(
                        "artist"
                      )}`}
                    >
                      <img src="/assets/img/option/Artits.png" alt="" />
                      <p className="text-dark clearMargin">Artist</p>
                      <p className="text-13 pr-2 pl-2 showText">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptatibus delectus debitis esse officiis. amet
                        consectetur
                      </p>
                      <input
                        id="artist"
                        type="radio"
                        name="type"
                        value="artist"
                        checked={formikChoose.values.type === "2"}
                        onChange={() => formikChoose.setFieldValue("type", "2")}
                      />
                    </label>
                  </Form.Group>
                  {/* end artist */}
                </div>
              </div>

              <div className="text-center">
                <Button
                  disabled={formikChoose.isSubmitting}
                  className="pl-5 pr-5"
                  type="submit"
                >
                  Finish
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      {/* end Type */}
      <style jsx>{`
        .typeround {
          cursor: pointer;
          border: 2px solid #f5f5f5;
          border-radius: 12px;
          padding: 3rem 4rem 1rem 4rem;
        }

        .typeround:hover {
          border-radius: 12px;
          padding: 5rem;
          padding: 0.1rem 0.1rem 1rem 0.1rem;
        }

        input[type="radio"]:checked {
          background-color: #e1e1e1;
          color: black;
          width: 19px;
          height: 19px;
          vertical-align: middle;
          cursor: pointer;
        }

        .typeround:hover img {
          margin-top: -1rem;
        }

        .showText {
          display: none;
        }
        .showText-13:hover .showText {
          display: block;
        }

        .show-text-active .showText {
          display: block;
        }

        .text-13 {
          font-size: 11px;
          word-wrap: break-word;
          display: none;
        }

        .clearMargin {
          margin-top: 1rem;
          margin-bottom: 0rem;
        }

        .text-font-13 {
          margin-top: 0.3rem;
          font-size: 13px;
        }

         {
          /* begin Active */
        }
        .typeround-active {
          border: 2px solid red;
          border-radius: 12px;
          padding: 5rem;
          padding: 0.1rem 0.1rem 1rem 0.1rem;
        }

        .typeround-active img {
          margin-top: -1rem;
        }

         {
          /* end Active */
        }
      `}</style>
    </>
  );
};

export default Auth;
