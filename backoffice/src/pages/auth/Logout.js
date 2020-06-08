// import React, { Component } from 'react';
// import {Redirect,useHistory} from "react-router-dom";
// class Logout extends Component {

//     SingOut = () => {
//         const ok = 'OK'
//         localStorage.removeItem('access-token-test');
//         return ok
//     }

//     render() {
//         const history = useHistory();
//         return (
//             <div>
//                 {/* {this.SingOut() == 'OK' ? <Redirect to="/" /> : <h1> NoSuscess </h1>} */}
//                 {this.SingOut() == 'OK' ? history.push("/") : <h1> NoSuscess </h1>}
//             </div>
//         );
//     }
// }

// export default Logout;


import React from 'react';
import { Redirect, useHistory } from "react-router-dom";

const Logout = () => {

    let history = useHistory();
    const SingOut =  (e) => {
        localStorage.removeItem('access-token-test');
        history.push('/')
        // window.location.href= "/"
    }

    return (
        <div>
            {SingOut()}
        </div>
    );
}

export default Logout;
