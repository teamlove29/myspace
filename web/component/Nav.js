import React, { useState } from 'react'
import { Navbar , Nav , NavDropdown} from 'react-bootstrap'
import SignUp from './Modal/SignUp'
import SignIn from './Modal/SignIn'
import SelectModal from './Modal/ModalSelection'

export default function NavBar() {
    const [signUpShow, setSignUpShow] = React.useState(false);
    const [signInShow, setSignInShow] = React.useState(false);
    const [selectShow, setModalShow] = React.useState(false);

    return (
        <>
        <Navbar collapseOnSelect bg="dark" variant="dark">
            <Navbar.Brand href="#" >Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link onClick={() => setSignUpShow(true)}> Sign up </Nav.Link>
                    <Nav.Link onClick={() => setSignInShow(true)}> Sign in </Nav.Link>
                    <Nav.Link onClick={() => setModalShow(true)}> Select Modal </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <style jsx>{`
            Navbar {
                z-index: 2048;
            }
            `}</style>
        </Navbar>
        <SignUp show={signUpShow}
        onHide={() => setSignUpShow(false)}
        />
        <SignIn show={signInShow}
        onHide={() => setSignInShow(false)}
        />
        <SelectModal show={selectShow}
        onHide={() => setModalShow(false)}
        />
        </>
    )
}