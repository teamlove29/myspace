import Head from 'next/head'
import { render } from 'react-dom'
import Header from '../layout/Header'
import SignIn from './Modal/SignUp'


export default function Layout({ children }) {
        return(
            <div>
                <Header/>
                { children }
            </div>

        )
}