import React , { useState} from 'react'
import { Navbar, Nav } from "react-bootstrap";
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'

export default function NavBar() {
 const [SignUpShow, setSignUpShow] = useState(false)
 const [SignInShow, setSignInShow] = useState(false)
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link><a onClick={() => setSignUpShow(true)}> Sign up </a></Nav.Link>
            <Nav.Link><a onClick={() => setSignInShow(true)}> Sign In </a></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <SignUp show={SignUpShow} onHide={() => setSignUpShow(false)} />
      <SignIn show={SignInShow} onHide={() => setSignInShow(false)} />
    </>
  );
}
