import React from 'react';
import history from '../utils/history';
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import AuthPage from '../components/pages/auth/AuthPage'
import Logout from '../components/pages/auth/Logout'
import NotFound from '../components/pages/NotFound'
import BasePage from '../components/pages/Main/BasePage'


const isLoggedIn = () => {
  const token = localStorage.getItem('access-token-test')
  if (!token) {
    return false
  } else {
    return true
  }
};

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


const SecuredRoute = () => (
      // ถ้าล็อคอินแล้วให้ไป basepage ถ้ายัง ให้ไปหน้า login
      isLoggedIn() === true ? (<BasePage />) : (<AuthPage />)
);

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/logout" component={Logout} />
        <SecuredRoute />
        {/* <Route  component={NotFound} /> */}
      </Switch>
    </Router>);
}

export default Routes;


