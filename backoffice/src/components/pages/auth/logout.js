import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class Logout extends Component {

    SingOut = () => {
            console.log('dasdads')
    }

    render() {
        return (
            <div>
                {this.SingOut == 'ok' ? <Redirect to="/auth/login" /> : <h1> NoSuscess </h1>}
            </div>
        );
    }
}

export default Logout;
