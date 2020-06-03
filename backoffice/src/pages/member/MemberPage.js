import React,{useEffect,useState} from 'react';
import axios from 'axios';
import MemberList from './MemberList';

const MemberPage = () => {

const [members, setMember] = useState([]);
const [err, setErr] = useState();

useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        setMember(response.data)
    })
    .catch(err => {
        setErr(err)
    })
}, []);

    return (
        <div>
            <MemberList members={members} />
        </div>
    );
}

export default MemberPage;
