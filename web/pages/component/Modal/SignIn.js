import {Modal, Button } from 'react-bootstrap'
import { setState } from 'react'
import ReactDOM from 'react-dom'
import { AiFillFacebook , AiFillGooglePlusCircle , AiFillTwitterCircle } from "react-icons/ai"

export default function SignInPage(props) {

return(
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
      <div className="form-group" align="center"><h3> Sign in </h3>
      <span className="text-sm-left txt2" id="describe"> Start listening with myspec. <a className="txt1" href="#"> Sign up </a></span> </div>
        <div className="form-group">
          <label className="input-title">Email / Username </label>
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
        <Button className=" btn signIn-btn" onClick={props.onHide}>Sign in</Button>
      </Modal.Footer>
    </Modal>
)
}