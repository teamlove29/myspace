import { Modal } from "react-bootstrap";
import Link from "next/link";
import Router from "next/router";
import Button from "../../button/loginButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Facebook from "../../../../assets/img/icon/Facebook.png";
import Twitter from "../../../../assets/img/icon/Twitter.png";
import Google from "../../../../assets/img/icon/Google.png";
import Counter from '../../../../api/functions/config/config'

export default function SignInPage(props) {
  const [show, setShow] = React.useState(true);
  const handleClose = () => Router.push("/")
  
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Please Input Your Email."),
    password: Yup.string()
      .min(3, "Please Input less than 3 Letters")
      .required("Please Input Password"),
  });


  return (
    <>
      <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-center"
      centered
      >
        <Modal.Header style={{border: 0}} className="header" closeButton></Modal.Header>
        <Modal.Body>
          <div  className="form-group " >
          <div align="center">
            <h3> Sign in </h3>
            <span className="text-sm-left txt2" id="describe">
              Start listening with myspec.
            </span>
            <Link href="../Register/SignUp" ><a>Sign up</a></Link>
            </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) =>
              Counter
              .auth()
                .signInWithEmailAndPassword(values.email, values.password)
                .then(() => {
                  onHide();
                  Location:'./LoginSuccess'
                  console.log("Ok")
                })
                .catch(() => {
                  console.log("No");
                })
            }
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label className="input-title">Email / Username </label>
                  <Field
                    name="email"
                    type="email"
                    className={`form-control input-frm ${
                      touched.email
                        ? errors.email
                          ? "is-invalid"
                          : "is-valid"
                        : ""
                    }`}
                    id="email"
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  />
                </div>
                <div>
                  <label className="input-title">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className={`form-control input-frm ${
                      touched.password
                        ? errors.password
                          ? "is-invalid"
                          : "is-valid"
                        : ""
                    }`}
                    id="pass"
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="invalid-feedback"
                  />
                </div>
                <br />
                <div className="form-group">
                  <span className="txt2"> or </span>
                  <Link href="/">
                    <a>
                      <img src={Facebook} />
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <img src={Twitter} />
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <img src={Google} />
                    </a>
                  </Link>
                  <Link href="../forgotPassword/forgotPassword">
                  <a className="forgot">
                    forgot password
                  </a>
                  </Link>

                </div>
                <br />
                <div className="footer">
                  <Button type="submit">Sign in</Button>
                </div>
              </Form>
            )}
          </Formik>
          </div>
        </Modal.Body>
        <style jsx>{`
          h3 {
            font-weight: 750;
            font-size: 25px;
            align-items: center;
            padding-left: 5px;
          }

          a {
            font-size: 12px;
            color: rgb(224, 139, 28);
            padding-left: 5px;
          }

          img {
            width: 18px;
            height: 18px;
          }

          .modal-size {
            width: 70%;          }

          .txt2 {
            font-size: 11px;
            color: #b6b6b6;
          }

          .input-title {
            font-size: 13px;
          }

          .input-frm {
            border-color: #e7e7e7;
            font-size: 13px;
          }

          .header {
            border: 0;
          }

          .footer {
            align-items: center;
            margin-left: 150px;
          }

          .forgot {
            margin-left: 275px;
          }

          .frm-input {
            margin-left: 180px;
          }

        `}</style>
      </Modal>
    </>
  );
}
