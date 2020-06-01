import Head from 'next/head'
import { render } from 'react-dom'
import Header from '../component/Header'


export default function Layout({ children }) {
        return(
            <div>
                <Header/>
                { children }
            </div>

        )
}