import React, { useState } from 'react'
import { Navbar , Nav } from 'react-bootstrap'
import SignUp from './Modal/Register/SignUp'
import SignIn from './Modal/Login/SignIn'
<<<<<<< HEAD
=======
import SelectModal from './Modal/Register/ModalSelection'
import ForgotPass from './Modal/Login/forgotPassword/forgotPassword'
import LoginSuccess from './Modal/Login/LoginSuccess'
import SendEmailModal from './Modal/Login/forgotPassword/sendEmail'
import RegisterSuccessModal from './Modal/Register/RegisterSuccess'
>>>>>>> 92f1121a78316f5f61e3c560a3bd857348df5bd0

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
                </Nav>
            </Navbar.Collapse>
            <style jsx>{`
            Navbar {
                z-index: 2048;
            }
            `}</style>
        <SignUp
        show={signUpShow}
        onHide={() => setSignUpShow(false)}
        />
        <SignIn
        show={signInShow}
        onHide={() => setSignInShow(false)}
        />
<<<<<<< HEAD
=======
        />
>>>>>>> 92f1121a78316f5f61e3c560a3bd857348df5bd0
        </Navbar>
        </>
    )
}