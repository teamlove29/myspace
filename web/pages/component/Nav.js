import { Navbar, Nav } from "react-bootstrap";
import SignUp from "./Modal/Register/SignUp";
import SignIn from "./Modal/Login/SignIn";

export default function NavBar() {

  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="./component/Modal/Register/SignUp"> Sign up </Nav.Link>
            <Nav.Link href="./component/Modal/Login/SignIn"> Sign in </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <style jsx>{`
          Navbar {
            z-index: 2048;
          }
        `}</style>
      </Navbar>
    </>
  );
}
