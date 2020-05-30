import React from 'react';
import history from '../utils/history';
import {Layout} from "../components/_metronic/layout";
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import Main from '../components/pages/Main/Main'
import AuthPage from '../components/pages/auth/AuthPage'
import Logout from '../components/pages/auth/Logout'
import NotFound from '../components/pages/NotFound'
import BasePage from './BasePage'



// const redirectToNotFound = () => {
//     return <Redirect to="/NotFound" />
//   }


const isLoggedIn = () => {

  const token = localStorage.getItem('access-token-test')
  if(!token){
    return false
  }else{
    return true
  }

  // console.log(test == 'true')
  // localStorage.getItem('access-token-test')
  // return localStorage.getItem(server.LOGIN_PASSED) == YES;
};

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


      {isLoggedIn() ?(
        <Route>
          <BasePage/>
        </Route>
        
      ) : (
        <Route>
            <AuthPage />
        </Route>
          
      )}

        <Route path="/NotFound" component={NotFound} />
        <Route path="/logout" component={Logout} />
      
{/* {!isLoggedIn() ?(
       <Redirect to="/auth/login"/>
      ) : (
        <Route>
            <BasePage/>
        </Route>
          
      )} */}

      </Switch>


    </Router>);
}

export default Routes;




// 
// {
//   <Redirect exact from="/" to="/dashboard"/>
// }

{/* <SecuredRoute exact path="/dashboard" component={Dashboard} /> */ }
{/* <SecuredRoute exact path="/Member" component={Member} /> */ }
{/* <SecuredLogin exact path="/auth" component={AuthPage} /> */ }
{/* <Route exact path="/test" component={TestPage} /> */ }


{/* <Route component={NotFound} /> */ }



