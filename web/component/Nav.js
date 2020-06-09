import React , { useState} from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'

export default function NavBar(props) {
  console.log(props.data.data)
 const [SignUpShow, setSignUpShow] = useState(false)
 const [SignInShow, setSignInShow] = useState(false)
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link><Button onClick={() => setSignUpShow(true)}> Sign up </Button></Nav.Link>
            <Nav.Link><Button onClick={() => setSignInShow(true)}> Sign In </Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <SignUp show={SignUpShow} onHide={() => setSignUpShow(false)} />
      <SignIn show={SignInShow} onHide={() => setSignInShow(false)} />
    </>
  );
}
