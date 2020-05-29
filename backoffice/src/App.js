import React, { Component } from 'react';
import { Route, Redirect ,Switch} from 'react-router-dom'
import Dashboard from './components/pages/dashboard'
import Login from './components/pages/auth/login'
import Logout from './components/pages/auth/logout'
import Test from './components/pages/test'
import NotFound from './components/pages/notFound'


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
        <Redirect to="/login" />
      )
    }
  />
);

const redirectToLogin = () => {
  return <Redirect to="/Login" />;
};

class App extends Component {
  render() {
    return (
      <Switch>
        {/* <SecuredRoute exact path="/" component={Dashboard} /> */}
    <SecuredRoute exact path="/Dashboard" component={Dashboard} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/Louout" component={Logout} />
    <Route exact path="/Test" component={Test} />
    <Route component={NotFound} />
    
    {/* <Route path="*"  component={this.redirectToNotFound} /> */}
    
    {/* <Route path="/about" component={About} />
    <Route path="/posts" component={Post} />
    <Route path="/projects" component={Project} /> */}

  </Switch>
    );
  }
}

export default App;




