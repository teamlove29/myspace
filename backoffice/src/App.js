import React from 'react'
import { Route, Redirect ,Switch} from 'react-router-dom'
import Dashboard from './components/pages/dashboard'
import Login from './components/pages/auth/login'
import Louout from './components/pages/auth/logout'
import NotFound from './components/pages/notFound'

// redirectToNotFound = () => {
//   return <Redirect to="/NotFound" />
// }

function App() {

  return (
    
    <Switch>

    <Route exact path="/Dashboard" component={Dashboard} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/Louout" component={Louout} />
    <Route component={NotFound} />
    
    {/* <Route path="*"  component={this.redirectToNotFound} /> */}
    
    {/* <Route path="/about" component={About} />
    <Route path="/posts" component={Post} />
    <Route path="/projects" component={Project} /> */}

  </Switch>
  )
}

export default App



