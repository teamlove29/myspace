import React, { useEffect, useState ,createContext}  from 'react'
import MemberOverView from "./member-overview";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import membersData from '../../member.json'
export default function Index(props) {


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


const MemberProfile = createContext();


const id = parseInt(props.match.params.id)
const [state, setstate] = useState();
// const store = createContext()
const member = membersData.find(member => member.id === id);
const memberType = member.type

  useEffect(() => {
    setstate(memberType)
  }, [id]);



    return (
        <Router >
            <MemberOverView  {...props} type={memberType} />
        </Router>
    )
}
