
import {Children} from 'react'
import Nav from './Nav'
export default function Header(props) {
            return (
            <>
            <Nav />
            { props.Children }
            </>
        );
    }
