import React, { useState, useEffect, useContext } from "react";
import history from "../utils/history";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import Logout from "../pages/auth/Logout";
import NotFound from "../pages/NotFound";
import BasePage from "../pages/main/BasePage";
import firebase from "../config/config";
import { StoreContext } from '../store/StoreContextProvider';

// It checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to /login.
// const PrivateRoute  = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props =>
//       isLoggedIn() === 'true' ? (
//         <Component {...props} />
//       ) : (
//           <Redirect to="/auth" />
//         )
//     }
//   />
// );

const Routes = () => {
  const [currentUser, setCurrentUser] = useState("ok");
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        setCurrentUser("ok");
      } else {
        setCurrentUser("no");
      }
    });
  }, []);


  // ถ้าล็อคอินแล้วให้ไป basepage ถ้ายัง ให้ไปหน้า login
  const SecuredRoute = () =>
    currentUser === "ok" ? <BasePage /> : <AuthPage />;

    const { token, setToken } = useContext(StoreContext)
    // console.log(token)
  return (
    <Router history={history}>
      <Switch>
        <Route path="/logout" component={Logout} />
        <SecuredRoute />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
