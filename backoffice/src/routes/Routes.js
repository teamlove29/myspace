import React from 'react';
import history from '../utils/history';
import { Router, Route, Redirect, Switch } from 'react-router-dom'
// import {Layout} from "../components/_metronic/layout";
import AuthPage from '../components/pages/auth/AuthPage'
import Logout from '../components/pages/auth/Logout'
import NotFound from '../components/pages/NotFound'
import BasePage from '../components/pages/Main/BasePage'


// const redirectToNotFound = () => {
//     return <Redirect to="/NotFound" />
//   }

const isLoggedIn = () => {
  const token = localStorage.getItem('access-token-test')
    return token

};
const Token = isLoggedIn()

// const SecuredRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isLoggedIn() === 'true' ? (
//         <Component {...props} />
//       ) : (
//           <Redirect to="/auth" />
//         )
//     }
//   />
// );

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
้
        {!Token ? (
          // เข้าหน้าสู่ระบบ
          /*Render auth page when user at `/auth` and not authorized.*/
          <Route>
            <AuthPage />
          </Route>
        ) : (
            // ถ้าเคยเข้าแล้วให้ไปที่หน้าหลัก
            /*Otherwise redirect to root page (`/`)*/
            <Redirect from="/auth" to="/" />
          )}

        <Route path="/logout" component={Logout} />
        <Route path="/NotFound" component={NotFound} />

        {!Token ? (
           
          /*Redirect to `/auth` when user is not authorized*/
          <Redirect to="/auth/login" />
        ) : (
          // ถ้าเข้ามายังหน้า /auth แล้วพบว่าเคยเข้าระบบมาก่อน
          <BasePage />
          )}

      </Switch>
    </Router>);
}

export default Routes;


