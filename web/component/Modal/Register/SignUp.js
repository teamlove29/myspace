import {Modal} from 'react-bootstrap'
import Button from '../../button/loginButton'
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import Facebook from '../../../public/assets/img/icon/Facebook.png'
import Twitter from '../../../public/assets/img/icon/Twitter.png'
import Google from '../../../public/assets/img/icon/Google.png'
import axios from 'axios'
import SignInPage from '../Login/SignIn'

export default function SignUpPage(props) {
  const [signInShow, setSignInShow] = React.useState(false);

  const RegisSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email')
    .required('Please Input Your Email.'),
    password:Yup.string()
    .min(3 , 'Please Input less than 3 Letters')
    .required('Please Input Password')
  });


  const SignInClick = () => {
    props.onHide()
    setSignInShow(true)
  }
return(
  <>
<Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered >
      <Modal.Header
      className="header"
      closeButton>
      </Modal.Header>
      <Modal.Body>
      <div className="form-group"><h3> Welcome! Let's create your profile </h3>
      <span className="text-sm-left txt2" id="describe"> Getting in is easy. Use one of your social network or start fresh with an email address
      Already have a Myspace account? <a className="txt1"> Sign in </a></span> </div>
      <Formik
      initialValues={{ email: '', password: ''}}
      validationSchema={RegisSchema}
      onSubmit={values =>
      {axios.post('',{
        firstName: 'Fred',
        lastName: 'Flintstone'
        }).then( response => {
          console.log(response);
          }).catch((error) => {
            console.log(error);
            });}}
      >
      {({ errors ,touched }) => (
      <Form>
      <div className="form-group">
          <label className="input-title"> Email </label>
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
          <label className="input-title">Password</label>
          <Field
          name="password"
          type="password"
          className={`form-control input-frm ${touched.password ? errors.password ? 'is-invalid' : 'is-valid' : ''}`}
          id="pass"
          />
          <ErrorMessage component="div" name="password" className="invalid-feedback" />
        </div>
      <br/>
        <div className="form-group" >
              <span className="txt2" > or </span>
              <Link href="#"><a><img src={Facebook} /></a></Link>
              <Link href="#"><a><img src={Twitter} /></a></Link>
              <Link href="#"><a><img src={Google} /></a></Link>
        </div>
        <div className="footer">
      <Button  type="submit"> Create account </Button>
      </div>
      </Form>
      )}
      </Formik>
        <br/>
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