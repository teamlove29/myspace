import React, { useState } from 'react'
import {userRouter} from 'next/router'
import { Navbar , Nav , NavDropdown} from 'react-bootstrap'
import SignUp from '../layout/Modal/SignUp'
import SignIn from '../layout/Modal/SignIn'

    export default function Header() {
        const [signUpShow, setSignUpShow] = React.useState(false);
        const [signInShow, setSignInShow] = React.useState(false);
            return (
            <div style={{
                marginBottom: '5%'
            }}>
                <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="#" >Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link onClick={() => setSignUpShow(true)}>Sign up</Nav.Link>
                            <Nav.Link onClick={() => setSignInShow(true)}>Sign in</Nav.Link>
                            <NavDropdown title="More" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#">About us</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <SignUp show={signUpShow}
                onHide={() => setSignUpShow(false)}
                />
                <SignIn show={signInShow}
                onHide={() => setSignInShow(false)}
                />
            </div>
        );
    }
