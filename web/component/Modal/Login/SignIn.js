import {Modal} from 'react-bootstrap'
import Link from 'next/link'
import Button from '../../button/loginButton'
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Facebook from '../../../public/assets/img/icon/Facebook.png'
import Twitter from '../../../public/assets/img/icon/Twitter.png'
import Google from '../../../public/assets/img/icon/Google.png'
<<<<<<< HEAD
import SignUpPage from '../Register/SignUp'

export default function SignInPage(props) {

  const [SignUpShow, setSignUpShow] = React.useState(false)
=======
import LoginSuccessModal from './LoginSuccess'
import SignUp from '../Register/SignUp'
import FotgotPassModal from './forgotPassword/forgotPassword'
export default function SignInPage(props) {

  const [signUpShow, setSignUpShow] = React.useState(false);
  const [successShow, setSuccessModalShow] = React.useState(false);
  const [forgotPassShow, setForgotPassShow] = React.useState(false);
>>>>>>> 92f1121a78316f5f61e3c560a3bd857348df5bd0

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email')
    .required('Please Input Your Email.'),
    password:Yup.string()
    .min(3 , 'Please Input less than 3 Letters')
    .required('Please Input Password')
  });

  const SignUpClick = () => {
    props.onHide()
    setSignUpShow(true)
  }

<<<<<<< HEAD
  const firebaseConfig = {
    apiKey: "AIzaSyCPZyWWf8oQi3e8o3aqEcUlJNhc30j9ars",
    authDomain: "myspace-dev-1ae9e.firebaseapp.com",
    databaseURL: "https://myspace-dev-1ae9e.firebaseio.com",
    projectId: "myspace-dev-1ae9e",
    storageBucket: "myspace-dev-1ae9e.appspot.com",
    messagingSenderId: "379818176061",
    appId: "1:379818176061:web:9e431d12e626f04e03c454",
    measurementId: "G-YQVB6MPMV3"
  };
=======

  const SignInClick = () => {
    values => console.log(values)
    props.onHide()
    setSuccessModalShow(true)

  }

  const ForgotPassClick = () => {
    props.onHide()
    setForgotPassShow(true)

  }
>>>>>>> 92f1121a78316f5f61e3c560a3bd857348df5bd0

return(
  <>
      <Modal
      {...props}
      aria-labelledby="contained-modal-title-center"
      centered >
      <Modal.Header
      className="header"
      closeButton></Modal.Header>
      <Modal.Body>
      <div
      className="form-group"
      align="center">
      <h3> Sign in </h3>
      <span
      className="text-sm-left txt2" id="describe" >
      Start listening with myspec.
      </span>
      <a
      onClick={SignUpClick} >
      Sign up
      </a></div>
      <Formik
      initialValues={{ email: '', password: ''}}
      validationSchema={LoginSchema}
<<<<<<< HEAD
      onSubmit={values =>console.log(values)}
=======
      onSubmit={SignInClick}
>>>>>>> 92f1121a78316f5f61e3c560a3bd857348df5bd0
      >
      {({ errors ,touched }) => (
      <Form>
      <div className="form-group">
          <label className="input-title">Email / Username </label>
          <Field
          name="email"
          type="email"
          className={`form-control input-frm ${touched.email ? errors.email ? 'is-invalid' : 'is-valid' : ''}`}
          id="email"
           />
           <ErrorMessage
           component="div"
           name="email"
           className="invalid-feedback"
           />
        </div>
        <div>
          <label
          className="input-title">
          Password
          </label>
          <Field
          name="password"
          type="password"
          className={`form-control input-frm ${touched.password ? errors.password ? 'is-invalid' : 'is-valid' : ''}`}
          id="pass"
          />
          <ErrorMessage
          component="div"
          name="password"
          className="invalid-feedback"
          />
        </div>
      <br/>
        <div
        className="form-group"
        >
              <span
              className="txt2"
              > or </span>
              <Link href="#">
              <a><img src={Facebook} /></a>
              </Link>
              <Link href="#">
              <a><img src={Twitter} /></a>
              </Link>
              <Link href="#">
              <a><img src={Google} /></a>
              </Link>
              <a className="forgot"
                onClick={ForgotPassClick} >
                forgot password
              </a>
        </div>
        <br />
      <div
      className="footer"
      >
      <Button
      type="submit"
      >
      Sign in
      </Button>
      </div>
      </Form>
      )}
      </Formik>
      </Modal.Body>
  <style jsx>{`
  h3 {
    font-weight: 750;
    font-size: 25px;
    align-items: center;
    padding-left: 5px ;
  }

  a {
    font-size: 12px;
    color: rgb(224, 139, 28);
    padding-left: 5px ;
  }

  img {
    width: 18px;
    height: 18px;
  }

  .txt2 {
    font-size: 11px;
    color: #b6b6b6;
  }

  .input-title {
    font-size: 13px;
  }

  .input-frm{
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
    `}</style>
<<<<<<< HEAD
    </Modal>
    <SignUpPage
    show={SignUpShow}
    onHide={() => setSignUpShow(false)} />
=======
  </Modal>

  <SignUp
    show={signUpShow}
    onHide={() => setSignUpShow(false)}
  />

  <LoginSuccessModal
  show={successShow}
  onHide={() => setSuccessModalShow(false)}
  />

  <FotgotPassModal
  show={forgotPassShow}
  onHide={() => setForgotPassShow(false)}
  />

>>>>>>> 92f1121a78316f5f61e3c560a3bd857348df5bd0
  </>
    )
  }