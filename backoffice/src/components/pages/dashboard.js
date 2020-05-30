import React,{useState} from 'react'
import Aside from '../layouts/Aside'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Content from '../layouts/Content'
import {
    BrowserRouter as Router,
    Switch,
    useLocation
  } from "react-router-dom";

function Dashboard() {
    const [Email, setEmail] = useState(0);
    let location = useLocation();
    console.log(location.pathname);
    
    return (
        <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
            <Header />
            <Aside />
            <Content />
            <Footer />
        </div>
    )
}

export default Dashboard
