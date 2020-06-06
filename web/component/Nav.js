import { Navbar, Nav } from "react-bootstrap";
import SignUp from "./Modal/Register/SignUp";
import SignIn from "./Modal/Login/SignIn";

export default function NavBar() {
  const [signUpShow, setSignUpShow] = React.useState(false);
  const [signInShow, setSignInShow] = React.useState(false);

  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link onClick={() => setSignUpShow(true)}> Sign up </Nav.Link>
            <Nav.Link onClick={() => setSignInShow(true)}> Sign in </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <style jsx>{`
          Navbar {
            z-index: 2048;
          }
        `}</style>
      </Navbar>
      <SignUp show={signUpShow} onHide={() => setSignUpShow(false)} />
      <SignIn show={signInShow} onHide={() => setSignInShow(false)} />
    </>
  );
}
