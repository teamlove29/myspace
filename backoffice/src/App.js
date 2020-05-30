import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'
import AuthPage from './components/pages/auth/AuthPage'
import Logout from './components/pages/auth/Logout'
import TestPage from './components/pages/TestPage'
import NotFound from './components/pages/NotFound'


const redirectToNotFound = () => {
  return <Redirect to="/NotFound" />
}

const isLoggedIn = () => {

  const test = localStorage.getItem('access-token-test')
  console.log(test == 'true')

  return localStorage.getItem('access-token-test')
  // return localStorage.getItem(server.LOGIN_PASSED) == YES;
};

// Protected Route
// component = Component + paramAll
const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() === 'true' ? (
        <Component {...props} />
      ) : (
          <Redirect to="/auth" />
        )
    }
  />
);

const SecuredLogin = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() === 'true' ? (
        <Redirect to="/" />
      ) : (
          <Component {...props} />
        )
    }
  />
)

const redirectToLogin = () => {
  return <Redirect to="/Login" />;
};

class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect from="/" exact={true} to="/dashboard" />
        <SecuredRoute exact path="/dashboard" component={Dashboard} />
        <SecuredLogin exact path="/auth" component={AuthPage} />
        <Route exact path="/test" component={TestPage} />
        <Route path="/logout" component={Logout} />
        <Route component={NotFound} />

      </Switch>
    );
  }
}

export default App;




