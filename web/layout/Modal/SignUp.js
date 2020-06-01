import {Modal, Button } from 'react-bootstrap'
import SignIn from './SignIn'
import { AiFillFacebook , AiFillGooglePlusCircle , AiFillTwitterCircle } from "react-icons/ai"
import Link from 'next/link'

export default function SignUpPage(props) {
  const [signInShow, setSignInShow] = React.useState(false);
return(
  <div>
<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="header" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="form-group"><h3> Welcome! Let's create your profile </h3>
      <span className="text-sm-left txt2" id="describe"> Getting in is easy. Use one of your social network or start fresh with an email address
      Already have a Myspace account? <a className="txt1" href="#"> Sign in </a></span> </div>
        <div className="form-group">
          <label className="input-title">Email</label>
          <input type="text" className="form-control frm-input" id="email" />
        </div>
        <div>
          <label className="input-title">Password</label>
          <input type="password" className="form-control frm-input" id="pass" />
        </div>
        <br/>
        <div className="form-group" >
              <span className="txt2" > or </span>
              <a><AiFillFacebook className="fb-login"/></a>
              <a><AiFillTwitterCircle className="twt-login"/></a>
              <a><AiFillGooglePlusCircle className="google-login"/></a>
        </div>
      </Modal.Body>
      <Modal.Footer className="footer">
        <Button className="signup-btn" onClick={props.onHide}>Create Account</Button>
      </Modal.Footer>
    </Modal>
  </div>
)
  function SignIn(){
    props.onHide;
    <SignIn
    show={signInShow}
    onHide={() => setSignInShow(false)}
    />
  }
}