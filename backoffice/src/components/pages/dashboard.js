import React,{useState} from 'react'
import Aside from '../layouts/aside'
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import Content from '../layouts/content'


function Dashboard() {
    const [Email, setEmail] = useState(0);

    console.log(Email);
    


    return (
        <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
            
            <Header />
            <Aside />
            <Content />
            <Footer />
            <button onClick={() => {setEmail(Email + 1)}}>Click </button>
        </div>
    )
}

export default Dashboard
