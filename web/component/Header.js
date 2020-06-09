import React , {useState} from 'react'
import {Children} from 'react'
import Nav from './Nav'
export default function Header(props) {
    // console.log(props)
    const [ButtonHide, setButtonHide] = useState(props)
            return (
            <>
            <Nav data={ButtonHide}/>
            { props.Children }
            </>
        );
    }
