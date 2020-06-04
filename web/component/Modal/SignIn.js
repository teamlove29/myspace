import {Modal} from 'react-bootstrap'
import Link from 'next/link'
import Button from '../button/loginButton'
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Facebook from '../../public/assets/img/icon/Facebook.png'
import Twitter from '../../public/assets/img/icon/Twitter.png'
import Google from '../../public/assets/img/icon/Google.png'

export default function SignInPage(props) {

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email')
    .required('Please Input Your Email.'),
    password:Yup.string()
    .min(3 , 'Please Input less than 3 Letters')
    .required('Please Input Password')
  });
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
      onClick={() => this.props.onClickUp()} >
      Sign up
      </a></div>
      <Formik
      initialValues={{ email: '', password: ''}}
      validationSchema={LoginSchema}
      onSubmit={values =>{console.log(values) , props.onHide}}
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
        </div>
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
    `}</style>
    </Modal>
  </>
    )

  }