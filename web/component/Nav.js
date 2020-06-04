import React, { useState } from 'react'
import { Navbar , Nav } from 'react-bootstrap'
import SignUp from './Modal/SignUp'
import SignIn from './Modal/SignIn'
import SelectModal from './Modal/ModalSelection'
import ForgotPass from './Modal/forgotPassword'
import LoginSuccess from './Modal/LoginSuccess'
import SendEmailModal from './Modal/sendEmail'
import RegisterSuccessModal from './RegisterSuccess'

export default function NavBar() {
    const [signUpShow, setSignUpShow] = React.useState(false);
    const [signInShow, setSignInShow] = React.useState(false);
    const [selectShow, setModalShow] = React.useState(false);
    const [forgotShow, setForgotModalShow] = React.useState(false);
    const [successShow, setSuccessModalShow] = React.useState(false);
    const [sendEmailShow, setSendEmailShow] = React.useState(false);
    const [registerSuccessShow, setRegisterSuccessShow] = React.useState(false);

    return (
        <>
        <Navbar collapseOnSelect bg="dark" variant="dark">
            <Navbar.Brand href="#" >Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link onClick={() => setSignUpShow(true)}> Sign up </Nav.Link>
                    <Nav.Link onClick={() => setSignInShow(true)}> Sign in </Nav.Link>
                    <Nav.Link onClick={() => setModalShow(true)}> Select Option Modal </Nav.Link>
                    <Nav.Link onClick={() => setForgotModalShow(true)}> Forgot password Modal </Nav.Link>
                    <Nav.Link onClick={() => setSuccessModalShow(true)}> Login Success Modal </Nav.Link>
                    <Nav.Link onClick={() => setSendEmailShow(true)}> Reset Password Alert Modal </Nav.Link>
                    <Nav.Link onClick={() => setRegisterSuccessShow(true)}> Register Success Alert Modal </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <style jsx>{`
            Navbar {
                z-index: 2048;
            }
            `}</style>
        <ForgotPass
        show={forgotShow}
        onHide={() => setForgotModalShow(false)} />
        <SignUp
        show={signUpShow}
        onHide={() => setSignUpShow(false)}
        />
        <SignIn
        show={signInShow}
        onHide={() => setSignInShow(false)}
        />
        <SelectModal
        show={selectShow}
        onHide={() => setModalShow(false)}
        />
        <LoginSuccess
        show={successShow}
        onHide={() => setSuccessModalShow(false)}
        />
        <SendEmailModal
        show={sendEmailShow}
        onHide={() => setSendEmailShow(false)}
        />
        <RegisterSuccessModal
            show={registerSuccessShow}
            onHide={() => setRegisterSuccessShow(false)}
        />
        </Navbar>
        </>
    )
}